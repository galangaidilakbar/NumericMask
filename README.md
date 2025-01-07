# Laravel Nova Numeric Mask Field

A Laravel Nova field that automatically adds thousand separator dots while typing. Perfect for currency, quantities, or any numeric input that needs better readability.

## Features
- Real-time thousand separator formatting (e.g., 1000 → 1.000)
- Works with copy/paste
- Maintains numeric value in database
- Compatible with Laravel Nova 4.x

## Requirements

- Laravel Nova 4.x or higher
- PHP 7.3 or higher

## Installation

You can install the package via composer:

```bash
composer require galangaidilakbar/numeric-mask
```

## Usage

```php
use Galangaidilakbar\NumericMask\NumericMask;

public function fields(Request $request)
{
    return [
        NumericMask::make('Price'),
    ];
}
```

## Credits

- [Galang Aidil Akbar](https://github.com/galangaidilakbar)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
