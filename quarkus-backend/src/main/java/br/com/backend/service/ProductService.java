package br.com.backend.service;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.Response;

import java.util.Objects;

@ApplicationScoped
public class ProductService {

    public Long update(Long id) {
        // Product productEntity = Product.findById(id);

         // if (Objects.isNull(productEntity))
            // throw new WebApplicationException("Food with id of " + id + " does not exist.", Response.Status.NOT_FOUND);

        return null;
    }

}
