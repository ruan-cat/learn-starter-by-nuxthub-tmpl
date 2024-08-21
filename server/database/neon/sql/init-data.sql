-- 插入 product 表的数据
INSERT INTO product (product_id, sales, sku_id, completed, created_at, updated_at)
SELECT
    (SELECT COALESCE(MAX(product_id), 0) + i FROM product) AS product_id,
    (random() * 100)::INTEGER AS sales,
    (random() * 1000)::INTEGER AS sku_id,
    (random() * 10)::INTEGER AS completed,
    NOW() AS created_at,
    NOW() AS updated_at
FROM generate_series(1, 10) AS s(i);

-- 插入 ruancat_obj_table 表的数据
INSERT INTO ruancat_obj_table (id, create_time, modified_time, version, remark, modified_by, creator, content)
SELECT
    (SELECT COALESCE(MAX(id), 0) + i FROM ruancat_obj_table) AS id,
    NOW() AS create_time,
    NOW() AS modified_time,
    floor(random() * 10)::int AS version,
    LEFT(md5(random()::text), 20) AS remark,
    LEFT(md5(random()::text), 10) AS modified_by,
    LEFT(md5(random()::text), 10) AS creator,
    LEFT(md5(random()::text), 128) AS content
FROM generate_series(1, 10) AS s(i);
