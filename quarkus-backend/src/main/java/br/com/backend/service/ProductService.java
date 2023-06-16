package br.com.backend.service;

import br.com.backend.dto.ProductListDTO;
import br.com.backend.entity.Product;
import io.quarkus.panache.common.Page;
import io.quarkus.panache.common.Sort;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.Response;

import java.util.Objects;

@ApplicationScoped
public class ProductService {

    private long getCountIfFirstFind(int indexForPage) {
        if (indexForPage > 0)
            return Product.count();

        return 0;
    }

    private Page getFilterPaging(int indexForPage, int maxItemsForPage) {
        return Page.of(indexForPage, maxItemsForPage);
    }

    public ProductListDTO get(int indexForPage, int maxItemsForPage) {
        return ProductListDTO
                .builder()
                .countAll(getCountIfFirstFind(indexForPage))
                .data(Product.findAll().page(getFilterPaging(indexForPage, maxItemsForPage)).list())
                .build();
    }

    public ProductListDTO highestPrice(int indexForPage, int maxItemsForPage) {
        Sort filter = Sort.by("monetaryValue").descending();

        return ProductListDTO
                .builder()
                .countAll(getCountIfFirstFind(indexForPage))
                .data(Product.findAll(filter).page(getFilterPaging(indexForPage, maxItemsForPage)).list())
                .build();
    }

    public ProductListDTO lowestPrice(int indexForPage, int maxItemsForPage) {
        Sort filter = Sort.by("monetaryValue").ascending();

        return ProductListDTO
                .builder()
                .countAll(getCountIfFirstFind(indexForPage))
                .data(Product.findAll(filter).page(getFilterPaging(indexForPage, maxItemsForPage)).list())
                .build();
    }

    public Product update(Long id, Product newProduct) {
        Product productEntity = Product.findById(id);

        if (Objects.isNull(productEntity))
            throw new WebApplicationException("Food with id of " + id + " does not exist.", Response.Status.NOT_FOUND);

        productEntity.setDescription(newProduct.getDescription());
        productEntity.setSrc(newProduct.getSrc());
        productEntity.setMonetaryValue(newProduct.getMonetaryValue());

        return productEntity;
    }


    public boolean productIsEmpty(Product product) {
        return Objects.isNull(product) || product.getDescription().isEmpty() || product.getMonetaryValue().isNaN() || product.getSrc().isEmpty();
    }
}
