<?php

/**
 * 订单查询入参
 * @author auto create
 */
class SupplierTopQueryModel
{
	
	/** 
	 * 业务类型
	 **/
	public $biz_type;
	
	/** 
	 * 分销商名称
	 **/
	public $distributor_name;
	
	/** 
	 * 订单结束时间
	 **/
	public $end_time;
	
	/** 
	 * 淘宝交易订单号
	 **/
	public $order_no;
	
	/** 
	 * 订单状态列表
	 **/
	public $order_status_list;
	
	/** 
	 * 当前页
	 **/
	public $page_num;
	
	/** 
	 * 分页数量
	 **/
	public $page_size;
	
	/** 
	 * 用户账号
	 **/
	public $phone_no;
	
	/** 
	 * 订单开始时间
	 **/
	public $start_time;	
}
?>