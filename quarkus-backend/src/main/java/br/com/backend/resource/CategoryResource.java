package br.com.backend.resource;

import br.com.backend.entity.Category;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.Objects;

@Path("/category")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CategoryResource {

    @GET
    public Response findAll() {
        return Response.ok(Category.findAll()).build();
    }

    @POST
    @Transactional
    public Response create(Category category) {
        if (Objects.isNull(category) || Objects.isNull(category.getName()))
            return Response.status(403, "Category is empty!").build();

        Category.persist(category);
        return Response.ok(category).status(201).build();
    }

    @PUT
    @Path("{id}")
    @Transactional
    public Response create(@PathParam("id") Long id, Category category) {
        if (Objects.isNull(category) || Objects.isNull(category.getName()))
            return Response.status(403, "Category is empty!").build();

        Category categoryUpdate = Category.findById(id);

        categoryUpdate.setName(category.getName());

        return Response.ok(categoryUpdate).status(201).build();
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public Response delete(@PathParam("id") Long id) {
        Category category = Category.findById(id);

        if (Objects.isNull(category))
            return Response.status(404, "Category not found!").build();

        category.delete();
        return Response.status(204).build();
    }
}
