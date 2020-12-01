package com.newxton.nxtframework.service;

import com.newxton.nxtframework.entity.NxtUserAddress;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * (NxtUserAddress)表服务接口
 *
 * @author makejava
 * @since 2020-12-01 14:53:04
 */
public interface NxtUserAddressService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    NxtUserAddress queryById(Long id);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit 查询条数
     * @return 对象列表
     */
    List<NxtUserAddress> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param nxtUserAddress 实例对象
     * @return 实例对象
     */
    NxtUserAddress insert(NxtUserAddress nxtUserAddress);

    /**
     * 修改数据
     *
     * @param nxtUserAddress 实例对象
     * @return 实例对象
     */
    NxtUserAddress update(NxtUserAddress nxtUserAddress);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    boolean deleteById(Long id);

    /**
     * 根据UserId查询指定行数据
     * @param offset
     * @param limit
     * @param userId
     * @return
     */
    List<NxtUserAddress> queryAllByUserIdLimit(@Param("offset") Long offset, @Param("limit") Long limit, @Param("userId") Long userId);


}