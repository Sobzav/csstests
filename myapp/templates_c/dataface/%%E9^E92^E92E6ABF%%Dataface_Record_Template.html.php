<?php /* Smarty version 2.6.18, created on 2019-12-03 12:33:55
         compiled from Dataface_Record_Template.html */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'load_record', 'Dataface_Record_Template.html', 20, false),array('function', 'block', 'Dataface_Record_Template.html', 27, false),array('function', 'record_tabs', 'Dataface_Record_Template.html', 48, false),array('function', 'actions', 'Dataface_Record_Template.html', 51, false),array('function', 'actions_menu', 'Dataface_Record_Template.html', 55, false),array('block', 'use_macro', 'Dataface_Record_Template.html', 21, false),array('block', 'fill_slot', 'Dataface_Record_Template.html', 23, false),array('block', 'define_slot', 'Dataface_Record_Template.html', 32, false),array('block', 'translate', 'Dataface_Record_Template.html', 34, false),array('modifier', 'escape', 'Dataface_Record_Template.html', 34, false),array('modifier', 'count', 'Dataface_Record_Template.html', 52, false),)), $this); ?>
<?php echo $this->_plugins['function']['load_record'][0][0]->load_record(array(), $this);?>

<?php $this->_tag_stack[] = array('use_macro', array('file' => "Dataface_Main_Template.html")); $_block_repeat=true;$this->_plugins['block']['use_macro'][0][0]->use_macro($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>

	<?php $this->_tag_stack[] = array('fill_slot', array('name' => 'main_section')); $_block_repeat=true;$this->_plugins['block']['fill_slot'][0][0]->fill_slot($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>
		
		<?php if ($this->_tpl_vars['ENV']['prefs']['show_result_controller']): ?>
		
		<?php echo $this->_plugins['function']['block'][0][0]->block(array('name' => 'before_details_controller'), $this);?>

		<div id="details-controller"><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "Dataface_Details_Controller.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></div>
		<?php echo $this->_plugins['function']['block'][0][0]->block(array('name' => 'after_details_controller'), $this);?>

		<?php endif; ?>
		<?php echo $this->_plugins['function']['block'][0][0]->block(array('name' => 'before_record_heading'), $this);?>

		<?php $this->_tag_stack[] = array('define_slot', array('name' => 'record_heading')); $_block_repeat=true;$this->_plugins['block']['define_slot'][0][0]->define_slot($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>
			
				<h2 class="dataface-record-title"><?php if ($this->_tpl_vars['ENV']['record']): ?><span class="dataface-current-record-prelabel"><b><?php $this->_tag_stack[] = array('translate', array('id' => "templates.Dataface_Record.LABEL_CURRENT_RECORD")); $_block_repeat=true;$this->_plugins['block']['translate'][0][0]->translate($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Current Record<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo $this->_plugins['block']['translate'][0][0]->translate($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>:</b> </span><?php echo ((is_array($_tmp=$this->_tpl_vars['ENV']['record']->getTitle())) ? $this->_run_mod_handler('escape', true, $_tmp) : smarty_modifier_escape($_tmp)); ?>

					<?php $this->assign('pkey', $this->_tpl_vars['ENV']['record']->getPrimaryKeyValue()); ?>
					<?php if ($this->_tpl_vars['ENV']['record']->getTitle() != $this->_tpl_vars['pkey'] && is_numeric ( $this->_tpl_vars['pkey'] )): ?>
						<span class="id-field">#<?php echo ((is_array($_tmp=$this->_tpl_vars['pkey'])) ? $this->_run_mod_handler('escape', true, $_tmp) : smarty_modifier_escape($_tmp)); ?>
</span>
					<?php endif; ?>
					<?php else: ?>No Records Matched your Request<?php endif; ?></h2>
			
		<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo $this->_plugins['block']['define_slot'][0][0]->define_slot($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
		<?php echo $this->_plugins['function']['block'][0][0]->block(array('name' => 'after_record_heading'), $this);?>

		<?php echo $this->_plugins['function']['block'][0][0]->block(array('name' => 'before_record_tabs'), $this);?>

		<?php if ($this->_tpl_vars['ENV']['prefs']['show_record_tabs']): ?>
			<div class="tabs_wrapper">
				
				<nav role="navigation" class="table_tabs">
					<?php echo $this->_plugins['function']['record_tabs'][0][0]->record_tabs(array('mincount' => 2,'id' => 'record_tabs','id_prefix' => "record-tabs-",'class' => 'contentViews','selected_action' => $this->_tpl_vars['ENV']['mode']), $this);?>

				</nav>
				
				<?php echo $this->_plugins['function']['actions'][0][0]->actions(array('var' => 'menus','category' => 'record_actions'), $this);?>
  
				<?php if (count($this->_tpl_vars['menus']) > 0): ?>

					<nav role="navigation" class="personal-tools-menu">
						<?php echo $this->_plugins['function']['actions_menu'][0][0]->actions_menu(array('category' => 'record_actions_menu'), $this);?>

					</nav>
				<?php endif; ?>

				<div style="height:0px;padding:0;margin:0;clear:both"></div>
			</div>

			
		
		
		<div class="documentContent" id="region-content" >
		<?php endif; ?>
		<?php echo $this->_plugins['function']['block'][0][0]->block(array('name' => 'before_record_content'), $this);?>

			<?php $this->_tag_stack[] = array('define_slot', array('name' => 'record_content')); $_block_repeat=true;$this->_plugins['block']['define_slot'][0][0]->define_slot($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>
				Record Content goes here ...
			<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo $this->_plugins['block']['define_slot'][0][0]->define_slot($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
		<?php echo $this->_plugins['function']['block'][0][0]->block(array('name' => 'after_record_content'), $this);?>

		<?php if ($this->_tpl_vars['ENV']['prefs']['show_record_tabs']): ?>
		</div>
		<?php endif; ?>
		<?php echo $this->_plugins['function']['block'][0][0]->block(array('name' => 'before_record_footer'), $this);?>

		<?php $this->_tag_stack[] = array('define_slot', array('name' => 'record_footer')); $_block_repeat=true;$this->_plugins['block']['define_slot'][0][0]->define_slot($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo $this->_plugins['block']['define_slot'][0][0]->define_slot($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
		<?php echo $this->_plugins['function']['block'][0][0]->block(array('name' => 'after_record_footer'), $this);?>

		
		
	<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo $this->_plugins['block']['fill_slot'][0][0]->fill_slot($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>

<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo $this->_plugins['block']['use_macro'][0][0]->use_macro($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>