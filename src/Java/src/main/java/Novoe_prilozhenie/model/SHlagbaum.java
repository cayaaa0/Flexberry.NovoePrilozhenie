package Novoe_prilozhenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novoe_prilozhenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Шлагбаум
 */
@Entity(name = "IISNovoe_prilozhenieШлагбаум")
@Table(schema = "public", name = "Шлагбаум")
public class SHlagbaum {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерШлаг")
    private Integer номершлаг;

    @Column(name = "Положение")
    private String положение;


    public SHlagbaum() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерШлаг() {
      return номершлаг;
    }

    public void setНомерШлаг(Integer номершлаг) {
      this.номершлаг = номершлаг;
    }

    public String getПоложение() {
      return положение;
    }

    public void setПоложение(String положение) {
      this.положение = положение;
    }


}