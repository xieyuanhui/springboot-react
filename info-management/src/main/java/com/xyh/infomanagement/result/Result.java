package com.xyh.infomanagement.result;

/**
 * @author LitheLight
 * @date 2020/9/5
 */
public class Result<T> {

    private static final int CODE_SUCCESS = 200;
    private static final int CODE_FAIL = 500;

    private static final String MSG_SUCCESS = "success";
    private static final String MSG_FAIL = "failed";

    private int code;
    private T data;
    private String msg;

    public Result() {

    }

    public Result(int code) {
        this.code = code;
    }

    public Result(int code, T data) {
        this.code = code;
        this.data = data;
    }

    public Result(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public Result(int code, T data, String msg) {
        this.code = code;
        this.data = data;
        this.msg = msg;
    }

    public static Result success() {
        return new Result(CODE_SUCCESS, MSG_SUCCESS);
    }

    public static Result success(Object data) {
        return new Result(CODE_SUCCESS, data, MSG_SUCCESS);
    }

    public static Result fail() {
        return new Result(CODE_FAIL, MSG_FAIL);
    }

    public static Result fail(String msg) {
        return new Result(CODE_FAIL, msg);
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
