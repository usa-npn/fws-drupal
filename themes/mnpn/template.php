<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728096
 */


/**
 * Override or insert variables into the maintenance page template.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("maintenance_page" in this case.)
 */
/* -- Delete this line if you want to use this function
function mnpn_preprocess_maintenance_page(&$variables, $hook) {
  // When a variable is manipulated or added in preprocess_html or
  // preprocess_page, that same work is probably needed for the maintenance page
  // as well, so we can just re-use those functions to do that work here.
  mnpn_preprocess_html($variables, $hook);
  mnpn_preprocess_page($variables, $hook);
}
// */

/**
 * Override or insert variables into the html templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("html" in this case.)
 */

function mnpn_preprocess_html(&$variables, $hook) {
  drupal_add_css('https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css', array('type' => 'external'));
  // The body tag's classes are controlled by the $classes_array variable. To
  // remove a class from $classes_array, use array_diff().
  //$variables['classes_array'] = array_diff($variables['classes_array'], array('class-to-remove'));

}

/**
 * Override or insert variables into the page templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("page" in this case.)
 */

function mnpn_preprocess_page(&$variables, $hook) {
 // Adds navbar color change on scroll if on front page 
  if (true && drupal_is_front_page()) {
    drupal_add_js(drupal_get_path('theme', 'mnpn') . '/js/nav-scroll.js');
    $vars['scripts'] = drupal_get_js();
  }

  if (isset($variables['node']->type)) {
	$type = $variables['node']->type;
    // If the content type's machine name is "my_machine_name" the file
    // name will be "page--my-machine-name.tpl.php".
	if($type == 'refuge' || $type == 'phenology_trail'){	
	
		$variables['theme_hook_suggestions'][] = 'page__' . $variables['node']->type;
	}
  }  
  
}
// */

/**
 * Override or insert variables into the node templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("node" in this case.)
 */
/*
function mnpn_preprocess_node(&$variables, $hook) {
  // Optionally, run node-type-specific preprocess functions, like
  // mnpn_preprocess_node_page() or mnpn_preprocess_node_story().
  if ($variables['is_front') {
    
      drupal_add_js('https://code.jquery.com/jquery-2.1.4.min.js', 'external');
      drupal_add_js(drupal_get_path('theme', 'mnpn') . '/js/nav-scroll.js');
      $vars['scripts'] = drupal_get_js();
    }   
  }
// */

/* Region options */
function mnpn_region_preffix ( $reg ) {
	$block_bg_type = theme_get_setting( 'mnpn_' . $reg . '_bg_type' );
	$block_bg_img = theme_get_setting( 'mnpn_' . $reg . '_bg_img' );
	$block_bg_parallax = theme_get_setting( 'mnpn_' . $reg . '_bg_parallax' );
	$bg_video = theme_get_setting( 'mnpn_' . $reg . '_bg_video' );
	$bg_video_start = theme_get_setting( 'mnpn_' . $reg . '_bg_video_start' );
	$fullwidth = theme_get_setting( 'mnpn_' . $reg . '_fullwidth' );
	
	$classes = ' class="' . $reg . '_wrapper';
	$styles = '';
	$attributes = '';
	$content = "\n";

	if ( isset( $block_bg_img['fid'] ) && $block_bg_img['fid'] && ( $block_bg_type == 'image' ) ) {
		$file = file_load( $block_bg_img['fid'] );
		$url = file_create_url( $file->uri );
		$styles .= ' style="background-image: url(' . $url . '); background-position: center top;"';
		$classes .= ' img-bg';

		if ( $block_bg_parallax ) {
			$classes .= ' tm-parallax';
			$attributes .= ' data-stellar-background-ratio = "0.5"';
		}
	}

	if ( isset( $bg_video ) && $bg_video && ( $block_bg_type == 'video' ) ) {
		if ( $bg_video_start == null ) {
			$bg_video_start = 0;
		}
		$classes .= ' video-bg';
		$bg_video_start = (int) $bg_video_start;
		$content .= '<a class="tm_video_bg" data-property="{videoURL:\'' . $bg_video . '\', containment:\'#' . $reg . '_wrapper\',autoPlay:true, showControls:false, mute:true, startAt:' . $bg_video_start . ', opacity:1}">youtube</a>';
	}
	
	if ( $fullwidth ) {
		$classes .= ' region-fullwidth';
	}
	
	$classes .= '"';
	
	$output_preffix = '<div id="' . $reg . '_wrapper"' . $classes . $styles . $attributes . '>' . $content;
		if ( !$fullwidth ) {
			$output_preffix .= '<div class="container-12">';
				$output_preffix .= '<div class="grid-12">';
		}

	print $output_preffix;
}
function mnpn_region_suffix ( $reg ) {
	$fullwidth = theme_get_setting( 'mnpn_' . $reg . '_fullwidth' );
	
	$output_suffix = '';
		if ( !$fullwidth ) {
				$output_suffix .= '</div>';
			$output_suffix .= '</div>';
		}
	$output_suffix .= '</div>';

	print $output_suffix;
}
// Overrides default aggregator to open links in new tab
function mnpn_aggregator_block_item($variables) {
  $link = check_url($variables['item']->link);
  $title = check_plain($variables['item']->title);

  // I prefer sprintf to string concatenation.
  return sprintf('<a target="feed-news" href="%s">%s</a>',
                 $link,
                 $title);
}

function mnpn_render_header_block($tagline, $image_url, $border_color='fff'){
	$html = "";

//	$html .= "<img src = '" . $image_url . "' class='header-image' />";
	$html .= "<div id='page-header-tagline' class='clearfix' style='min-width:90%;background-image:url(\"" . $image_url . "\");border-bottom:15px solid #" . $border_color . "'>";
	if($tagline){
		$html .= "<p class = 'tagline-text'>" . $tagline . "</p>";
	}
	$html .= "</div>";
	
	return $html;
}
// */

/**
 * Override or insert variables into the comment templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("comment" in this case.)
 */
/* -- Delete this line if you want to use this function
function mnpn_preprocess_comment(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the region templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("region" in this case.)
 */
/* -- Delete this line if you want to use this function
function mnpn_preprocess_region(&$variables, $hook) {
  // Don't use Zen's region--sidebar.tpl.php template for sidebars.
  //if (strpos($variables['region'], 'sidebar_') === 0) {
  //  $variables['theme_hook_suggestions'] = array_diff($variables['theme_hook_suggestions'], array('region__sidebar'));
  //}
}
// */

/**
 * Override or insert variables into the block templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
/* -- Delete this line if you want to use this function
function mnpn_preprocess_block(&$variables, $hook) {
  // Add a count to all the blocks in the region.
  // $variables['classes_array'][] = 'count-' . $variables['block_id'];

  // By default, Zen will use the block--no-wrapper.tpl.php for the main
  // content. This optional bit of code undoes that:
  //if ($variables['block_html_id'] == 'block-system-main') {
  //  $variables['theme_hook_suggestions'] = array_diff($variables['theme_hook_suggestions'], array('block__no_wrapper'));
  //}
}

// */
