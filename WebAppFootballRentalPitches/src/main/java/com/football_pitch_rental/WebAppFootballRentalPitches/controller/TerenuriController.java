package com.football_pitch_rental.WebAppFootballRentalPitches.controller;

import com.football_pitch_rental.WebAppFootballRentalPitches.entity.Teren;
import com.football_pitch_rental.WebAppFootballRentalPitches.service.TerenuriService;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;

@Controller
//@RequestMapping(path = "/api")
public class TerenuriController {
    private TerenuriService terenuriService;
    public TerenuriController(TerenuriService terenuriService)
    {
        this.terenuriService = terenuriService;
    }

//    @GetMapping("/toateTerenurile")
//    public String getTerenuri(
//            @RequestParam(required = false) Map<String, String> params,
//            Model model, @PageableDefault(size = 10) Pageable pageable) {
//        Map<String, String> filterParams = new HashMap<>();
//        for (Map.Entry<String, String> entry : params.entrySet()) {
//            if (!entry.getKey().equals("page") && !entry.getKey().equals("size")
//                    && !entry.getKey().equals("sort")) {
//
//
//                filterParams.put(entry.getKey(), entry.getValue());
//            }
//        }
//        Page<Teren> terenuri;
//        if (!filterParams.isEmpty()) {
//            terenuri =  terenuriService.findByFilters(filterParams, pageable);
//        }
//        else
//        {
//            terenuri = terenuriService.findAll(pageable);
//        }
//
//        model.addAttribute("terenuri",terenuri);
//        model.addAttribute("filters",params);
//
//        return "terenuri";
//
//    }

    @GetMapping("/toateTerenurile")
    public String findAll(Model model)
    {
        List<Teren> terenuri = terenuriService.findAll();

        model.addAttribute("terenuri",terenuri);
        System.out.println("Accesare pagina toate terenurile");

        return "terenuri";
    }


    @PostMapping("/addTeren")
    public void saveTeren(@RequestBody Teren teren)
    {
        terenuriService.save(teren);
    }
    @GetMapping("/getTeren/{id}")
    public Optional<Teren> findTerenById(@PathVariable Long id)
    {
        return terenuriService.findById(id);
    }
    @PutMapping("/updateTeren/{id}")
    public void updateTerenById(@PathVariable Long id,@RequestBody Teren teren)
    {
        terenuriService.updateById(id,teren);
    }
    @DeleteMapping("/deleteTeren/{id}")
    public void deleteTerenById(@PathVariable Long id)
    {
        terenuriService.deleteById(id);
    }
}
