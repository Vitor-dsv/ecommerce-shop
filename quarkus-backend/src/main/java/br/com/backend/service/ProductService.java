package br.com.backend.service;

import br.com.backend.entity.Product;
import io.quarkus.panache.common.Sort;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.Objects;

@ApplicationScoped
public class ProductService {

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

    public List<Product> highestPrice() {
        return Product.listAll(Sort.by("monetaryValue").descending());
    }

    public List<Product> lowestPrice() {
        return Product.listAll(Sort.by("monetaryValue").ascending());
    }
}
