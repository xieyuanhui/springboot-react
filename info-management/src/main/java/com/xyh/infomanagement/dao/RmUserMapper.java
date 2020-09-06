package com.xyh.infomanagement.dao;

import com.xyh.infomanagement.entity.RmUser;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface RmUserMapper {
    int deleteByPrimaryKey(String idUser);

    int insert(RmUser record);

    int insertSelective(RmUser record);

    List<RmUser> selectAll();

    RmUser selectByPrimaryKey(String idUser);

    int updateByPrimaryKeySelective(RmUser record);

    int updateByPrimaryKey(RmUser record);
}