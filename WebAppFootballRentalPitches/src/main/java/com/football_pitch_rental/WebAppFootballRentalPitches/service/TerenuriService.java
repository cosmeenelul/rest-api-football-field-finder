package com.football_pitch_rental.WebAppFootballRentalPitches.service;

import com.football_pitch_rental.WebAppFootballRentalPitches.entity.Teren;
import com.football_pitch_rental.WebAppFootballRentalPitches.repository.TerenuriRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import jakarta.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class TerenuriService {
    private final TerenuriRepository terenuriRepository;

    @Autowired
    TerenuriService(TerenuriRepository terenuriRepository)
    {
        this.terenuriRepository = terenuriRepository;
    }

    public List<Teren> findAll() {
        return terenuriRepository.findAll();
    }

//    public Page<Teren> findByFilters(Map<String,String> filters, Pageable pageable)
//    {
//        return terenuriRepository.findAll(createSpecificationsFromFilters(filters),pageable);
//    }
//
//    private Specification<Teren> createSpecificationsFromFilters(Map<String, String> filters) {
//        return (root, query, criteriaBuilder) -> {
//            List<Predicate> predicates = new ArrayList<>();
//
//            for (Map.Entry<String, String> entry : filters.entrySet()) {
//                String key = entry.getKey();
//                String value = entry.getValue();
//
//                if (key.equalsIgnoreCase("sector")) {
//
//                    String[] sectors = value.split(",");
//                    List<Integer> sectorValues = new ArrayList<>();
//                    for(String sector: sectors)
//                    {
//                        sectorValues.add(Integer.valueOf(sector));
//                    }
//
//                    predicates.add(root.get(key).in(sectorValues));
//                } else if (key.equalsIgnoreCase("pret")) {
//                    predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get(key), Double.parseDouble(value)));
//                } else {
//                    predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get(key)), "%" + value.toLowerCase() + "%"));
//                }
//            }
//
//            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
//        };
//    }
    public void save(Teren teren)
    {
        terenuriRepository.save(teren);
    }

    public Optional<Teren> findById(Long id)
    {
        return terenuriRepository.findById(id);
    }

    public void updateById(Long id,Teren teren)
    {
        if(!terenuriRepository.existsById(id))
        {
            throw new RuntimeException("TERENUL NU EXISTA !!! ");
        }
            Teren terenCurent = terenuriRepository.findById(id).orElseThrow();

            BeanUtils.copyProperties(teren,terenCurent,"id");

            terenuriRepository.save(terenCurent);
    }
    public void deleteById(Long id)
    {
        if (!terenuriRepository.existsById(id))
        {
            throw new RuntimeException("TERENUL NU EXISTA !!! ");
        }
            terenuriRepository.deleteById(id);
    }
}
