package com.newxton.nxtframework.controller.api.admin;

import com.newxton.nxtframework.entity.NxtContent;
import com.newxton.nxtframework.service.NxtContentService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * @author soyojo.earth@gmail.com
 * @time 2020/7/24
 * @address Shenzhen, China
 * @copyright NxtFramework
 */
@RestController
public class NxtApiAdminNewsRecommendController {

    @Resource
    private NxtContentService nxtContentService;

    @RequestMapping(value = "/api/admin/news/recommend", method = RequestMethod.POST)
    public Map<String, Object> index(@RequestParam(value = "id", required=false) Long id,
                                     @RequestParam(value = "recommend", required=false) Integer recommend
                                     ) {

        Map<String, Object> result = new HashMap<>();
        result.put("status", 0);
        result.put("message", "");

        if (id == null) {
            result.put("status", 52);
            result.put("message", "参数错误");
            return result;
        }

        /*先查询*/
        NxtContent content = nxtContentService.queryById(id);
        if (content == null){
            result.put("status", 49);
            result.put("message", "对应的资讯不存在");
            return result;
        }

        if (recommend != null && !recommend.equals(0)) {
            content.setIsRecommend(1);//推荐
        }
        else {
            content.setIsRecommend(0);//撤销推荐
        }

        nxtContentService.update(content);

        return result;

    }

}
