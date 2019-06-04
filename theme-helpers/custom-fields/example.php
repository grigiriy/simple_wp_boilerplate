<?php

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make( 'post_meta', 'Пример' )
// ->show_on_template( 'page-example.php' )
->show_on_post_type( 'page' )
->add_tab( 'Основная информация', [
    Field::make( 'complex', 'main_information', '' )
        ->add_fields( [
            Field::make( 'rich_text', 'mini_description', 'Мини-описание' )
                ->set_width( 100 ),
            Field::make( 'text', 'phone', 'Телефон' )
                ->set_width( 50 ),
            Field::make("checkbox", "affiliation", "Вкл/Выкл")
                ->set_width( 50 )
				->set_option_value('no')
        ])
])
->add_tab( 'Адрес', [
    Field::make( 'complex', 'address', '' )
        ->add_fields( [
            Field::make( 'text', 'streetaddress', 'Улица/дом' )
                ->set_width( 40 ),
            Field::make( 'text', 'latitude', 'Широта' )
                ->set_width( 30 ),
            Field::make( 'text', 'longitude', 'Долгота' )
                ->set_width( 30 ),
        ])
]);
