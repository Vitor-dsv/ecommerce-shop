package br.com.backend.service;

import br.com.backend.dto.ProductListDTO;
import br.com.backend.entity.Product;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import io.quarkus.panache.common.Page;
import io.quarkus.panache.common.Sort;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.Objects;

@ApplicationScoped
public class ProductService {

    private long getCountIfFirstFindWithCategory(int indexForPage, Long idCategory) {
        if (indexForPage == 0)
            if (idCategory > 0)
                Product.count("categoryId", idCategory);
            else
                return Product.count();

        return 0;
    }

    private Page getFilterPaging(int indexForPage, int maxItemsForPage) {
        return Page.of(indexForPage, maxItemsForPage);
    }

    private PanacheQuery<Product> getProductsForCategory(int indexForPage, int maxItemsForPage, Long idCategory) {
        return Product.find("categoryId", idCategory).page(getFilterPaging(indexForPage, maxItemsForPage));
    }

    public ProductListDTO get(int indexForPage, int maxItemsForPage, Long idCategory) {
        List<Product> data;

        if (idCategory > 0) {
            data = getProductsForCategory(indexForPage, maxItemsForPage, idCategory).list();
        } else {
            data = Product.findAll().page(getFilterPaging(indexForPage, maxItemsForPage)).list();
        }

        return ProductListDTO
                .builder()
                .countAll(getCountIfFirstFindWithCategory(indexForPage, idCategory))
                .data(data)
                .build();
    }

    public ProductListDTO highestPrice(int indexForPage, int maxItemsForPage, Long idCategory) {
        Sort filter = Sort.by("monetaryValue").descending();
        List<Product> data;

        if (idCategory > 0) {
            data = getProductsForCategory(indexForPage, maxItemsForPage, idCategory).stream().filter();
        } else {
            data = Product.findAll().page(getFilterPaging(indexForPage, maxItemsForPage)).list();
        }


        return ProductListDTO
                .builder()
                .countAll(getCountIfFirstFindWithCategory(indexForPage))
                .data(Product.findAll(filter).page(getFilterPaging(indexForPage, maxItemsForPage)).list())
                .build();
    }

    public ProductListDTO lowestPrice(int indexForPage, int maxItemsForPage, Long idCategory) {
        Sort filter = Sort.by("monetaryValue").ascending();

        return ProductListDTO
                .builder()
                .countAll(getCountIfFirstFindWithCategory(indexForPage))
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
        productEntity.setCategory(newProduct.getCategory());

        return productEntity;
    }


    public boolean productIsEmpty(Product product) {
        return Objects.isNull(product) || product.getDescription().isEmpty() || product.getMonetaryValue().isNaN() || product.getSrc().isEmpty() || Objects.isNull(product.getCategory());
    }
}
