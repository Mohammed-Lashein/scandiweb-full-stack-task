<?php

namespace Src\Backend\Models;

abstract class Product {
  private $id;
  private string $name;
  private bool $inStock;
  private array $gallery;
  private string $description;
  private string $category;
  private array $attributes;
  private string $brand;

  public function getProductDetails($productId) {
    $productIdSanitized = htmlspecialchars($productId);
    '
    $query = "SELECT * FROM products where id = :productId;
    $stmt = this->db->prepare($stmt);
    $result = $stmt->execute(array(:productId => $productIdSanitized)"
    $productData = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($productData)
    ';
  }
}
class ClothesProduct extends Product {

}
class TechProduct extends Product {
}

class SizeAttributes {
}

abstract class AttributeSet {
  private $id;
  private array $items;
  private $name;
  private $type = "text";
  // The type is all is text except for colors it is swatch, so I added 
  // the type here then I override it in the ColorAttributesSet class . 

}

class ColorAttributesSet extends AttributeSet {
  private $type = "swatch";
}
class CapacityAttirbuteSet extends AttributeSet {
}
class Attribute {
  private string $displayValue;
  private string $value;
  private string $id;
}
class Price {
  private int $amount;
  private Currency $currency;
}
class Currency {
  private string $label;
  private string $symbol;

}