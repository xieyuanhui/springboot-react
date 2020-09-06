package com.xyh.infomanagement.service;

import com.xyh.infomanagement.dao.RmUserMapper;
import com.xyh.infomanagement.entity.RmUser;
import com.xyh.infomanagement.result.Result;
import com.xyh.infomanagement.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

/**
 * @author LitheLight
 * @date 2020/9/5
 */
@Service
public class RmUserService {

    @Autowired
    RmUserMapper rmUserMapper;

    public Result<String> addUser(RmUser rmUser) {
        String id = UUID.randomUUID().toString();
        id = id.replace("-", "");
        String idUser = id.substring(0, 12);
        RmUser rmUser1 = rmUserMapper.selectByPrimaryKey(id);
        if (rmUser1 != null) {
            return Result.fail();
        }
        rmUser.setIdUser(idUser);
        int result = rmUserMapper.insert(rmUser);
        if (result == 1) {
            return Result.success();
        } else {
            return Result.fail();
        }
    }

    public Result<List<RmUser>> queryAllUsers() {
        List<RmUser> rmUserList = rmUserMapper.selectAll();
        for (RmUser rmUser : rmUserList) {
        }
        return Result.success(rmUserList);
    }

    public Result<RmUser> queryById(String idUser) {
        RmUser rmUser = rmUserMapper.selectByPrimaryKey(idUser);
        return Result.success(rmUser);
    }

    public Result<String> updateUser(RmUser rmUser) {
        RmUser rmUser1 = rmUserMapper.selectByPrimaryKey(rmUser.getIdUser());
        if (null == rmUser1) {
            return Result.fail();
        }
        int result = rmUserMapper.updateByPrimaryKeySelective(rmUser);
        if (result == 1) {
            return Result.success();
        } else {
            return Result.fail();
        }
    }

    public Result<String> deleteUser(String idUser) {
        RmUser rmUser1 = rmUserMapper.selectByPrimaryKey(idUser);
        if (null == rmUser1) {
            return Result.fail();
        }
        int result = rmUserMapper.deleteByPrimaryKey(idUser);
        if (result == 1) {
            return Result.success();
        } else {
            return Result.fail();
        }
    }
}
