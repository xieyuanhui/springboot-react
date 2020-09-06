package com.xyh.infomanagement.utils;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * @author LitheLight
 * @date 2020/9/6
 */
public class Utils {

    public static Date dealDateFormat(Date oldDate) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String strDate= sdf.format(oldDate);
        Date newDate = null;
        try {
            newDate =sdf.parse(strDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return newDate;
    }
}
