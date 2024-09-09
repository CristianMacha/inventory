CREATE TABLE IF NOT EXISTS categories (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(80) NOT NULL,
    description     TEXT NULL
    active          BOOLEAN DEFAULT 1
);

CREATE TABLE IF NOT EXISTS type_registrations (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(80) NOT NULL,
    description     TEXT NULL
    active          BOOLEAN DEFAULT 1
);

CREATE TABLE IF NOT EXISTS products (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(255) NOT NULL,
    description     TEXT NULL,
    stock           INT NOT NULL DEFAULT 0,
    retail_price    DECIMAL(10, 2) DECIMAL 0.00,
    wholesale_price DECIMAL(10, 2) DECIMAL 0.00,
    active          BOOLEAN DEFAULT 1,
    created_by      VARCHAR(30) NOT NULL,
    updated_by      VARCHAR(30) NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    category_id     INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS registrations (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    description     TEXT NULL,
    quantity        INT NOT NULL,
    active          BOOLEAN DEFAULT 1,
    type_id         INT NOT NULL,
    product_id      INT NOT NULL,
    created_by      VARCHAR(30) NOT NULL,
    updated_by      VARCHAR(30) NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (type_id) REFERENCES type_registrations(id)
    FOREIGN KEY (product_id) REFERENCES products(id)
);