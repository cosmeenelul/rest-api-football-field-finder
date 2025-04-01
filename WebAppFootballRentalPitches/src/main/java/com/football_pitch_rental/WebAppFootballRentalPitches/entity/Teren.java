package com.football_pitch_rental.WebAppFootballRentalPitches.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;

@Table(name = "tblterenuri")
@Entity
public class Teren {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    @Column(name = "id")
    private Long id;

    @Column(name = "nume")
    private String nume;

    @Column(name = "locatie")
    private String locatie;

    @Column(name = "telefon")
    private String telefon;

    @Column(name = "pretpeora")
    private Integer pretPeOra;

    @Column(name = "latitudine")
    private Double latitudine;

    @Column(name = "longitudine")
    private Double longitudine;

    @Column(name = "ratings")
    private Double ratings;

    public Teren(){}

    public Teren(Long id, String nume, String locatie, String telefon, Integer pretPeOra, Double latitudine, Double longitudine, Double ratings) {
        this.id = id;
        this.nume = nume;
        this.locatie = locatie;
        this.telefon = telefon;
        this.pretPeOra = pretPeOra;
        this.latitudine = latitudine;
        this.longitudine = longitudine;
        this.ratings = ratings;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getLocatie() {
        return locatie;
    }

    public void setLocatie(String locatie) {
        this.locatie = locatie;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public Integer getPretPeOra() {
        return pretPeOra;
    }

    public void setPretPeOra(Integer pretPeOra) {
        this.pretPeOra = pretPeOra;
    }

    public Double getLatitudine() {
        return latitudine;
    }

    public void setLatitudine(Double latitudine) {
        this.latitudine = latitudine;
    }

    public Double getLongitudine() {
        return longitudine;
    }

    public void setLongitudine(Double longitudine) {
        this.longitudine = longitudine;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Double getRatings() {
        return ratings;
    }

    public void setRatings(Double ratings) {
        this.ratings = ratings;
    }

    @Override
    public String toString() {

        System.out.println("Teren{" +
                "id=" + getId() +
                ", nume='" + getNume() + '\'' +
                ", locatie='" + getLocatie() + '\'' +
                ", telefon='" + getTelefon() + '\'' +
                ", pretPeOra=" + getPretPeOra() +
                ", latitudine=" + getLatitudine() +
                ", longitudine=" + getLongitudine() +
                '}');
        return "Teren{" +
                "id=" + getId() +
                ", nume='" + getNume() + '\'' +
                ", locatie='" + getLocatie() + '\'' +
                ", telefon='" + getTelefon() + '\'' +
                ", pretPeOra=" + getPretPeOra() +
                ", latitudine=" + getLatitudine() +
                ", longitudine=" + getLongitudine() +
                '}';



    }

}
