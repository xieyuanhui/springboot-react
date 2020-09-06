package com.xyh.infomanagement.controller;

import com.xyh.infomanagement.entity.RmUser;
import com.xyh.infomanagement.result.Result;
import com.xyh.infomanagement.service.RmUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author LitheLight
 * @date 2020/9/5
 */
@CrossOrigin
@RestController
@RequestMapping("/api/rm_user")
public class RmUserController {

    @Autowired
    RmUserService rmUserService;

    @PostMapping("/info")
    public Result<String> addUser(@RequestBody RmUser rmUser) {
        return rmUserService.addUser(rmUser);
    }

    @GetMapping("/info")
    public Result<List<RmUser>> queryAllUsers() {
        return rmUserService.queryAllUsers();
    }

    @GetMapping("/info/{idUser}")
    public Result<RmUser> queryById(@PathVariable(value = "idUser") String idUser) {
        return rmUserService.queryById(idUser);
    }

    @PutMapping("/info")
    public Result<String> updateUser(@RequestBody RmUser rmUser) {
        return rmUserService.updateUser(rmUser);
    }

    @DeleteMapping("/info/{idUser}")
    public Result<String> deleteUser(@PathVariable(value = "idUser") String idUser) {
        return rmUserService.deleteUser(idUser);
    }
}
