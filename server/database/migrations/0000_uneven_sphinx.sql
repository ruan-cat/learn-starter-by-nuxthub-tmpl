CREATE TABLE `product` (
	`product_id` integer PRIMARY KEY NOT NULL,
	`sales` integer DEFAULT 0 NOT NULL,
	`sku_id` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `todos` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`title` text NOT NULL,
	`completed` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL
);
