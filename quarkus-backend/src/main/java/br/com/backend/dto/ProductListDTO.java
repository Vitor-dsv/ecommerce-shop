package br.com.backend.dto;

import br.com.backend.entity.Product;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductListDTO {
    public List<Product> data;
    public Long countAll;
}
