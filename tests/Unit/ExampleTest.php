<?php

declare(strict_types=1);

namespace App\Tests\Unit;

use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    #[Test]
    public function it_should_assert_true(): void
    {
        self::assertTrue(true);
    }
}
