package Novoe_prilozhenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novoe_prilozhenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Паркомат
 */
@Entity(name = "IISNovoe_prilozhenieПаркомат")
@Table(schema = "public", name = "Паркомат")
public class Parkomat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерПарк")
    private Integer номерпарк;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Terminal")
    @Convert("Terminal")
    @Column(name = "Терминал", length = 16, unique = true, nullable = false)
    private UUID _terminalid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Terminal", insertable = false, updatable = false)
    private Terminal terminal;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Usluga")
    @Convert("Usluga")
    @Column(name = "Услуга", length = 16, unique = true, nullable = false)
    private UUID _uslugaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Usluga", insertable = false, updatable = false)
    private Usluga usluga;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SHlagbaum")
    @Convert("SHlagbaum")
    @Column(name = "Шлагбаум", length = 16, unique = true, nullable = false)
    private UUID _shlagbaumid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SHlagbaum", insertable = false, updatable = false)
    private SHlagbaum shlagbaum;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Parkovka")
    @Convert("Parkovka")
    @Column(name = "Парковка", length = 16, unique = true, nullable = false)
    private UUID _parkovkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Parkovka", insertable = false, updatable = false)
    private Parkovka parkovka;


    public Parkomat() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерПарк() {
      return номерпарк;
    }

    public void setНомерПарк(Integer номерпарк) {
      this.номерпарк = номерпарк;
    }


}