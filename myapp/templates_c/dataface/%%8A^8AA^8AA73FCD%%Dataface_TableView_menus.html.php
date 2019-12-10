<?php /* Smarty version 2.6.18, created on 2019-12-03 12:23:49
         compiled from Dataface_TableView_menus.html */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'actions', 'Dataface_TableView_menus.html', 21, false),array('function', 'actions_menu', 'Dataface_TableView_menus.html', 24, false),array('modifier', 'count', 'Dataface_TableView_menus.html', 22, false),)), $this); ?>
    

 <?php echo $this->_plugins['function']['actions'][0][0]->actions(array('var' => 'menus','category' => 'table_actions'), $this);?>
  
 <?php if (count($this->_tpl_vars['menus']) > 0): ?>
 <nav role="navigation" class="personal-tools-menu ">
        <?php echo $this->_plugins['function']['actions_menu'][0][0]->actions_menu(array('category' => 'table_actions_menu'), $this);?>

    </nav>
<?php endif; ?>