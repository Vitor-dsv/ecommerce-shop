package br.com.backend.resource;

import br.com.backend.entity.Product;
import br.com.backend.service.ProductService;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/product")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProductResource {
    @Inject
    private ProductService productService;

    @GET
    public List<Product> findAll() {
        return Product.listAll();
    }

    @GET
    @Path("price/lowest")
    public List<Product> findLowestPrice() {
        return productService.lowestPrice();
    }

    @GET
    @Path("price/highest")
    public List<Product> findHighestPrice() {
        return productService.highestPrice();
    }

    @POST
    @Transactional
    public Response create(Product product) {
        if (productService.productIsEmpty(product))
            return Response.status(404, "Product is empty!").build();

        Product.persist(product);

        return Response.ok(product).status(201).build();
    }

    @PUT
    @Path("{id}")
    @Transactional
    public Response update(@PathParam("id") Long id, Product product) {
        if (productService.productIsEmpty(product))
            return Response.status(404, "Product is empty!").build();

        Product productUpdate = productService.update(id, product);

        return Response.ok(productUpdate).build();
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public Response delete(@PathParam("id") Long id) {
        Product product = Product.findById(id);

        if (productService.productIsEmpty(product))
            return Response.status(404, "Product not found!").build();

        product.delete();
        return Response.status(204).build();
    }
}
