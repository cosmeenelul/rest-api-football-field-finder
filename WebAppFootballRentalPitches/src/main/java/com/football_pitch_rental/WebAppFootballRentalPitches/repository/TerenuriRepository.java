package com.football_pitch_rental.WebAppFootballRentalPitches.repository;

import com.football_pitch_rental.WebAppFootballRentalPitches.entity.Teren;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;


@RepositoryRestResource(path="terenuri")
public interface TerenuriRepository extends JpaRepository<Teren , Long> , JpaSpecificationExecutor<Teren>{

}
//