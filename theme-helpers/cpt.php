<?php
function true_register_post_type_init()
{
    $labels = array(
      'name' => 'Катадлог',
      'singular_name' => 'Каталог',
      'add_new' => 'Добавить каталог',
      'add_new_item' => 'Добавить новый каталог',
      'edit_item' => 'Редактировать каталог',
      'new_item' => 'Новый каталог',
      'all_items' => 'Все каталоги',
      'view_item' => 'Просмотр каталогов на сайте',
      'search_items' => 'Искать каталог',
      'not_found' => 'Каталогов не найдено.',
      'not_found_in_trash' => 'В корзине нет каталогов.',
      'menu_name' => 'Каталоги'
    );
    $args = array(
      'labels' => $labels,
      'public' => true,
      'show_ui' => true,
      'has_archive' => false,
      'show_in_rest' => false,
      'menu_position' => 50,
      'menu_icon' => 'dashicons-screenoptions',
      'supports' => array(
        'title',
        'page-attributes',
        'editor',
        'thumbnail',
      )
    );
    register_post_type ( 'quiz', $args );



} //function close    
