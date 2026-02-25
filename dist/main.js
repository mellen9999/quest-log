// @bun
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = import.meta.require;

// node_modules/neo-blessed/lib/alias.js
var require_alias = __commonJS((exports) => {
  var alias = exports;
  alias.bools = {
    auto_left_margin: ["bw", "bw"],
    auto_right_margin: ["am", "am"],
    back_color_erase: ["bce", "ut"],
    can_change: ["ccc", "cc"],
    ceol_standout_glitch: ["xhp", "xs"],
    col_addr_glitch: ["xhpa", "YA"],
    cpi_changes_res: ["cpix", "YF"],
    cr_cancels_micro_mode: ["crxm", "YB"],
    dest_tabs_magic_smso: ["xt", "xt"],
    eat_newline_glitch: ["xenl", "xn"],
    erase_overstrike: ["eo", "eo"],
    generic_type: ["gn", "gn"],
    hard_copy: ["hc", "hc"],
    hard_cursor: ["chts", "HC"],
    has_meta_key: ["km", "km"],
    has_print_wheel: ["daisy", "YC"],
    has_status_line: ["hs", "hs"],
    hue_lightness_saturation: ["hls", "hl"],
    insert_null_glitch: ["in", "in"],
    lpi_changes_res: ["lpix", "YG"],
    memory_above: ["da", "da"],
    memory_below: ["db", "db"],
    move_insert_mode: ["mir", "mi"],
    move_standout_mode: ["msgr", "ms"],
    needs_xon_xoff: ["nxon", "nx"],
    no_esc_ctlc: ["xsb", "xb"],
    no_pad_char: ["npc", "NP"],
    non_dest_scroll_region: ["ndscr", "ND"],
    non_rev_rmcup: ["nrrmc", "NR"],
    over_strike: ["os", "os"],
    prtr_silent: ["mc5i", "5i"],
    row_addr_glitch: ["xvpa", "YD"],
    semi_auto_right_margin: ["sam", "YE"],
    status_line_esc_ok: ["eslok", "es"],
    tilde_glitch: ["hz", "hz"],
    transparent_underline: ["ul", "ul"],
    xon_xoff: ["xon", "xo"]
  };
  alias.numbers = {
    columns: ["cols", "co"],
    init_tabs: ["it", "it"],
    label_height: ["lh", "lh"],
    label_width: ["lw", "lw"],
    lines: ["lines", "li"],
    lines_of_memory: ["lm", "lm"],
    magic_cookie_glitch: ["xmc", "sg"],
    max_attributes: ["ma", "ma"],
    max_colors: ["colors", "Co"],
    max_pairs: ["pairs", "pa"],
    maximum_windows: ["wnum", "MW"],
    no_color_video: ["ncv", "NC"],
    num_labels: ["nlab", "Nl"],
    padding_baud_rate: ["pb", "pb"],
    virtual_terminal: ["vt", "vt"],
    width_status_line: ["wsl", "ws"],
    bit_image_entwining: ["bitwin", "Yo"],
    bit_image_type: ["bitype", "Yp"],
    buffer_capacity: ["bufsz", "Ya"],
    buttons: ["btns", "BT"],
    dot_horz_spacing: ["spinh", "Yc"],
    dot_vert_spacing: ["spinv", "Yb"],
    max_micro_address: ["maddr", "Yd"],
    max_micro_jump: ["mjump", "Ye"],
    micro_col_size: ["mcs", "Yf"],
    micro_line_size: ["mls", "Yg"],
    number_of_pins: ["npins", "Yh"],
    output_res_char: ["orc", "Yi"],
    output_res_horz_inch: ["orhi", "Yk"],
    output_res_line: ["orl", "Yj"],
    output_res_vert_inch: ["orvi", "Yl"],
    print_rate: ["cps", "Ym"],
    wide_char_size: ["widcs", "Yn"]
  };
  alias.strings = {
    acs_chars: ["acsc", "ac"],
    back_tab: ["cbt", "bt"],
    bell: ["bel", "bl"],
    carriage_return: ["cr", "cr"],
    change_char_pitch: ["cpi", "ZA"],
    change_line_pitch: ["lpi", "ZB"],
    change_res_horz: ["chr", "ZC"],
    change_res_vert: ["cvr", "ZD"],
    change_scroll_region: ["csr", "cs"],
    char_padding: ["rmp", "rP"],
    clear_all_tabs: ["tbc", "ct"],
    clear_margins: ["mgc", "MC"],
    clear_screen: ["clear", "cl"],
    clr_bol: ["el1", "cb"],
    clr_eol: ["el", "ce"],
    clr_eos: ["ed", "cd"],
    column_address: ["hpa", "ch"],
    command_character: ["cmdch", "CC"],
    create_window: ["cwin", "CW"],
    cursor_address: ["cup", "cm"],
    cursor_down: ["cud1", "do"],
    cursor_home: ["home", "ho"],
    cursor_invisible: ["civis", "vi"],
    cursor_left: ["cub1", "le"],
    cursor_mem_address: ["mrcup", "CM"],
    cursor_normal: ["cnorm", "ve"],
    cursor_right: ["cuf1", "nd"],
    cursor_to_ll: ["ll", "ll"],
    cursor_up: ["cuu1", "up"],
    cursor_visible: ["cvvis", "vs"],
    define_char: ["defc", "ZE"],
    delete_character: ["dch1", "dc"],
    delete_line: ["dl1", "dl"],
    dial_phone: ["dial", "DI"],
    dis_status_line: ["dsl", "ds"],
    display_clock: ["dclk", "DK"],
    down_half_line: ["hd", "hd"],
    ena_acs: ["enacs", "eA"],
    enter_alt_charset_mode: ["smacs", "as"],
    enter_am_mode: ["smam", "SA"],
    enter_blink_mode: ["blink", "mb"],
    enter_bold_mode: ["bold", "md"],
    enter_ca_mode: ["smcup", "ti"],
    enter_delete_mode: ["smdc", "dm"],
    enter_dim_mode: ["dim", "mh"],
    enter_doublewide_mode: ["swidm", "ZF"],
    enter_draft_quality: ["sdrfq", "ZG"],
    enter_insert_mode: ["smir", "im"],
    enter_italics_mode: ["sitm", "ZH"],
    enter_leftward_mode: ["slm", "ZI"],
    enter_micro_mode: ["smicm", "ZJ"],
    enter_near_letter_quality: ["snlq", "ZK"],
    enter_normal_quality: ["snrmq", "ZL"],
    enter_protected_mode: ["prot", "mp"],
    enter_reverse_mode: ["rev", "mr"],
    enter_secure_mode: ["invis", "mk"],
    enter_shadow_mode: ["sshm", "ZM"],
    enter_standout_mode: ["smso", "so"],
    enter_subscript_mode: ["ssubm", "ZN"],
    enter_superscript_mode: ["ssupm", "ZO"],
    enter_underline_mode: ["smul", "us"],
    enter_upward_mode: ["sum", "ZP"],
    enter_xon_mode: ["smxon", "SX"],
    erase_chars: ["ech", "ec"],
    exit_alt_charset_mode: ["rmacs", "ae"],
    exit_am_mode: ["rmam", "RA"],
    exit_attribute_mode: ["sgr0", "me"],
    exit_ca_mode: ["rmcup", "te"],
    exit_delete_mode: ["rmdc", "ed"],
    exit_doublewide_mode: ["rwidm", "ZQ"],
    exit_insert_mode: ["rmir", "ei"],
    exit_italics_mode: ["ritm", "ZR"],
    exit_leftward_mode: ["rlm", "ZS"],
    exit_micro_mode: ["rmicm", "ZT"],
    exit_shadow_mode: ["rshm", "ZU"],
    exit_standout_mode: ["rmso", "se"],
    exit_subscript_mode: ["rsubm", "ZV"],
    exit_superscript_mode: ["rsupm", "ZW"],
    exit_underline_mode: ["rmul", "ue"],
    exit_upward_mode: ["rum", "ZX"],
    exit_xon_mode: ["rmxon", "RX"],
    fixed_pause: ["pause", "PA"],
    flash_hook: ["hook", "fh"],
    flash_screen: ["flash", "vb"],
    form_feed: ["ff", "ff"],
    from_status_line: ["fsl", "fs"],
    goto_window: ["wingo", "WG"],
    hangup: ["hup", "HU"],
    init_1string: ["is1", "i1"],
    init_2string: ["is2", "is"],
    init_3string: ["is3", "i3"],
    init_file: ["if", "if"],
    init_prog: ["iprog", "iP"],
    initialize_color: ["initc", "Ic"],
    initialize_pair: ["initp", "Ip"],
    insert_character: ["ich1", "ic"],
    insert_line: ["il1", "al"],
    insert_padding: ["ip", "ip"],
    key_a1: ["ka1", "K1"],
    key_a3: ["ka3", "K3"],
    key_b2: ["kb2", "K2"],
    key_backspace: ["kbs", "kb"],
    key_beg: ["kbeg", "@1"],
    key_btab: ["kcbt", "kB"],
    key_c1: ["kc1", "K4"],
    key_c3: ["kc3", "K5"],
    key_cancel: ["kcan", "@2"],
    key_catab: ["ktbc", "ka"],
    key_clear: ["kclr", "kC"],
    key_close: ["kclo", "@3"],
    key_command: ["kcmd", "@4"],
    key_copy: ["kcpy", "@5"],
    key_create: ["kcrt", "@6"],
    key_ctab: ["kctab", "kt"],
    key_dc: ["kdch1", "kD"],
    key_dl: ["kdl1", "kL"],
    key_down: ["kcud1", "kd"],
    key_eic: ["krmir", "kM"],
    key_end: ["kend", "@7"],
    key_enter: ["kent", "@8"],
    key_eol: ["kel", "kE"],
    key_eos: ["ked", "kS"],
    key_exit: ["kext", "@9"],
    key_f0: ["kf0", "k0"],
    key_f1: ["kf1", "k1"],
    key_f10: ["kf10", "k;"],
    key_f11: ["kf11", "F1"],
    key_f12: ["kf12", "F2"],
    key_f13: ["kf13", "F3"],
    key_f14: ["kf14", "F4"],
    key_f15: ["kf15", "F5"],
    key_f16: ["kf16", "F6"],
    key_f17: ["kf17", "F7"],
    key_f18: ["kf18", "F8"],
    key_f19: ["kf19", "F9"],
    key_f2: ["kf2", "k2"],
    key_f20: ["kf20", "FA"],
    key_f21: ["kf21", "FB"],
    key_f22: ["kf22", "FC"],
    key_f23: ["kf23", "FD"],
    key_f24: ["kf24", "FE"],
    key_f25: ["kf25", "FF"],
    key_f26: ["kf26", "FG"],
    key_f27: ["kf27", "FH"],
    key_f28: ["kf28", "FI"],
    key_f29: ["kf29", "FJ"],
    key_f3: ["kf3", "k3"],
    key_f30: ["kf30", "FK"],
    key_f31: ["kf31", "FL"],
    key_f32: ["kf32", "FM"],
    key_f33: ["kf33", "FN"],
    key_f34: ["kf34", "FO"],
    key_f35: ["kf35", "FP"],
    key_f36: ["kf36", "FQ"],
    key_f37: ["kf37", "FR"],
    key_f38: ["kf38", "FS"],
    key_f39: ["kf39", "FT"],
    key_f4: ["kf4", "k4"],
    key_f40: ["kf40", "FU"],
    key_f41: ["kf41", "FV"],
    key_f42: ["kf42", "FW"],
    key_f43: ["kf43", "FX"],
    key_f44: ["kf44", "FY"],
    key_f45: ["kf45", "FZ"],
    key_f46: ["kf46", "Fa"],
    key_f47: ["kf47", "Fb"],
    key_f48: ["kf48", "Fc"],
    key_f49: ["kf49", "Fd"],
    key_f5: ["kf5", "k5"],
    key_f50: ["kf50", "Fe"],
    key_f51: ["kf51", "Ff"],
    key_f52: ["kf52", "Fg"],
    key_f53: ["kf53", "Fh"],
    key_f54: ["kf54", "Fi"],
    key_f55: ["kf55", "Fj"],
    key_f56: ["kf56", "Fk"],
    key_f57: ["kf57", "Fl"],
    key_f58: ["kf58", "Fm"],
    key_f59: ["kf59", "Fn"],
    key_f6: ["kf6", "k6"],
    key_f60: ["kf60", "Fo"],
    key_f61: ["kf61", "Fp"],
    key_f62: ["kf62", "Fq"],
    key_f63: ["kf63", "Fr"],
    key_f7: ["kf7", "k7"],
    key_f8: ["kf8", "k8"],
    key_f9: ["kf9", "k9"],
    key_find: ["kfnd", "@0"],
    key_help: ["khlp", "%1"],
    key_home: ["khome", "kh"],
    key_ic: ["kich1", "kI"],
    key_il: ["kil1", "kA"],
    key_left: ["kcub1", "kl"],
    key_ll: ["kll", "kH"],
    key_mark: ["kmrk", "%2"],
    key_message: ["kmsg", "%3"],
    key_move: ["kmov", "%4"],
    key_next: ["knxt", "%5"],
    key_npage: ["knp", "kN"],
    key_open: ["kopn", "%6"],
    key_options: ["kopt", "%7"],
    key_ppage: ["kpp", "kP"],
    key_previous: ["kprv", "%8"],
    key_print: ["kprt", "%9"],
    key_redo: ["krdo", "%0"],
    key_reference: ["kref", "&1"],
    key_refresh: ["krfr", "&2"],
    key_replace: ["krpl", "&3"],
    key_restart: ["krst", "&4"],
    key_resume: ["kres", "&5"],
    key_right: ["kcuf1", "kr"],
    key_save: ["ksav", "&6"],
    key_sbeg: ["kBEG", "&9"],
    key_scancel: ["kCAN", "&0"],
    key_scommand: ["kCMD", "*1"],
    key_scopy: ["kCPY", "*2"],
    key_screate: ["kCRT", "*3"],
    key_sdc: ["kDC", "*4"],
    key_sdl: ["kDL", "*5"],
    key_select: ["kslt", "*6"],
    key_send: ["kEND", "*7"],
    key_seol: ["kEOL", "*8"],
    key_sexit: ["kEXT", "*9"],
    key_sf: ["kind", "kF"],
    key_sfind: ["kFND", "*0"],
    key_shelp: ["kHLP", "#1"],
    key_shome: ["kHOM", "#2"],
    key_sic: ["kIC", "#3"],
    key_sleft: ["kLFT", "#4"],
    key_smessage: ["kMSG", "%a"],
    key_smove: ["kMOV", "%b"],
    key_snext: ["kNXT", "%c"],
    key_soptions: ["kOPT", "%d"],
    key_sprevious: ["kPRV", "%e"],
    key_sprint: ["kPRT", "%f"],
    key_sr: ["kri", "kR"],
    key_sredo: ["kRDO", "%g"],
    key_sreplace: ["kRPL", "%h"],
    key_sright: ["kRIT", "%i"],
    key_srsume: ["kRES", "%j"],
    key_ssave: ["kSAV", "!1"],
    key_ssuspend: ["kSPD", "!2"],
    key_stab: ["khts", "kT"],
    key_sundo: ["kUND", "!3"],
    key_suspend: ["kspd", "&7"],
    key_undo: ["kund", "&8"],
    key_up: ["kcuu1", "ku"],
    keypad_local: ["rmkx", "ke"],
    keypad_xmit: ["smkx", "ks"],
    lab_f0: ["lf0", "l0"],
    lab_f1: ["lf1", "l1"],
    lab_f10: ["lf10", "la"],
    lab_f2: ["lf2", "l2"],
    lab_f3: ["lf3", "l3"],
    lab_f4: ["lf4", "l4"],
    lab_f5: ["lf5", "l5"],
    lab_f6: ["lf6", "l6"],
    lab_f7: ["lf7", "l7"],
    lab_f8: ["lf8", "l8"],
    lab_f9: ["lf9", "l9"],
    label_format: ["fln", "Lf"],
    label_off: ["rmln", "LF"],
    label_on: ["smln", "LO"],
    meta_off: ["rmm", "mo"],
    meta_on: ["smm", "mm"],
    micro_column_address: ["mhpa", "ZY"],
    micro_down: ["mcud1", "ZZ"],
    micro_left: ["mcub1", "Za"],
    micro_right: ["mcuf1", "Zb"],
    micro_row_address: ["mvpa", "Zc"],
    micro_up: ["mcuu1", "Zd"],
    newline: ["nel", "nw"],
    order_of_pins: ["porder", "Ze"],
    orig_colors: ["oc", "oc"],
    orig_pair: ["op", "op"],
    pad_char: ["pad", "pc"],
    parm_dch: ["dch", "DC"],
    parm_delete_line: ["dl", "DL"],
    parm_down_cursor: ["cud", "DO"],
    parm_down_micro: ["mcud", "Zf"],
    parm_ich: ["ich", "IC"],
    parm_index: ["indn", "SF"],
    parm_insert_line: ["il", "AL"],
    parm_left_cursor: ["cub", "LE"],
    parm_left_micro: ["mcub", "Zg"],
    parm_right_cursor: ["cuf", "RI"],
    parm_right_micro: ["mcuf", "Zh"],
    parm_rindex: ["rin", "SR"],
    parm_up_cursor: ["cuu", "UP"],
    parm_up_micro: ["mcuu", "Zi"],
    pkey_key: ["pfkey", "pk"],
    pkey_local: ["pfloc", "pl"],
    pkey_xmit: ["pfx", "px"],
    plab_norm: ["pln", "pn"],
    print_screen: ["mc0", "ps"],
    prtr_non: ["mc5p", "pO"],
    prtr_off: ["mc4", "pf"],
    prtr_on: ["mc5", "po"],
    pulse: ["pulse", "PU"],
    quick_dial: ["qdial", "QD"],
    remove_clock: ["rmclk", "RC"],
    repeat_char: ["rep", "rp"],
    req_for_input: ["rfi", "RF"],
    reset_1string: ["rs1", "r1"],
    reset_2string: ["rs2", "r2"],
    reset_3string: ["rs3", "r3"],
    reset_file: ["rf", "rf"],
    restore_cursor: ["rc", "rc"],
    row_address: ["vpa", "cv"],
    save_cursor: ["sc", "sc"],
    scroll_forward: ["ind", "sf"],
    scroll_reverse: ["ri", "sr"],
    select_char_set: ["scs", "Zj"],
    set_attributes: ["sgr", "sa"],
    set_background: ["setb", "Sb"],
    set_bottom_margin: ["smgb", "Zk"],
    set_bottom_margin_parm: ["smgbp", "Zl"],
    set_clock: ["sclk", "SC"],
    set_color_pair: ["scp", "sp"],
    set_foreground: ["setf", "Sf"],
    set_left_margin: ["smgl", "ML"],
    set_left_margin_parm: ["smglp", "Zm"],
    set_right_margin: ["smgr", "MR"],
    set_right_margin_parm: ["smgrp", "Zn"],
    set_tab: ["hts", "st"],
    set_top_margin: ["smgt", "Zo"],
    set_top_margin_parm: ["smgtp", "Zp"],
    set_window: ["wind", "wi"],
    start_bit_image: ["sbim", "Zq"],
    start_char_set_def: ["scsd", "Zr"],
    stop_bit_image: ["rbim", "Zs"],
    stop_char_set_def: ["rcsd", "Zt"],
    subscript_characters: ["subcs", "Zu"],
    superscript_characters: ["supcs", "Zv"],
    tab: ["ht", "ta"],
    these_cause_cr: ["docr", "Zw"],
    to_status_line: ["tsl", "ts"],
    tone: ["tone", "TO"],
    underline_char: ["uc", "uc"],
    up_half_line: ["hu", "hu"],
    user0: ["u0", "u0"],
    user1: ["u1", "u1"],
    user2: ["u2", "u2"],
    user3: ["u3", "u3"],
    user4: ["u4", "u4"],
    user5: ["u5", "u5"],
    user6: ["u6", "u6"],
    user7: ["u7", "u7"],
    user8: ["u8", "u8"],
    user9: ["u9", "u9"],
    wait_tone: ["wait", "WA"],
    xoff_character: ["xoffc", "XF"],
    xon_character: ["xonc", "XN"],
    zero_motion: ["zerom", "Zx"],
    alt_scancode_esc: ["scesa", "S8"],
    bit_image_carriage_return: ["bicr", "Yv"],
    bit_image_newline: ["binel", "Zz"],
    bit_image_repeat: ["birep", "Xy"],
    char_set_names: ["csnm", "Zy"],
    code_set_init: ["csin", "ci"],
    color_names: ["colornm", "Yw"],
    define_bit_image_region: ["defbi", "Yx"],
    device_type: ["devt", "dv"],
    display_pc_char: ["dispc", "S1"],
    end_bit_image_region: ["endbi", "Yy"],
    enter_pc_charset_mode: ["smpch", "S2"],
    enter_scancode_mode: ["smsc", "S4"],
    exit_pc_charset_mode: ["rmpch", "S3"],
    exit_scancode_mode: ["rmsc", "S5"],
    get_mouse: ["getm", "Gm"],
    key_mouse: ["kmous", "Km"],
    mouse_info: ["minfo", "Mi"],
    pc_term_options: ["pctrm", "S6"],
    pkey_plab: ["pfxl", "xl"],
    req_mouse_pos: ["reqmp", "RQ"],
    scancode_escape: ["scesc", "S7"],
    set0_des_seq: ["s0ds", "s0"],
    set1_des_seq: ["s1ds", "s1"],
    set2_des_seq: ["s2ds", "s2"],
    set3_des_seq: ["s3ds", "s3"],
    set_a_background: ["setab", "AB"],
    set_a_foreground: ["setaf", "AF"],
    set_color_band: ["setcolor", "Yz"],
    set_lr_margin: ["smglr", "ML"],
    set_page_length: ["slines", "YZ"],
    set_tb_margin: ["smgtb", "MT"],
    enter_horizontal_hl_mode: ["ehhlm", "Xh"],
    enter_left_hl_mode: ["elhlm", "Xl"],
    enter_low_hl_mode: ["elohlm", "Xo"],
    enter_right_hl_mode: ["erhlm", "Xr"],
    enter_top_hl_mode: ["ethlm", "Xt"],
    enter_vertical_hl_mode: ["evhlm", "Xv"],
    set_a_attributes: ["sgr1", "sA"],
    set_pglen_inch: ["slength", "sL"]
  };
});

// node_modules/neo-blessed/lib/tput.js
var require_tput = __commonJS((exports, module) => {
  var __dirname = "/home/mellen/quest-log/node_modules/neo-blessed/lib";
  var assert = __require("assert");
  var path = __require("path");
  var fs = __require("fs");
  var cp = __require("child_process");
  function Tput(options) {
    if (!(this instanceof Tput)) {
      return new Tput(options);
    }
    options = options || {};
    if (typeof options === "string") {
      options = { terminal: options };
    }
    this.options = options;
    this.terminal = options.terminal || options.term || process.env.TERM || (process.platform === "win32" ? "windows-ansi" : "xterm");
    this.terminal = this.terminal.toLowerCase();
    this.debug = options.debug;
    this.padding = options.padding;
    this.extended = options.extended;
    this.printf = options.printf;
    this.termcap = options.termcap;
    this.error = null;
    this.terminfoPrefix = options.terminfoPrefix;
    this.terminfoFile = options.terminfoFile;
    this.termcapFile = options.termcapFile;
    if (options.terminal || options.term) {
      this.setup();
    }
  }
  Tput.prototype.setup = function() {
    this.error = null;
    try {
      if (this.termcap) {
        try {
          this.injectTermcap();
        } catch (e) {
          if (this.debug)
            throw e;
          this.error = new Error("Termcap parse error.");
          this._useInternalCap(this.terminal);
        }
      } else {
        try {
          this.injectTerminfo();
        } catch (e) {
          if (this.debug)
            throw e;
          this.error = new Error("Terminfo parse error.");
          this._useInternalInfo(this.terminal);
        }
      }
    } catch (e) {
      if (this.debug)
        throw e;
      this.error = new Error("Terminfo not found.");
      this._useXtermInfo();
    }
  };
  Tput.prototype.term = function(is) {
    return this.terminal.indexOf(is) === 0;
  };
  Tput.prototype._debug = function() {
    if (!this.debug)
      return;
    return console.log.apply(console, arguments);
  };
  Tput.prototype._useVt102Cap = function() {
    return this.injectTermcap("vt102");
  };
  Tput.prototype._useXtermCap = function() {
    return this.injectTermcap(__dirname + "/../usr/xterm.termcap");
  };
  Tput.prototype._useXtermInfo = function() {
    return this.injectTerminfo(__dirname + "/../usr/xterm");
  };
  Tput.prototype._useInternalInfo = function(name) {
    name = path.basename(name);
    return this.injectTerminfo(__dirname + "/../usr/" + name);
  };
  Tput.prototype._useInternalCap = function(name) {
    name = path.basename(name);
    return this.injectTermcap(__dirname + "/../usr/" + name + ".termcap");
  };
  Tput.ipaths = [
    process.env.TERMINFO || "",
    (process.env.TERMINFO_DIRS || "").split(":"),
    (process.env.HOME || "") + "/.terminfo",
    "/usr/share/terminfo",
    "/usr/share/lib/terminfo",
    "/usr/lib/terminfo",
    "/usr/local/share/terminfo",
    "/usr/local/share/lib/terminfo",
    "/usr/local/lib/terminfo",
    "/usr/local/ncurses/lib/terminfo",
    "/lib/terminfo"
  ];
  Tput.prototype.readTerminfo = function(term) {
    var data, file, info;
    term = term || this.terminal;
    file = path.normalize(this._prefix(term));
    data = fs.readFileSync(file);
    info = this.parseTerminfo(data, file);
    if (this.debug) {
      this._terminfo = info;
    }
    return info;
  };
  Tput._prefix = Tput.prototype._prefix = function(term) {
    if (term) {
      if (~term.indexOf(path.sep)) {
        return term;
      }
      if (this.terminfoFile) {
        return this.terminfoFile;
      }
    }
    var paths = Tput.ipaths.slice(), file;
    if (this.terminfoPrefix) {
      paths.unshift(this.terminfoPrefix);
    }
    file = this._tprefix(paths, term);
    if (file)
      return file;
    file = this._tprefix(paths, term, true);
    if (file)
      return file;
    throw new Error("Terminfo directory not found.");
  };
  Tput._tprefix = Tput.prototype._tprefix = function(prefix, term, soft) {
    if (!prefix)
      return;
    var file, dir, i, sdiff, sfile, list;
    if (Array.isArray(prefix)) {
      for (i = 0;i < prefix.length; i++) {
        file = this._tprefix(prefix[i], term, soft);
        if (file)
          return file;
      }
      return;
    }
    var find = function(word) {
      var file2, ch;
      file2 = path.resolve(prefix, word[0]);
      try {
        fs.statSync(file2);
        return file2;
      } catch (e) {}
      ch = word[0].charCodeAt(0).toString(16);
      if (ch.length < 2)
        ch = "0" + ch;
      file2 = path.resolve(prefix, ch);
      try {
        fs.statSync(file2);
        return file2;
      } catch (e) {}
    };
    if (!term) {
      try {
        dir = fs.readdirSync(prefix).filter(function(file2) {
          return file2.length !== 1 && !/^[0-9a-fA-F]{2}$/.test(file2);
        });
        if (!dir.length) {
          return prefix;
        }
      } catch (e) {}
      return;
    }
    term = path.basename(term);
    dir = find(term);
    if (!dir)
      return;
    if (soft) {
      try {
        list = fs.readdirSync(dir);
      } catch (e) {
        return;
      }
      list.forEach(function(file2) {
        if (file2.indexOf(term) === 0) {
          var diff = file2.length - term.length;
          if (!sfile || diff < sdiff) {
            sdiff = diff;
            sfile = file2;
          }
        }
      });
      return sfile && (soft || sdiff === 0) ? path.resolve(dir, sfile) : null;
    }
    file = path.resolve(dir, term);
    try {
      fs.statSync(file);
      return file;
    } catch (e) {}
  };
  Tput.prototype.parseTerminfo = function(data, file) {
    var info = {}, extended, l = data.length, i = 0, v, o;
    var h = info.header = {
      dataSize: data.length,
      headerSize: 12,
      magicNumber: data[1] << 8 | data[0],
      namesSize: data[3] << 8 | data[2],
      boolCount: data[5] << 8 | data[4],
      numCount: data[7] << 8 | data[6],
      strCount: data[9] << 8 | data[8],
      strTableSize: data[11] << 8 | data[10]
    };
    h.total = h.headerSize + h.namesSize + h.boolCount + h.numCount * 2 + h.strCount * 2 + h.strTableSize;
    i += h.headerSize;
    var names = data.toString("ascii", i, i + h.namesSize - 1), parts = names.split("|"), name = parts[0], desc = parts.pop();
    info.name = name;
    info.names = parts;
    info.desc = desc;
    info.dir = path.resolve(file, "..", "..");
    info.file = file;
    i += h.namesSize - 1;
    assert.equal(data[i], 0);
    i++;
    info.bools = {};
    l = i + h.boolCount;
    o = 0;
    for (;i < l; i++) {
      v = Tput.bools[o++];
      info.bools[v] = data[i] === 1;
    }
    if (i % 2) {
      assert.equal(data[i], 0);
      i++;
    }
    info.numbers = {};
    l = i + h.numCount * 2;
    o = 0;
    for (;i < l; i += 2) {
      v = Tput.numbers[o++];
      if (data[i + 1] === 255 && data[i] === 255) {
        info.numbers[v] = -1;
      } else {
        info.numbers[v] = data[i + 1] << 8 | data[i];
      }
    }
    info.strings = {};
    l = i + h.strCount * 2;
    o = 0;
    for (;i < l; i += 2) {
      v = Tput.strings[o++];
      if (data[i + 1] === 255 && data[i] === 255) {
        info.strings[v] = -1;
      } else {
        info.strings[v] = data[i + 1] << 8 | data[i];
      }
    }
    Object.keys(info.strings).forEach(function(key) {
      if (info.strings[key] === -1) {
        delete info.strings[key];
        return;
      }
      if (info.strings[key] === 65534) {
        delete info.strings[key];
        return;
      }
      var s = i + info.strings[key], j = s;
      while (data[j])
        j++;
      assert(j < data.length);
      info.strings[key] = data.toString("ascii", s, j);
    });
    if (this.extended !== false) {
      i--;
      i += h.strTableSize;
      if (i % 2) {
        assert.equal(data[i], 0);
        i++;
      }
      l = data.length;
      if (i < l - 1) {
        try {
          extended = this.parseExtended(data.slice(i));
        } catch (e) {
          if (this.debug) {
            throw e;
          }
          return info;
        }
        info.header.extended = extended.header;
        ["bools", "numbers", "strings"].forEach(function(key) {
          merge(info[key], extended[key]);
        });
      }
    }
    return info;
  };
  Tput.prototype.parseExtended = function(data) {
    var info = {}, l = data.length, i = 0;
    var h = info.header = {
      dataSize: data.length,
      headerSize: 10,
      boolCount: data[i + 1] << 8 | data[i + 0],
      numCount: data[i + 3] << 8 | data[i + 2],
      strCount: data[i + 5] << 8 | data[i + 4],
      strTableSize: data[i + 7] << 8 | data[i + 6],
      lastStrTableOffset: data[i + 9] << 8 | data[i + 8]
    };
    h.total = h.headerSize + h.boolCount + h.numCount * 2 + h.strCount * 2 + h.strTableSize;
    i += h.headerSize;
    var _bools = [];
    l = i + h.boolCount;
    for (;i < l; i++) {
      _bools.push(data[i] === 1);
    }
    if (i % 2) {
      assert.equal(data[i], 0);
      i++;
    }
    var _numbers = [];
    l = i + h.numCount * 2;
    for (;i < l; i += 2) {
      if (data[i + 1] === 255 && data[i] === 255) {
        _numbers.push(-1);
      } else {
        _numbers.push(data[i + 1] << 8 | data[i]);
      }
    }
    var _strings = [];
    l = i + h.strCount * 2;
    for (;i < l; i += 2) {
      if (data[i + 1] === 255 && data[i] === 255) {
        _strings.push(-1);
      } else {
        _strings.push(data[i + 1] << 8 | data[i]);
      }
    }
    i = data.length - h.lastStrTableOffset;
    var high = 0;
    _strings.forEach(function(offset, k) {
      if (offset === -1) {
        _strings[k] = "";
        return;
      }
      var s = i + offset, j2 = s;
      while (data[j2])
        j2++;
      assert(j2 < data.length);
      if (high < j2 - i) {
        high = j2 - i;
      }
      _strings[k] = data.toString("ascii", s, j2);
    });
    i += high + 1;
    l = data.length;
    var sym = [], j;
    for (;i < l; i++) {
      j = i;
      while (data[j])
        j++;
      sym.push(data.toString("ascii", i, j));
      i = j;
    }
    j = 0;
    info.bools = {};
    _bools.forEach(function(bool) {
      info.bools[sym[j++]] = bool;
    });
    info.numbers = {};
    _numbers.forEach(function(number) {
      info.numbers[sym[j++]] = number;
    });
    info.strings = {};
    _strings.forEach(function(string) {
      info.strings[sym[j++]] = string;
    });
    assert.equal(i, data.length);
    return info;
  };
  Tput.prototype.compileTerminfo = function(term) {
    return this.compile(this.readTerminfo(term));
  };
  Tput.prototype.injectTerminfo = function(term) {
    return this.inject(this.compileTerminfo(term));
  };
  Tput.prototype.compile = function(info) {
    var self = this;
    if (!info) {
      throw new Error("Terminal not found.");
    }
    this.detectFeatures(info);
    this._debug(info);
    info.all = {};
    info.methods = {};
    ["bools", "numbers", "strings"].forEach(function(type) {
      Object.keys(info[type]).forEach(function(key) {
        info.all[key] = info[type][key];
        info.methods[key] = self._compile(info, key, info.all[key]);
      });
    });
    Tput.bools.forEach(function(key) {
      if (info.methods[key] == null)
        info.methods[key] = false;
    });
    Tput.numbers.forEach(function(key) {
      if (info.methods[key] == null)
        info.methods[key] = -1;
    });
    Tput.strings.forEach(function(key) {
      if (!info.methods[key])
        info.methods[key] = noop;
    });
    Object.keys(info.methods).forEach(function(key) {
      if (!Tput.alias[key])
        return;
      Tput.alias[key].forEach(function(alias) {
        info.methods[alias] = info.methods[key];
      });
    });
    return info;
  };
  Tput.prototype.inject = function(info) {
    var self = this, methods = info.methods || info;
    Object.keys(methods).forEach(function(key) {
      if (typeof methods[key] !== "function") {
        self[key] = methods[key];
        return;
      }
      self[key] = function() {
        var args = Array.prototype.slice.call(arguments);
        return methods[key].call(self, args);
      };
    });
    this.info = info;
    this.all = info.all;
    this.methods = info.methods;
    this.bools = info.bools;
    this.numbers = info.numbers;
    this.strings = info.strings;
    if (!~info.names.indexOf(this.terminal)) {
      this.terminal = info.name;
    }
    this.features = info.features;
    Object.keys(info.features).forEach(function(key) {
      if (key === "padding") {
        if (!info.features.padding && self.options.padding !== true) {
          self.padding = false;
        }
        return;
      }
      self[key] = info.features[key];
    });
  };
  Tput.prototype._compile = function(info, key, str) {
    var v;
    this._debug("Compiling %s: %s", key, JSON.stringify(str));
    switch (typeof str) {
      case "boolean":
        return str;
      case "number":
        return str;
      case "string":
        break;
      default:
        return noop;
    }
    if (!str) {
      return noop;
    }
    if (key === "init_file" || key === "reset_file") {
      try {
        str = fs.readFileSync(str, "utf8");
        if (this.debug) {
          v = ("return " + JSON.stringify(str) + ";").replace(/\x1b/g, "\\x1b").replace(/\r/g, "\\r").replace(/\n/g, "\\n");
          process.stdout.write(v + `
`);
        }
        return function() {
          return str;
        };
      } catch (e) {
        return noop;
      }
    }
    var tkey = info.name + "." + key, header = "var v, dyn = {}, stat = {}, stack = [], out = [];", footer = ';return out.join("");', code = header, val = str, buff = "", cap, ch, fi, then, els, end;
    function read(regex, no) {
      cap = regex.exec(val);
      if (!cap)
        return;
      val = val.substring(cap[0].length);
      ch = cap[1];
      if (!no)
        clear();
      return cap;
    }
    function stmt(c) {
      if (code[code.length - 1] === ",") {
        code = code.slice(0, -1);
      }
      code += c;
    }
    function expr(c) {
      code += c + ",";
    }
    function echo(c) {
      if (c === '""')
        return;
      expr("out.push(" + c + ")");
    }
    function print(c) {
      buff += c;
    }
    function clear() {
      if (buff) {
        echo(JSON.stringify(buff).replace(/\\u00([0-9a-fA-F]{2})/g, "\\x$1"));
        buff = "";
      }
    }
    while (val) {
      if (read(/^\n /, true)) {
        continue;
      }
      if (read(/^\^(.)/i, true)) {
        if (!(ch >= " " && ch <= "~")) {
          this._debug("%s: bad caret char.", tkey);
          print(cap[0]);
          continue;
        }
        if (ch === "?") {
          ch = "\x7F";
        } else {
          ch = ch.charCodeAt(0) & 31;
          if (ch === 0)
            ch = 128;
          ch = String.fromCharCode(ch);
        }
        print(ch);
        continue;
      }
      if (read(/^\\([0-7]{3})/, true)) {
        print(String.fromCharCode(parseInt(ch, 8)));
        continue;
      }
      if (read(/^\\([eEnlrtbfs\^\\,:0]|.)/, true)) {
        switch (ch) {
          case "e":
          case "E":
            ch = "\x1B";
            break;
          case "n":
            ch = `
`;
            break;
          case "l":
            ch = "\x85";
            break;
          case "r":
            ch = "\r";
            break;
          case "t":
            ch = "\t";
            break;
          case "b":
            ch = "\b";
            break;
          case "f":
            ch = "\f";
            break;
          case "s":
            ch = " ";
            break;
          case "^":
            ch = "^";
            break;
          case "\\":
            ch = "\\";
            break;
          case ",":
            ch = ",";
            break;
          case ":":
            ch = ":";
            break;
          case "0":
            ch = "\x80";
            break;
          case "a":
            ch = "\x07";
            break;
          default:
            this._debug("%s: bad backslash char.", tkey);
            ch = cap[0];
            break;
        }
        print(ch);
        continue;
      }
      if (read(/^\$<(\d+)([*\/]{0,2})>/, true)) {
        if (this.padding)
          print(cap[0]);
        continue;
      }
      if (read(/^%%/, true)) {
        print("%");
        continue;
      }
      if (read(/^%((?::-|[+# ]){1,4})?(\d+(?:\.\d+)?)?([doxXsc])/)) {
        if (this.printf || cap[1] || cap[2] || ~"oxX".indexOf(cap[3])) {
          echo('sprintf("' + cap[0].replace(":-", "-") + '", stack.pop())');
        } else if (cap[3] === "c") {
          echo("(v = stack.pop(), isFinite(v) " + '? String.fromCharCode(v || 0200) : "")');
        } else {
          echo("stack.pop()");
        }
        continue;
      }
      if (read(/^%p([1-9])/)) {
        expr("(stack.push(v = params[" + (ch - 1) + "]), v)");
        continue;
      }
      if (read(/^%P([a-z])/)) {
        expr("dyn." + ch + " = stack.pop()");
        continue;
      }
      if (read(/^%g([a-z])/)) {
        expr("(stack.push(dyn." + ch + "), dyn." + ch + ")");
        continue;
      }
      if (read(/^%P([A-Z])/)) {
        expr("stat." + ch + " = stack.pop()");
        continue;
      }
      if (read(/^%g([A-Z])/)) {
        expr("(stack.push(v = stat." + ch + "), v)");
        continue;
      }
      if (read(/^%'(.)'/)) {
        expr("(stack.push(v = " + ch.charCodeAt(0) + "), v)");
        continue;
      }
      if (read(/^%\{(\d+)\}/)) {
        expr("(stack.push(v = " + ch + "), v)");
        continue;
      }
      if (read(/^%l/)) {
        expr('(stack.push(v = (stack.pop() || "").length || 0), v)');
        continue;
      }
      if (read(/^%([+\-*\/m&|\^=><])/)) {
        if (ch === "=")
          ch = "===";
        else if (ch === "m")
          ch = "%";
        expr("(v = stack.pop()," + " stack.push(v = (stack.pop() " + ch + " v) || 0)," + " v)");
        continue;
      }
      if (read(/^%([AO])/)) {
        expr("(stack.push(v = (stack.pop() " + (ch === "A" ? "&&" : "||") + " stack.pop())), v)");
        continue;
      }
      if (read(/^%([!~])/)) {
        expr("(stack.push(v = " + ch + "stack.pop()), v)");
        continue;
      }
      if (read(/^%i/)) {
        expr("(params[0]++, params[1]++)");
        continue;
      }
      if (read(/^%\?/)) {
        end = -1;
        stmt(";if (");
        continue;
      }
      if (read(/^%t/)) {
        end = -1;
        stmt(") {");
        continue;
      }
      if (read(/^%e/)) {
        fi = val.indexOf("%?");
        then = val.indexOf("%t");
        els = val.indexOf("%e");
        end = val.indexOf("%;");
        if (end === -1)
          end = Infinity;
        if (then !== -1 && then < end && (fi === -1 || then < fi) && (els === -1 || then < els)) {
          stmt("} else if (");
        } else {
          stmt("} else {");
        }
        continue;
      }
      if (read(/^%;/)) {
        end = null;
        stmt("}");
        continue;
      }
      buff += val[0];
      val = val.substring(1);
    }
    clear();
    if (end != null) {
      stmt("}");
    }
    stmt(footer);
    v = code.slice(header.length, -footer.length);
    if (!v.length) {
      code = 'return "";';
    } else if (v = /^out\.push\(("(?:[^"]|\\")+")\)$/.exec(v)) {
      code = "return " + v[1] + ";";
    } else {
      code = code.replace(/\(stack\.push\(v = params\[(\d+)\]\), v\),out\.push\(stack\.pop\(\)\)/g, "out.push(params[$1])");
      v = code.slice(header.length, -footer.length);
      if (!~v.indexOf("v = "))
        code = code.replace("v, ", "");
      if (!~v.indexOf("dyn"))
        code = code.replace("dyn = {}, ", "");
      if (!~v.indexOf("stat"))
        code = code.replace("stat = {}, ", "");
      if (!~v.indexOf("stack"))
        code = code.replace("stack = [], ", "");
      code = code.replace(/out = \[\];out\.push\(("(?:[^"]|\\")+")\),/, "out = [$1];");
    }
    if (str === "\x1B%?") {
      code = 'return "\\x1b";';
    }
    if (this.debug) {
      v = code.replace(/\x1b/g, "\\x1b").replace(/\r/g, "\\r").replace(/\n/g, "\\n");
      process.stdout.write(v + `
`);
    }
    try {
      if (this.options.stringify && code.indexOf("return ") === 0) {
        return new Function("", code)();
      }
      return this.printf || ~code.indexOf("sprintf(") ? new Function("sprintf, params", code).bind(null, sprintf) : new Function("params", code);
    } catch (e) {
      return noop;
    }
  };
  Tput.prototype._print = function(code, print, done) {
    var xon = !this.bools.needs_xon_xoff || this.bools.xon_xoff;
    print = print || write;
    done = done || noop;
    if (!this.padding) {
      print(code);
      return done();
    }
    var parts = code.split(/(?=\$<[\d.]+[*\/]{0,2}>)/), i = 0;
    (function next() {
      if (i === parts.length) {
        return done();
      }
      var part = parts[i++], padding = /^\$<([\d.]+)([*\/]{0,2})>/.exec(part), amount, suffix;
      if (!padding) {
        print(part);
        return next();
      }
      part = part.substring(padding[0].length);
      amount = +padding[1];
      suffix = padding[2];
      if (xon && !~suffix.indexOf("/")) {
        print(part);
        return next();
      }
      if (~suffix.indexOf("*")) {
        amount = amount;
      }
      return setTimeout(function() {
        print(part);
        return next();
      }, amount);
    })();
  };
  Tput.print = function() {
    var fake = {
      padding: true,
      bools: { needs_xon_xoff: true, xon_xoff: false }
    };
    return Tput.prototype._print.apply(fake, arguments);
  };
  Tput.cpaths = [
    process.env.TERMCAP || "",
    (process.env.TERMPATH || "").split(/[: ]/),
    (process.env.HOME || "") + "/.termcap",
    "/usr/share/misc/termcap",
    "/etc/termcap"
  ];
  Tput.prototype.readTermcap = function(term) {
    var self = this, terms, term_, root, paths;
    term = term || this.terminal;
    if (~term.indexOf(path.sep) && (terms = this._tryCap(path.resolve(term)))) {
      term_ = path.basename(term).split(".")[0];
      if (terms[process.env.TERM]) {
        term = process.env.TERM;
      } else if (terms[term_]) {
        term = term_;
      } else {
        term = Object.keys(terms)[0];
      }
    } else {
      paths = Tput.cpaths.slice();
      if (this.termcapFile) {
        paths.unshift(this.termcapFile);
      }
      paths.push(Tput.termcap);
      terms = this._tryCap(paths, term);
    }
    if (!terms) {
      throw new Error("Cannot find termcap for: " + term);
    }
    root = terms[term];
    if (this.debug) {
      this._termcap = terms;
    }
    (function tc(term2) {
      if (term2 && term2.strings.tc) {
        root.inherits = root.inherits || [];
        root.inherits.push(term2.strings.tc);
        var names = terms[term2.strings.tc] ? terms[term2.strings.tc].names : [term2.strings.tc];
        self._debug("%s inherits from %s.", term2.names.join("/"), names.join("/"));
        var inherit = tc(terms[term2.strings.tc]);
        if (inherit) {
          ["bools", "numbers", "strings"].forEach(function(type) {
            merge(term2[type], inherit[type]);
          });
        }
      }
      return term2;
    })(root);
    root = this.translateTermcap(root);
    return root;
  };
  Tput.prototype._tryCap = function(file, term) {
    if (!file)
      return;
    var terms, data, i;
    if (Array.isArray(file)) {
      for (i = 0;i < file.length; i++) {
        data = this._tryCap(file[i], term);
        if (data)
          return data;
      }
      return;
    }
    data = file[0] === "/" ? tryRead(file) : file;
    if (!data)
      return;
    terms = this.parseTermcap(data, file);
    if (term && !terms[term]) {
      return;
    }
    return terms;
  };
  Tput.prototype.parseTermcap = function(data, file) {
    var terms = {}, parts, term, entries, fields, field, names, i, j, k;
    data = data.replace(/\\\n[ \t]*/g, "");
    data = data.replace(/^#[^\n]+/gm, "");
    entries = data.trim().split(/\n+/);
    for (i = 0;i < entries.length; i++) {
      fields = entries[i].split(/:+/);
      for (j = 0;j < fields.length; j++) {
        field = fields[j].trim();
        if (!field)
          continue;
        if (j === 0) {
          names = field.split("|");
          term = {
            name: names[0],
            names,
            desc: names.pop(),
            file: ~file.indexOf(path.sep) ? path.resolve(file) : file,
            termcap: true
          };
          for (k = 0;k < names.length; k++) {
            terms[names[k]] = term;
          }
          term.bools = {};
          term.numbers = {};
          term.strings = {};
          continue;
        }
        if (~field.indexOf("=")) {
          parts = field.split("=");
          term.strings[parts[0]] = parts.slice(1).join("=");
        } else if (~field.indexOf("#")) {
          parts = field.split("#");
          term.numbers[parts[0]] = +parts.slice(1).join("#");
        } else {
          term.bools[field] = true;
        }
      }
    }
    return terms;
  };
  Tput.prototype.translateTermcap = function(info) {
    var self = this, out = {};
    if (!info)
      return;
    this._debug(info);
    ["name", "names", "desc", "file", "termcap"].forEach(function(key) {
      out[key] = info[key];
    });
    var map = function() {
      var out2 = {};
      Object.keys(Tput.alias).forEach(function(key) {
        var aliases = Tput.alias[key];
        out2[aliases.termcap] = key;
      });
      return out2;
    }();
    ["bools", "numbers", "strings"].forEach(function(key) {
      out[key] = {};
      Object.keys(info[key]).forEach(function(cap) {
        if (key === "strings") {
          info.strings[cap] = self._captoinfo(cap, info.strings[cap], 1);
        }
        if (map[cap]) {
          out[key][map[cap]] = info[key][cap];
        } else {
          out[key][cap] = info[key][cap];
        }
      });
    });
    return out;
  };
  Tput.prototype.compileTermcap = function(term) {
    return this.compile(this.readTermcap(term));
  };
  Tput.prototype.injectTermcap = function(term) {
    return this.inject(this.compileTermcap(term));
  };
  Tput.prototype._captoinfo = function(cap, s, parameterized) {
    var self = this;
    var capstart;
    if (parameterized == null) {
      parameterized = 0;
    }
    var MAX_PUSHED = 16, stack = [];
    var stackptr = 0, onstack = 0, seenm = 0, seenn = 0, seenr = 0, param = 1, i = 0, out = "";
    function warn() {
      var args = Array.prototype.slice.call(arguments);
      args[0] = "captoinfo: " + (args[0] || "");
      return self._debug.apply(self, args);
    }
    function isdigit(ch) {
      return ch >= "0" && ch <= "9";
    }
    function isgraph(ch) {
      return ch > " " && ch <= "~";
    }
    function cvtchar(sp) {
      var c = "\x00", len;
      var j = i;
      switch (sp[j]) {
        case "\\":
          switch (sp[++j]) {
            case "'":
            case "$":
            case "\\":
            case "%":
              c = sp[j];
              len = 2;
              break;
            case "\x00":
              c = "\\";
              len = 1;
              break;
            case "0":
            case "1":
            case "2":
            case "3":
              len = 1;
              while (isdigit(sp[j])) {
                c = String.fromCharCode(8 * c.charCodeAt(0) + (sp[j++].charCodeAt(0) - 48));
                len++;
              }
              break;
            default:
              c = sp[j];
              len = 2;
              break;
          }
          break;
        case "^":
          c = String.fromCharCode(sp[++j].charCodeAt(0) & 31);
          len = 2;
          break;
        default:
          c = sp[j];
          len = 1;
      }
      if (isgraph(c) && c !== "," && c !== "'" && c !== "\\" && c !== ":") {
        out += "%'";
        out += c;
        out += "'";
      } else {
        out += "%{";
        if (c.charCodeAt(0) > 99) {
          out += String.fromCharCode((c.charCodeAt(0) / 100 | 0) + 48);
        }
        if (c.charCodeAt(0) > 9) {
          out += String.fromCharCode((c.charCodeAt(0) / 10 | 0) % 10 + 48);
        }
        out += String.fromCharCode(c.charCodeAt(0) % 10 + 48);
        out += "}";
      }
      return len;
    }
    function getparm(parm, n) {
      if (seenr) {
        if (parm === 1) {
          parm = 2;
        } else if (parm === 2) {
          parm = 1;
        }
      }
      if (onstack === parm) {
        if (n > 1) {
          warn("string may not be optimal");
          out += "%Pa";
          while (n--) {
            out += "%ga";
          }
        }
        return;
      }
      if (onstack !== 0) {
        push();
      }
      onstack = parm;
      while (n--) {
        out += "%p";
        out += String.fromCharCode(48 + parm);
      }
      if (seenn && parm < 3) {
        out += "%{96}%^";
      }
      if (seenm && parm < 3) {
        out += "%{127}%^";
      }
    }
    function push() {
      if (stackptr >= MAX_PUSHED) {
        warn("string too complex to convert");
      } else {
        stack[stackptr++] = onstack;
      }
    }
    function pop() {
      if (stackptr === 0) {
        if (onstack === 0) {
          warn("I'm confused");
        } else {
          onstack = 0;
        }
      } else {
        onstack = stack[--stackptr];
      }
      param++;
    }
    function see03() {
      getparm(param, 1);
      out += "%3d";
      pop();
    }
    function invalid() {
      out += "%";
      i--;
      warn("unknown %% code %s (%#x) in %s", JSON.stringify(s[i]), s[i].charCodeAt(0), cap);
    }
    capstart = null;
    if (s == null)
      s = "";
    if (parameterized >= 0 && isdigit(s[i])) {
      for (capstart = i;; i++) {
        if (!(isdigit(s[i]) || s[i] === "*" || s[i] === ".")) {
          break;
        }
      }
    }
    while (s[i]) {
      switch (s[i]) {
        case "%":
          i++;
          if (parameterized < 1) {
            out += "%";
            break;
          }
          switch (s[i++]) {
            case "%":
              out += "%";
              break;
            case "r":
              if (seenr++ === 1) {
                warn("saw %%r twice in %s", cap);
              }
              break;
            case "m":
              if (seenm++ === 1) {
                warn("saw %%m twice in %s", cap);
              }
              break;
            case "n":
              if (seenn++ === 1) {
                warn("saw %%n twice in %s", cap);
              }
              break;
            case "i":
              out += "%i";
              break;
            case "6":
            case "B":
              getparm(param, 1);
              out += "%{10}%/%{16}%*";
              getparm(param, 1);
              out += "%{10}%m%+";
              break;
            case "8":
            case "D":
              getparm(param, 2);
              out += "%{2}%*%-";
              break;
            case ">":
              getparm(param, 2);
              out += "%?";
              i += cvtchar(s);
              out += "%>%t";
              i += cvtchar(s);
              out += "%+%;";
              break;
            case "a":
              if ((s[i] === "=" || s[i] === "+" || s[i] === "-" || s[i] === "*" || s[i] === "/") && (s[i + 1] === "p" || s[i + 1] === "c") && s[i + 2] !== "\x00" && s[i + 2]) {
                var l;
                l = 2;
                if (s[i] !== "=") {
                  getparm(param, 1);
                }
                if (s[i + 1] === "p") {
                  getparm(param + s[i + 2].charCodeAt(0) - 64, 1);
                  if (param !== onstack) {
                    pop();
                    param--;
                  }
                  l++;
                } else {
                  i += 2, l += cvtchar(s), i -= 2;
                }
                switch (s[i]) {
                  case "+":
                    out += "%+";
                    break;
                  case "-":
                    out += "%-";
                    break;
                  case "*":
                    out += "%*";
                    break;
                  case "/":
                    out += "%/";
                    break;
                  case "=":
                    if (seenr) {
                      if (param === 1) {
                        onstack = 2;
                      } else if (param === 2) {
                        onstack = 1;
                      } else {
                        onstack = param;
                      }
                    } else {
                      onstack = param;
                    }
                    break;
                }
                i += l;
                break;
              }
              getparm(param, 1);
              i += cvtchar(s);
              out += "%+";
              break;
            case "+":
              getparm(param, 1);
              i += cvtchar(s);
              out += "%+%c";
              pop();
              break;
            case "s":
              getparm(param, 1);
              out += "%s";
              pop();
              break;
            case "-":
              i += cvtchar(s);
              getparm(param, 1);
              out += "%-%c";
              pop();
              break;
            case ".":
              getparm(param, 1);
              out += "%c";
              pop();
              break;
            case "0":
              if (s[i] === "3") {
                see03();
                break;
              } else if (s[i] !== "2") {
                invalid();
                break;
              }
            case "2":
              getparm(param, 1);
              out += "%2d";
              pop();
              break;
            case "3":
              see03();
              break;
            case "d":
              getparm(param, 1);
              out += "%d";
              pop();
              break;
            case "f":
              param++;
              break;
            case "b":
              param--;
              break;
            case "\\":
              out += "%\\";
              break;
            default:
              invalid();
              break;
          }
          break;
        default:
          out += s[i++];
          break;
      }
    }
    if (capstart != null) {
      out += "$<";
      for (i = capstart;; i++) {
        if (isdigit(s[i]) || s[i] === "*" || s[i] === ".") {
          out += s[i];
        } else {
          break;
        }
      }
      out += "/>";
    }
    if (s !== out) {
      warn("Translating %s from %s to %s.", cap, JSON.stringify(s), JSON.stringify(out));
    }
    return out;
  };
  Tput.prototype.getAll = function() {
    var dir = this._prefix(), list = asort(fs.readdirSync(dir)), infos = [];
    list.forEach(function(letter) {
      var terms = asort(fs.readdirSync(path.resolve(dir, letter)));
      infos.push.apply(infos, terms);
    });
    function asort(obj) {
      return obj.sort(function(a, b) {
        a = a.toLowerCase().charCodeAt(0);
        b = b.toLowerCase().charCodeAt(0);
        return a - b;
      });
    }
    return infos;
  };
  Tput.prototype.compileAll = function(start) {
    var self = this, all = {};
    this.getAll().forEach(function(name) {
      if (start && name !== start) {
        return;
      } else {
        start = null;
      }
      all[name] = self.compileTerminfo(name);
    });
    return all;
  };
  Tput.prototype.detectFeatures = function(info) {
    var data = this.parseACS(info);
    info.features = {
      unicode: this.detectUnicode(info),
      brokenACS: this.detectBrokenACS(info),
      PCRomSet: this.detectPCRomSet(info),
      magicCookie: this.detectMagicCookie(info),
      padding: this.detectPadding(info),
      setbuf: this.detectSetbuf(info),
      acsc: data.acsc,
      acscr: data.acscr
    };
    return info.features;
  };
  Tput.prototype.detectUnicode = function() {
    if (process.env.NCURSES_FORCE_UNICODE != null) {
      return !!+process.env.NCURSES_FORCE_UNICODE;
    }
    if (this.options.forceUnicode != null) {
      return this.options.forceUnicode;
    }
    var LANG = process.env.LANG + ":" + process.env.LANGUAGE + ":" + process.env.LC_ALL + ":" + process.env.LC_CTYPE;
    return /utf-?8/i.test(LANG) || this.GetConsoleCP() === 65001;
  };
  Tput.prototype.detectBrokenACS = function(info) {
    if (process.env.NCURSES_NO_UTF8_ACS != null) {
      return !!+process.env.NCURSES_NO_UTF8_ACS;
    }
    if (info.numbers.U8 >= 0) {
      return !!info.numbers.U8;
    }
    if (info.name === "linux") {
      return true;
    }
    if (this.detectPCRomSet(info)) {
      return true;
    }
    if (this.termcap && info.name.indexOf("screen") === 0 && process.env.TERMCAP && ~process.env.TERMCAP.indexOf("screen") && ~process.env.TERMCAP.indexOf("hhII00")) {
      if (~info.strings.enter_alt_charset_mode.indexOf("\x0E") || ~info.strings.enter_alt_charset_mode.indexOf("\x0F") || ~info.strings.set_attributes.indexOf("\x0E") || ~info.strings.set_attributes.indexOf("\x0F")) {
        return true;
      }
    }
    return false;
  };
  Tput.prototype.detectPCRomSet = function(info) {
    var s = info.strings;
    if (s.enter_pc_charset_mode && s.enter_alt_charset_mode && s.enter_pc_charset_mode === s.enter_alt_charset_mode && s.exit_pc_charset_mode === s.exit_alt_charset_mode) {
      return true;
    }
    return false;
  };
  Tput.prototype.detectMagicCookie = function() {
    return process.env.NCURSES_NO_MAGIC_COOKIE == null;
  };
  Tput.prototype.detectPadding = function() {
    return process.env.NCURSES_NO_PADDING == null;
  };
  Tput.prototype.detectSetbuf = function() {
    return process.env.NCURSES_NO_SETBUF == null;
  };
  Tput.prototype.parseACS = function(info) {
    var data = {};
    data.acsc = {};
    data.acscr = {};
    if (this.detectPCRomSet(info)) {
      return data;
    }
    Object.keys(Tput.acsc).forEach(function(ch) {
      var acs_chars = info.strings.acs_chars || "", i = acs_chars.indexOf(ch), next = acs_chars[i + 1];
      if (!next || i === -1 || !Tput.acsc[next]) {
        return;
      }
      data.acsc[ch] = Tput.acsc[next];
      data.acscr[Tput.acsc[next]] = ch;
    });
    return data;
  };
  Tput.prototype.GetConsoleCP = function() {
    var ccp;
    if (process.platform !== "win32") {
      return -1;
    }
    if (+process.env.NCURSES_NO_WINDOWS_UNICODE !== 1) {
      return 65001;
    }
    try {
      ccp = cp.execFileSync(process.env.WINDIR + "\\system32\\chcp.com", [], {
        stdio: ["ignore", "pipe", "ignore"],
        encoding: "ascii",
        timeout: 1500
      });
    } catch (e) {}
    ccp = /\d+/.exec(ccp);
    if (!ccp) {
      return -1;
    }
    ccp = +ccp[0];
    return ccp;
  };
  function noop() {
    return "";
  }
  noop.unsupported = true;
  function merge(a, b) {
    Object.keys(b).forEach(function(key) {
      a[key] = b[key];
    });
    return a;
  }
  function write(data) {
    return process.stdout.write(data);
  }
  function tryRead(file) {
    if (Array.isArray(file)) {
      for (var i = 0;i < file.length; i++) {
        var data = tryRead(file[i]);
        if (data)
          return data;
      }
      return "";
    }
    if (!file)
      return "";
    file = path.resolve.apply(path, arguments);
    try {
      return fs.readFileSync(file, "utf8");
    } catch (e) {
      return "";
    }
  }
  function sprintf(src) {
    var params = Array.prototype.slice.call(arguments, 1), rule = /%([\-+# ]{1,4})?(\d+(?:\.\d+)?)?([doxXsc])/g, i = 0;
    return src.replace(rule, function(_, flag, width, type) {
      var flags = (flag || "").split(""), param = params[i] != null ? params[i] : "", initial = param, opt = {}, pre = "";
      i++;
      switch (type) {
        case "d":
          param = (+param).toString(10);
          break;
        case "o":
          param = (+param).toString(8);
          break;
        case "x":
          param = (+param).toString(16);
          break;
        case "X":
          param = (+param).toString(16).toUppercase();
          break;
        case "s":
          break;
        case "c":
          param = isFinite(param) ? String.fromCharCode(param || 128) : "";
          break;
      }
      flags.forEach(function(flag2) {
        switch (flag2) {
          case "-":
            opt.left = true;
            break;
          case "+":
            opt.signs = true;
            break;
          case "#":
            opt.hexpoint = true;
            break;
          case " ":
            opt.space = true;
            break;
        }
      });
      width = +width.split(".")[0];
      if (width && !opt.left) {
        param = param + "";
        while (param.length < width) {
          param = "0" + param;
        }
      }
      if (opt.signs) {
        if (+initial >= 0) {
          pre += "+";
        }
      }
      if (opt.space) {
        if (!opt.signs && +initial >= 0) {
          pre += " ";
        }
      }
      if (opt.hexpoint) {
        switch (type) {
          case "o":
            pre += "0";
            break;
          case "x":
            pre += "0x";
            break;
          case "X":
            pre += "0X";
            break;
        }
      }
      if (opt.left) {
        if (width > pre.length + param.length) {
          width -= pre.length + param.length;
          pre = Array(width + 1).join(" ") + pre;
        }
      }
      return pre + param;
    });
  }
  Tput._alias = require_alias();
  Tput.alias = {};
  ["bools", "numbers", "strings"].forEach(function(type) {
    Object.keys(Tput._alias[type]).forEach(function(key) {
      var aliases = Tput._alias[type][key];
      Tput.alias[key] = [aliases[0]];
      Tput.alias[key].terminfo = aliases[0];
      Tput.alias[key].termcap = aliases[1];
    });
  });
  Tput.alias.no_esc_ctlc.push("beehive_glitch");
  Tput.alias.dest_tabs_magic_smso.push("teleray_glitch");
  Tput.alias.micro_col_size.push("micro_char_size");
  Tput.aliasMap = {};
  Object.keys(Tput.alias).forEach(function(key) {
    Tput.aliasMap[key] = key;
    Tput.alias[key].forEach(function(k) {
      Tput.aliasMap[k] = key;
    });
  });
  Tput.prototype.has = function(name) {
    name = Tput.aliasMap[name];
    var val = this.all[name];
    if (!name)
      return false;
    if (typeof val === "number") {
      return val !== -1;
    }
    return !!val;
  };
  Tput.termcap = "" + "vt102|dec vt102:" + ":do=^J:co#80:li#24:cl=50\\E[;H\\E[2J:" + ":le=^H:bs:cm=5\\E[%i%d;%dH:nd=2\\E[C:up=2\\E[A:" + ":ce=3\\E[K:cd=50\\E[J:so=2\\E[7m:se=2\\E[m:us=2\\E[4m:ue=2\\E[m:" + ":md=2\\E[1m:mr=2\\E[7m:mb=2\\E[5m:me=2\\E[m:is=\\E[1;24r\\E[24;1H:" + ":rs=\\E>\\E[?3l\\E[?4l\\E[?5l\\E[?7h\\E[?8h:ks=\\E[?1h\\E=:ke=\\E[?1l\\E>:" + ":ku=\\EOA:kd=\\EOB:kr=\\EOC:kl=\\EOD:kb=^H:\\\n" + ":ho=\\E[H:k1=\\EOP:k2=\\EOQ:k3=\\EOR:k4=\\EOS:pt:sr=5\\EM:vt#3:" + ":sc=\\E7:rc=\\E8:cs=\\E[%i%d;%dr:vs=\\E[?7l:ve=\\E[?7h:" + ":mi:al=\\E[L:dc=\\E[P:dl=\\E[M:ei=\\E[4l:im=\\E[4h:";
  Tput.bools = [
    "auto_left_margin",
    "auto_right_margin",
    "no_esc_ctlc",
    "ceol_standout_glitch",
    "eat_newline_glitch",
    "erase_overstrike",
    "generic_type",
    "hard_copy",
    "has_meta_key",
    "has_status_line",
    "insert_null_glitch",
    "memory_above",
    "memory_below",
    "move_insert_mode",
    "move_standout_mode",
    "over_strike",
    "status_line_esc_ok",
    "dest_tabs_magic_smso",
    "tilde_glitch",
    "transparent_underline",
    "xon_xoff",
    "needs_xon_xoff",
    "prtr_silent",
    "hard_cursor",
    "non_rev_rmcup",
    "no_pad_char",
    "non_dest_scroll_region",
    "can_change",
    "back_color_erase",
    "hue_lightness_saturation",
    "col_addr_glitch",
    "cr_cancels_micro_mode",
    "has_print_wheel",
    "row_addr_glitch",
    "semi_auto_right_margin",
    "cpi_changes_res",
    "lpi_changes_res",
    "backspaces_with_bs",
    "crt_no_scrolling",
    "no_correctly_working_cr",
    "gnu_has_meta_key",
    "linefeed_is_newline",
    "has_hardware_tabs",
    "return_does_clr_eol"
  ];
  Tput.numbers = [
    "columns",
    "init_tabs",
    "lines",
    "lines_of_memory",
    "magic_cookie_glitch",
    "padding_baud_rate",
    "virtual_terminal",
    "width_status_line",
    "num_labels",
    "label_height",
    "label_width",
    "max_attributes",
    "maximum_windows",
    "max_colors",
    "max_pairs",
    "no_color_video",
    "buffer_capacity",
    "dot_vert_spacing",
    "dot_horz_spacing",
    "max_micro_address",
    "max_micro_jump",
    "micro_col_size",
    "micro_line_size",
    "number_of_pins",
    "output_res_char",
    "output_res_line",
    "output_res_horz_inch",
    "output_res_vert_inch",
    "print_rate",
    "wide_char_size",
    "buttons",
    "bit_image_entwining",
    "bit_image_type",
    "magic_cookie_glitch_ul",
    "carriage_return_delay",
    "new_line_delay",
    "backspace_delay",
    "horizontal_tab_delay",
    "number_of_function_keys"
  ];
  Tput.strings = [
    "back_tab",
    "bell",
    "carriage_return",
    "change_scroll_region",
    "clear_all_tabs",
    "clear_screen",
    "clr_eol",
    "clr_eos",
    "column_address",
    "command_character",
    "cursor_address",
    "cursor_down",
    "cursor_home",
    "cursor_invisible",
    "cursor_left",
    "cursor_mem_address",
    "cursor_normal",
    "cursor_right",
    "cursor_to_ll",
    "cursor_up",
    "cursor_visible",
    "delete_character",
    "delete_line",
    "dis_status_line",
    "down_half_line",
    "enter_alt_charset_mode",
    "enter_blink_mode",
    "enter_bold_mode",
    "enter_ca_mode",
    "enter_delete_mode",
    "enter_dim_mode",
    "enter_insert_mode",
    "enter_secure_mode",
    "enter_protected_mode",
    "enter_reverse_mode",
    "enter_standout_mode",
    "enter_underline_mode",
    "erase_chars",
    "exit_alt_charset_mode",
    "exit_attribute_mode",
    "exit_ca_mode",
    "exit_delete_mode",
    "exit_insert_mode",
    "exit_standout_mode",
    "exit_underline_mode",
    "flash_screen",
    "form_feed",
    "from_status_line",
    "init_1string",
    "init_2string",
    "init_3string",
    "init_file",
    "insert_character",
    "insert_line",
    "insert_padding",
    "key_backspace",
    "key_catab",
    "key_clear",
    "key_ctab",
    "key_dc",
    "key_dl",
    "key_down",
    "key_eic",
    "key_eol",
    "key_eos",
    "key_f0",
    "key_f1",
    "key_f10",
    "key_f2",
    "key_f3",
    "key_f4",
    "key_f5",
    "key_f6",
    "key_f7",
    "key_f8",
    "key_f9",
    "key_home",
    "key_ic",
    "key_il",
    "key_left",
    "key_ll",
    "key_npage",
    "key_ppage",
    "key_right",
    "key_sf",
    "key_sr",
    "key_stab",
    "key_up",
    "keypad_local",
    "keypad_xmit",
    "lab_f0",
    "lab_f1",
    "lab_f10",
    "lab_f2",
    "lab_f3",
    "lab_f4",
    "lab_f5",
    "lab_f6",
    "lab_f7",
    "lab_f8",
    "lab_f9",
    "meta_off",
    "meta_on",
    "newline",
    "pad_char",
    "parm_dch",
    "parm_delete_line",
    "parm_down_cursor",
    "parm_ich",
    "parm_index",
    "parm_insert_line",
    "parm_left_cursor",
    "parm_right_cursor",
    "parm_rindex",
    "parm_up_cursor",
    "pkey_key",
    "pkey_local",
    "pkey_xmit",
    "print_screen",
    "prtr_off",
    "prtr_on",
    "repeat_char",
    "reset_1string",
    "reset_2string",
    "reset_3string",
    "reset_file",
    "restore_cursor",
    "row_address",
    "save_cursor",
    "scroll_forward",
    "scroll_reverse",
    "set_attributes",
    "set_tab",
    "set_window",
    "tab",
    "to_status_line",
    "underline_char",
    "up_half_line",
    "init_prog",
    "key_a1",
    "key_a3",
    "key_b2",
    "key_c1",
    "key_c3",
    "prtr_non",
    "char_padding",
    "acs_chars",
    "plab_norm",
    "key_btab",
    "enter_xon_mode",
    "exit_xon_mode",
    "enter_am_mode",
    "exit_am_mode",
    "xon_character",
    "xoff_character",
    "ena_acs",
    "label_on",
    "label_off",
    "key_beg",
    "key_cancel",
    "key_close",
    "key_command",
    "key_copy",
    "key_create",
    "key_end",
    "key_enter",
    "key_exit",
    "key_find",
    "key_help",
    "key_mark",
    "key_message",
    "key_move",
    "key_next",
    "key_open",
    "key_options",
    "key_previous",
    "key_print",
    "key_redo",
    "key_reference",
    "key_refresh",
    "key_replace",
    "key_restart",
    "key_resume",
    "key_save",
    "key_suspend",
    "key_undo",
    "key_sbeg",
    "key_scancel",
    "key_scommand",
    "key_scopy",
    "key_screate",
    "key_sdc",
    "key_sdl",
    "key_select",
    "key_send",
    "key_seol",
    "key_sexit",
    "key_sfind",
    "key_shelp",
    "key_shome",
    "key_sic",
    "key_sleft",
    "key_smessage",
    "key_smove",
    "key_snext",
    "key_soptions",
    "key_sprevious",
    "key_sprint",
    "key_sredo",
    "key_sreplace",
    "key_sright",
    "key_srsume",
    "key_ssave",
    "key_ssuspend",
    "key_sundo",
    "req_for_input",
    "key_f11",
    "key_f12",
    "key_f13",
    "key_f14",
    "key_f15",
    "key_f16",
    "key_f17",
    "key_f18",
    "key_f19",
    "key_f20",
    "key_f21",
    "key_f22",
    "key_f23",
    "key_f24",
    "key_f25",
    "key_f26",
    "key_f27",
    "key_f28",
    "key_f29",
    "key_f30",
    "key_f31",
    "key_f32",
    "key_f33",
    "key_f34",
    "key_f35",
    "key_f36",
    "key_f37",
    "key_f38",
    "key_f39",
    "key_f40",
    "key_f41",
    "key_f42",
    "key_f43",
    "key_f44",
    "key_f45",
    "key_f46",
    "key_f47",
    "key_f48",
    "key_f49",
    "key_f50",
    "key_f51",
    "key_f52",
    "key_f53",
    "key_f54",
    "key_f55",
    "key_f56",
    "key_f57",
    "key_f58",
    "key_f59",
    "key_f60",
    "key_f61",
    "key_f62",
    "key_f63",
    "clr_bol",
    "clear_margins",
    "set_left_margin",
    "set_right_margin",
    "label_format",
    "set_clock",
    "display_clock",
    "remove_clock",
    "create_window",
    "goto_window",
    "hangup",
    "dial_phone",
    "quick_dial",
    "tone",
    "pulse",
    "flash_hook",
    "fixed_pause",
    "wait_tone",
    "user0",
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
    "user7",
    "user8",
    "user9",
    "orig_pair",
    "orig_colors",
    "initialize_color",
    "initialize_pair",
    "set_color_pair",
    "set_foreground",
    "set_background",
    "change_char_pitch",
    "change_line_pitch",
    "change_res_horz",
    "change_res_vert",
    "define_char",
    "enter_doublewide_mode",
    "enter_draft_quality",
    "enter_italics_mode",
    "enter_leftward_mode",
    "enter_micro_mode",
    "enter_near_letter_quality",
    "enter_normal_quality",
    "enter_shadow_mode",
    "enter_subscript_mode",
    "enter_superscript_mode",
    "enter_upward_mode",
    "exit_doublewide_mode",
    "exit_italics_mode",
    "exit_leftward_mode",
    "exit_micro_mode",
    "exit_shadow_mode",
    "exit_subscript_mode",
    "exit_superscript_mode",
    "exit_upward_mode",
    "micro_column_address",
    "micro_down",
    "micro_left",
    "micro_right",
    "micro_row_address",
    "micro_up",
    "order_of_pins",
    "parm_down_micro",
    "parm_left_micro",
    "parm_right_micro",
    "parm_up_micro",
    "select_char_set",
    "set_bottom_margin",
    "set_bottom_margin_parm",
    "set_left_margin_parm",
    "set_right_margin_parm",
    "set_top_margin",
    "set_top_margin_parm",
    "start_bit_image",
    "start_char_set_def",
    "stop_bit_image",
    "stop_char_set_def",
    "subscript_characters",
    "superscript_characters",
    "these_cause_cr",
    "zero_motion",
    "char_set_names",
    "key_mouse",
    "mouse_info",
    "req_mouse_pos",
    "get_mouse",
    "set_a_foreground",
    "set_a_background",
    "pkey_plab",
    "device_type",
    "code_set_init",
    "set0_des_seq",
    "set1_des_seq",
    "set2_des_seq",
    "set3_des_seq",
    "set_lr_margin",
    "set_tb_margin",
    "bit_image_repeat",
    "bit_image_newline",
    "bit_image_carriage_return",
    "color_names",
    "define_bit_image_region",
    "end_bit_image_region",
    "set_color_band",
    "set_page_length",
    "display_pc_char",
    "enter_pc_charset_mode",
    "exit_pc_charset_mode",
    "enter_scancode_mode",
    "exit_scancode_mode",
    "pc_term_options",
    "scancode_escape",
    "alt_scancode_esc",
    "enter_horizontal_hl_mode",
    "enter_left_hl_mode",
    "enter_low_hl_mode",
    "enter_right_hl_mode",
    "enter_top_hl_mode",
    "enter_vertical_hl_mode",
    "set_a_attributes",
    "set_pglen_inch",
    "termcap_init2",
    "termcap_reset",
    "linefeed_if_not_lf",
    "backspace_if_not_bs",
    "other_non_function_keys",
    "arrow_key_map",
    "acs_ulcorner",
    "acs_llcorner",
    "acs_urcorner",
    "acs_lrcorner",
    "acs_ltee",
    "acs_rtee",
    "acs_btee",
    "acs_ttee",
    "acs_hline",
    "acs_vline",
    "acs_plus",
    "memory_lock",
    "memory_unlock",
    "box_chars_1"
  ];
  Tput.acsc = {
    "`": "\u25C6",
    a: "\u2592",
    b: "\t",
    c: "\f",
    d: "\r",
    e: `
`,
    f: "\xB0",
    g: "\xB1",
    h: "\u2424",
    i: "\v",
    j: "\u2518",
    k: "\u2510",
    l: "\u250C",
    m: "\u2514",
    n: "\u253C",
    o: "\u23BA",
    p: "\u23BB",
    q: "\u2500",
    r: "\u23BC",
    s: "\u23BD",
    t: "\u251C",
    u: "\u2524",
    v: "\u2534",
    w: "\u252C",
    x: "\u2502",
    y: "\u2264",
    z: "\u2265",
    "{": "\u03C0",
    "|": "\u2260",
    "}": "\xA3",
    "~": "\xB7"
  };
  Tput.utoa = Tput.prototype.utoa = {
    "\u25C6": "*",
    "\u2592": " ",
    "\xB0": "*",
    "\xB1": "+",
    "\u2424": `
`,
    "\u2518": "+",
    "\u2510": "+",
    "\u250C": "+",
    "\u2514": "+",
    "\u253C": "+",
    "\u23BA": "-",
    "\u23BB": "-",
    "\u2500": "-",
    "\u23BC": "-",
    "\u23BD": "_",
    "\u251C": "+",
    "\u2524": "+",
    "\u2534": "+",
    "\u252C": "+",
    "\u2502": "|",
    "\u2264": "<",
    "\u2265": ">",
    "\u03C0": "?",
    "\u2260": "=",
    "\xA3": "?",
    "\xB7": "*"
  };
  exports = Tput;
  exports.sprintf = sprintf;
  exports.tryRead = tryRead;
  module.exports = exports;
});

// node_modules/neo-blessed/lib/colors.js
var require_colors = __commonJS((exports) => {
  exports.match = function(r1, g1, b1) {
    if (typeof r1 === "string") {
      var hex = r1;
      if (hex[0] !== "#") {
        return -1;
      }
      hex = exports.hexToRGB(hex);
      r1 = hex[0], g1 = hex[1], b1 = hex[2];
    } else if (Array.isArray(r1)) {
      b1 = r1[2], g1 = r1[1], r1 = r1[0];
    }
    var hash = r1 << 16 | g1 << 8 | b1;
    if (exports._cache[hash] != null) {
      return exports._cache[hash];
    }
    var ldiff = Infinity, li = -1, i = 0, c, r2, g2, b2, diff;
    for (;i < exports.vcolors.length; i++) {
      c = exports.vcolors[i];
      r2 = c[0];
      g2 = c[1];
      b2 = c[2];
      diff = colorDistance(r1, g1, b1, r2, g2, b2);
      if (diff === 0) {
        li = i;
        break;
      }
      if (diff < ldiff) {
        ldiff = diff;
        li = i;
      }
    }
    return exports._cache[hash] = li;
  };
  exports.RGBToHex = function(r, g, b) {
    if (Array.isArray(r)) {
      b = r[2], g = r[1], r = r[0];
    }
    function hex(n) {
      n = n.toString(16);
      if (n.length < 2)
        n = "0" + n;
      return n;
    }
    return "#" + hex(r) + hex(g) + hex(b);
  };
  exports.hexToRGB = function(hex) {
    if (hex.length === 4) {
      hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    var col = parseInt(hex.substring(1), 16), r = col >> 16 & 255, g = col >> 8 & 255, b = col & 255;
    return [r, g, b];
  };
  function colorDistance(r1, g1, b1, r2, g2, b2) {
    return Math.pow(30 * (r1 - r2), 2) + Math.pow(59 * (g1 - g2), 2) + Math.pow(11 * (b1 - b2), 2);
  }
  exports.mixColors = function(c1, c2, alpha) {
    if (c1 === 511)
      c1 = 0;
    if (c2 === 511)
      c2 = 0;
    if (alpha == null)
      alpha = 0.5;
    c1 = exports.vcolors[c1];
    var r1 = c1[0];
    var g1 = c1[1];
    var b1 = c1[2];
    c2 = exports.vcolors[c2];
    var r2 = c2[0];
    var g2 = c2[1];
    var b2 = c2[2];
    r1 += (r2 - r1) * alpha | 0;
    g1 += (g2 - g1) * alpha | 0;
    b1 += (b2 - b1) * alpha | 0;
    return exports.match([r1, g1, b1]);
  };
  exports.blend = function blend(attr, attr2, alpha) {
    var name, i, c, nc;
    var bg = attr & 511;
    if (attr2 != null) {
      var bg2 = attr2 & 511;
      if (bg === 511)
        bg = 0;
      if (bg2 === 511)
        bg2 = 0;
      bg = exports.mixColors(bg, bg2, alpha);
    } else {
      if (blend._cache[bg] != null) {
        bg = blend._cache[bg];
      } else if (bg >= 8 && bg <= 15) {
        bg -= 8;
      } else {
        name = exports.ncolors[bg];
        if (name) {
          for (i = 0;i < exports.ncolors.length; i++) {
            if (name === exports.ncolors[i] && i !== bg) {
              c = exports.vcolors[bg];
              nc = exports.vcolors[i];
              if (nc[0] + nc[1] + nc[2] < c[0] + c[1] + c[2]) {
                blend._cache[bg] = i;
                bg = i;
                break;
              }
            }
          }
        }
      }
    }
    attr &= ~511;
    attr |= bg;
    var fg = attr >> 9 & 511;
    if (attr2 != null) {
      var fg2 = attr2 >> 9 & 511;
      if (fg === 511) {
        fg = 248;
      } else {
        if (fg === 511)
          fg = 7;
        if (fg2 === 511)
          fg2 = 7;
        fg = exports.mixColors(fg, fg2, alpha);
      }
    } else {
      if (blend._cache[fg] != null) {
        fg = blend._cache[fg];
      } else if (fg >= 8 && fg <= 15) {
        fg -= 8;
      } else {
        name = exports.ncolors[fg];
        if (name) {
          for (i = 0;i < exports.ncolors.length; i++) {
            if (name === exports.ncolors[i] && i !== fg) {
              c = exports.vcolors[fg];
              nc = exports.vcolors[i];
              if (nc[0] + nc[1] + nc[2] < c[0] + c[1] + c[2]) {
                blend._cache[fg] = i;
                fg = i;
                break;
              }
            }
          }
        }
      }
    }
    attr &= ~(511 << 9);
    attr |= fg << 9;
    return attr;
  };
  exports.blend._cache = {};
  exports._cache = {};
  exports.reduce = function(color, total) {
    if (color >= 16 && total <= 16) {
      color = exports.ccolors[color];
    } else if (color >= 8 && total <= 8) {
      color -= 8;
    } else if (color >= 2 && total <= 2) {
      color %= 2;
    }
    return color;
  };
  exports.xterm = [
    "#000000",
    "#cd0000",
    "#00cd00",
    "#cdcd00",
    "#0000ee",
    "#cd00cd",
    "#00cdcd",
    "#e5e5e5",
    "#7f7f7f",
    "#ff0000",
    "#00ff00",
    "#ffff00",
    "#5c5cff",
    "#ff00ff",
    "#00ffff",
    "#ffffff"
  ];
  exports.colors = function() {
    var cols = exports.colors = [], _cols = exports.vcolors = [], r, g, b, i, l;
    function hex(n) {
      n = n.toString(16);
      if (n.length < 2)
        n = "0" + n;
      return n;
    }
    function push(i2, r2, g2, b2) {
      cols[i2] = "#" + hex(r2) + hex(g2) + hex(b2);
      _cols[i2] = [r2, g2, b2];
    }
    exports.xterm.forEach(function(c, i2) {
      c = parseInt(c.substring(1), 16);
      push(i2, c >> 16 & 255, c >> 8 & 255, c & 255);
    });
    for (r = 0;r < 6; r++) {
      for (g = 0;g < 6; g++) {
        for (b = 0;b < 6; b++) {
          i = 16 + r * 36 + g * 6 + b;
          push(i, r ? r * 40 + 55 : 0, g ? g * 40 + 55 : 0, b ? b * 40 + 55 : 0);
        }
      }
    }
    for (g = 0;g < 24; g++) {
      l = g * 10 + 8;
      i = 232 + g;
      push(i, l, l, l);
    }
    return cols;
  }();
  exports.ccolors = function() {
    var _cols = exports.vcolors.slice(), cols = exports.colors.slice(), out;
    exports.vcolors = exports.vcolors.slice(0, 8);
    exports.colors = exports.colors.slice(0, 8);
    out = cols.map(exports.match);
    exports.colors = cols;
    exports.vcolors = _cols;
    exports.ccolors = out;
    return out;
  }();
  var colorNames = exports.colorNames = {
    default: -1,
    normal: -1,
    bg: -1,
    fg: -1,
    black: 0,
    red: 1,
    green: 2,
    yellow: 3,
    blue: 4,
    magenta: 5,
    cyan: 6,
    white: 7,
    lightblack: 8,
    lightred: 9,
    lightgreen: 10,
    lightyellow: 11,
    lightblue: 12,
    lightmagenta: 13,
    lightcyan: 14,
    lightwhite: 15,
    brightblack: 8,
    brightred: 9,
    brightgreen: 10,
    brightyellow: 11,
    brightblue: 12,
    brightmagenta: 13,
    brightcyan: 14,
    brightwhite: 15,
    grey: 8,
    gray: 8,
    lightgrey: 7,
    lightgray: 7,
    brightgrey: 7,
    brightgray: 7
  };
  exports.convert = function(color) {
    if (typeof color === "number") {} else if (typeof color === "string") {
      color = color.replace(/[\- ]/g, "");
      if (colorNames[color] != null) {
        color = colorNames[color];
      } else {
        color = exports.match(color);
      }
    } else if (Array.isArray(color)) {
      color = exports.match(color);
    } else {
      color = -1;
    }
    return color !== -1 ? color : 511;
  };
  exports.ccolors = {
    blue: [
      4,
      12,
      [17, 21],
      [24, 27],
      [31, 33],
      [38, 39],
      45,
      [54, 57],
      [60, 63],
      [67, 69],
      [74, 75],
      81,
      [91, 93],
      [97, 99],
      [103, 105],
      [110, 111],
      117,
      [128, 129],
      [134, 135],
      [140, 141],
      [146, 147],
      153,
      165,
      171,
      177,
      183,
      189
    ],
    green: [
      2,
      10,
      22,
      [28, 29],
      [34, 36],
      [40, 43],
      [46, 50],
      [64, 65],
      [70, 72],
      [76, 79],
      [82, 86],
      [106, 108],
      [112, 115],
      [118, 122],
      [148, 151],
      [154, 158],
      [190, 194]
    ],
    cyan: [
      6,
      14,
      23,
      30,
      37,
      44,
      51,
      66,
      73,
      80,
      87,
      109,
      116,
      123,
      152,
      159,
      195
    ],
    red: [
      1,
      9,
      52,
      [88, 89],
      [94, 95],
      [124, 126],
      [130, 132],
      [136, 138],
      [160, 163],
      [166, 169],
      [172, 175],
      [178, 181],
      [196, 200],
      [202, 206],
      [208, 212],
      [214, 218],
      [220, 224]
    ],
    magenta: [
      5,
      13,
      53,
      90,
      96,
      127,
      133,
      139,
      164,
      170,
      176,
      182,
      201,
      207,
      213,
      219,
      225
    ],
    yellow: [
      3,
      11,
      58,
      [100, 101],
      [142, 144],
      [184, 187],
      [226, 230]
    ],
    black: [
      0,
      8,
      16,
      59,
      102,
      [232, 243]
    ],
    white: [
      7,
      15,
      145,
      188,
      231,
      [244, 255]
    ]
  };
  exports.ncolors = [];
  Object.keys(exports.ccolors).forEach(function(name) {
    exports.ccolors[name].forEach(function(offset) {
      if (typeof offset === "number") {
        exports.ncolors[offset] = name;
        exports.ccolors[offset] = exports.colorNames[name];
        return;
      }
      for (var i = offset[0], l = offset[1];i <= l; i++) {
        exports.ncolors[i] = name;
        exports.ccolors[i] = exports.colorNames[name];
      }
    });
    delete exports.ccolors[name];
  });
});

// node_modules/neo-blessed/lib/keys.js
var require_keys = __commonJS((exports) => {
  var EventEmitter = __require("events").EventEmitter;
  function listenerCount(stream, event) {
    return EventEmitter.listenerCount ? EventEmitter.listenerCount(stream, event) : stream.listeners(event).length;
  }
  function emitKeypressEvents(stream) {
    if (stream._keypressDecoder)
      return;
    var StringDecoder = __require("string_decoder").StringDecoder;
    stream._keypressDecoder = new StringDecoder("utf8");
    function onData(b) {
      if (listenerCount(stream, "keypress") > 0) {
        var r = stream._keypressDecoder.write(b);
        if (r)
          emitKeys(stream, r);
      } else {
        stream.removeListener("data", onData);
        stream.on("newListener", onNewListener);
      }
    }
    function onNewListener(event) {
      if (event === "keypress") {
        stream.on("data", onData);
        stream.removeListener("newListener", onNewListener);
      }
    }
    if (listenerCount(stream, "keypress") > 0) {
      stream.on("data", onData);
    } else {
      stream.on("newListener", onNewListener);
    }
  }
  exports.emitKeypressEvents = emitKeypressEvents;
  var metaKeyCodeReAnywhere = /(?:\x1b)([a-zA-Z0-9])/;
  var metaKeyCodeRe = new RegExp("^" + metaKeyCodeReAnywhere.source + "$");
  var functionKeyCodeReAnywhere = new RegExp("(?:\x1B+)(O|N|\\[|\\[\\[)(?:" + [
    "(\\d+)(?:;(\\d+))?([~^$])",
    "(?:M([@ #!a`])(.)(.))",
    "(?:1;)?(\\d+)?([a-zA-Z])"
  ].join("|") + ")");
  var functionKeyCodeRe = new RegExp("^" + functionKeyCodeReAnywhere.source);
  var escapeCodeReAnywhere = new RegExp([
    functionKeyCodeReAnywhere.source,
    metaKeyCodeReAnywhere.source,
    /\x1b./.source
  ].join("|"));
  function emitKeys(stream, s) {
    if (Buffer.isBuffer(s)) {
      if (s[0] > 127 && s[1] === undefined) {
        s[0] -= 128;
        s = "\x1B" + s.toString(stream.encoding || "utf-8");
      } else {
        s = s.toString(stream.encoding || "utf-8");
      }
    }
    if (isMouse(s))
      return;
    var buffer = [];
    var match;
    while (match = escapeCodeReAnywhere.exec(s)) {
      buffer = buffer.concat(s.slice(0, match.index).split(""));
      buffer.push(match[0]);
      s = s.slice(match.index + match[0].length);
    }
    buffer = buffer.concat(s.split(""));
    buffer.forEach(function(s2) {
      var ch, key = {
        sequence: s2,
        name: undefined,
        ctrl: false,
        meta: false,
        shift: false
      }, parts;
      if (s2 === "\r") {
        key.name = "return";
      } else if (s2 === `
`) {
        key.name = "enter";
      } else if (s2 === "\t") {
        key.name = "tab";
      } else if (s2 === "\b" || s2 === "\x7F" || s2 === "\x1B\x7F" || s2 === "\x1B\b") {
        key.name = "backspace";
        key.meta = s2.charAt(0) === "\x1B";
      } else if (s2 === "\x1B" || s2 === "\x1B\x1B") {
        key.name = "escape";
        key.meta = s2.length === 2;
      } else if (s2 === " " || s2 === "\x1B ") {
        key.name = "space";
        key.meta = s2.length === 2;
      } else if (s2.length === 1 && s2 <= "\x1A") {
        key.name = String.fromCharCode(s2.charCodeAt(0) + 97 - 1);
        key.ctrl = true;
      } else if (s2.length === 1 && s2 >= "a" && s2 <= "z") {
        key.name = s2;
      } else if (s2.length === 1 && s2 >= "A" && s2 <= "Z") {
        key.name = s2.toLowerCase();
        key.shift = true;
      } else if (parts = metaKeyCodeRe.exec(s2)) {
        key.name = parts[1].toLowerCase();
        key.meta = true;
        key.shift = /^[A-Z]$/.test(parts[1]);
      } else if (parts = functionKeyCodeRe.exec(s2)) {
        var code = (parts[1] || "") + (parts[2] || "") + (parts[4] || "") + (parts[9] || ""), modifier = (parts[3] || parts[8] || 1) - 1;
        key.ctrl = !!(modifier & 4);
        key.meta = !!(modifier & 10);
        key.shift = !!(modifier & 1);
        key.code = code;
        switch (code) {
          case "OP":
            key.name = "f1";
            break;
          case "OQ":
            key.name = "f2";
            break;
          case "OR":
            key.name = "f3";
            break;
          case "OS":
            key.name = "f4";
            break;
          case "[11~":
            key.name = "f1";
            break;
          case "[12~":
            key.name = "f2";
            break;
          case "[13~":
            key.name = "f3";
            break;
          case "[14~":
            key.name = "f4";
            break;
          case "[[A":
            key.name = "f1";
            break;
          case "[[B":
            key.name = "f2";
            break;
          case "[[C":
            key.name = "f3";
            break;
          case "[[D":
            key.name = "f4";
            break;
          case "[[E":
            key.name = "f5";
            break;
          case "[15~":
            key.name = "f5";
            break;
          case "[17~":
            key.name = "f6";
            break;
          case "[18~":
            key.name = "f7";
            break;
          case "[19~":
            key.name = "f8";
            break;
          case "[20~":
            key.name = "f9";
            break;
          case "[21~":
            key.name = "f10";
            break;
          case "[23~":
            key.name = "f11";
            break;
          case "[24~":
            key.name = "f12";
            break;
          case "[A":
            key.name = "up";
            break;
          case "[B":
            key.name = "down";
            break;
          case "[C":
            key.name = "right";
            break;
          case "[D":
            key.name = "left";
            break;
          case "[E":
            key.name = "clear";
            break;
          case "[F":
            key.name = "end";
            break;
          case "[H":
            key.name = "home";
            break;
          case "OA":
            key.name = "up";
            break;
          case "OB":
            key.name = "down";
            break;
          case "OC":
            key.name = "right";
            break;
          case "OD":
            key.name = "left";
            break;
          case "OE":
            key.name = "clear";
            break;
          case "OF":
            key.name = "end";
            break;
          case "OH":
            key.name = "home";
            break;
          case "[1~":
            key.name = "home";
            break;
          case "[2~":
            key.name = "insert";
            break;
          case "[3~":
            key.name = "delete";
            break;
          case "[4~":
            key.name = "end";
            break;
          case "[5~":
            key.name = "pageup";
            break;
          case "[6~":
            key.name = "pagedown";
            break;
          case "[[5~":
            key.name = "pageup";
            break;
          case "[[6~":
            key.name = "pagedown";
            break;
          case "[7~":
            key.name = "home";
            break;
          case "[8~":
            key.name = "end";
            break;
          case "[a":
            key.name = "up";
            key.shift = true;
            break;
          case "[b":
            key.name = "down";
            key.shift = true;
            break;
          case "[c":
            key.name = "right";
            key.shift = true;
            break;
          case "[d":
            key.name = "left";
            key.shift = true;
            break;
          case "[e":
            key.name = "clear";
            key.shift = true;
            break;
          case "[2$":
            key.name = "insert";
            key.shift = true;
            break;
          case "[3$":
            key.name = "delete";
            key.shift = true;
            break;
          case "[5$":
            key.name = "pageup";
            key.shift = true;
            break;
          case "[6$":
            key.name = "pagedown";
            key.shift = true;
            break;
          case "[7$":
            key.name = "home";
            key.shift = true;
            break;
          case "[8$":
            key.name = "end";
            key.shift = true;
            break;
          case "Oa":
            key.name = "up";
            key.ctrl = true;
            break;
          case "Ob":
            key.name = "down";
            key.ctrl = true;
            break;
          case "Oc":
            key.name = "right";
            key.ctrl = true;
            break;
          case "Od":
            key.name = "left";
            key.ctrl = true;
            break;
          case "Oe":
            key.name = "clear";
            key.ctrl = true;
            break;
          case "[2^":
            key.name = "insert";
            key.ctrl = true;
            break;
          case "[3^":
            key.name = "delete";
            key.ctrl = true;
            break;
          case "[5^":
            key.name = "pageup";
            key.ctrl = true;
            break;
          case "[6^":
            key.name = "pagedown";
            key.ctrl = true;
            break;
          case "[7^":
            key.name = "home";
            key.ctrl = true;
            break;
          case "[8^":
            key.name = "end";
            key.ctrl = true;
            break;
          case "[Z":
            key.name = "tab";
            key.shift = true;
            break;
          default:
            key.name = "undefined";
            break;
        }
      }
      if (key.name === undefined) {
        key = undefined;
      }
      if (s2.length === 1) {
        ch = s2;
      }
      if (key || ch) {
        stream.emit("keypress", ch, key);
      }
    });
  }
  function isMouse(s) {
    return /\x1b\[M/.test(s) || /\x1b\[M([\x00\u0020-\uffff]{3})/.test(s) || /\x1b\[(\d+;\d+;\d+)M/.test(s) || /\x1b\[<(\d+;\d+;\d+)([mM])/.test(s) || /\x1b\[<(\d+;\d+;\d+;\d+)&w/.test(s) || /\x1b\[24([0135])~\[(\d+),(\d+)\]\r/.test(s) || /\x1b\[(O|I)/.test(s);
  }
});

// node_modules/neo-blessed/lib/gpmclient.js
var require_gpmclient = __commonJS((exports, module) => {
  var net = __require("net");
  var fs = __require("fs");
  var EventEmitter = __require("events").EventEmitter;
  var GPM_USE_MAGIC = false;
  var GPM_MOVE = 1;
  var GPM_DRAG = 2;
  var GPM_DOWN = 4;
  var GPM_UP = 8;
  var GPM_DOUBLE = 32;
  var GPM_MFLAG = 128;
  var GPM_REQ_NOPASTE = 3;
  var GPM_HARD = 256;
  var GPM_MAGIC = 1198550348;
  var GPM_SOCKET = "/dev/gpmctl";
  function send_config(socket, Gpm_Connect, callback) {
    var buffer;
    if (GPM_USE_MAGIC) {
      buffer = new Buffer(20);
      buffer.writeUInt32LE(GPM_MAGIC, 0);
      buffer.writeUInt16LE(Gpm_Connect.eventMask, 4);
      buffer.writeUInt16LE(Gpm_Connect.defaultMask, 6);
      buffer.writeUInt16LE(Gpm_Connect.minMod, 8);
      buffer.writeUInt16LE(Gpm_Connect.maxMod, 10);
      buffer.writeInt16LE(process.pid, 12);
      buffer.writeInt16LE(Gpm_Connect.vc, 16);
    } else {
      buffer = new Buffer(16);
      buffer.writeUInt16LE(Gpm_Connect.eventMask, 0);
      buffer.writeUInt16LE(Gpm_Connect.defaultMask, 2);
      buffer.writeUInt16LE(Gpm_Connect.minMod, 4);
      buffer.writeUInt16LE(Gpm_Connect.maxMod, 6);
      buffer.writeInt16LE(Gpm_Connect.pid, 8);
      buffer.writeInt16LE(Gpm_Connect.vc, 12);
    }
    socket.write(buffer, function() {
      if (callback)
        callback();
    });
  }
  function parseEvent(raw) {
    var evnt = {};
    evnt.buttons = raw[0];
    evnt.modifiers = raw[1];
    evnt.vc = raw.readUInt16LE(2);
    evnt.dx = raw.readInt16LE(4);
    evnt.dy = raw.readInt16LE(6);
    evnt.x = raw.readInt16LE(8);
    evnt.y = raw.readInt16LE(10);
    evnt.type = raw.readInt16LE(12);
    evnt.clicks = raw.readInt32LE(16);
    evnt.margin = raw.readInt32LE(20);
    evnt.wdx = raw.readInt16LE(24);
    evnt.wdy = raw.readInt16LE(26);
    return evnt;
  }
  function GpmClient(options) {
    if (!(this instanceof GpmClient)) {
      return new GpmClient(options);
    }
    EventEmitter.call(this);
    var pid = process.pid;
    var path;
    try {
      path = fs.readlinkSync("/proc/" + pid + "/fd/0");
    } catch (e) {}
    var tty = /tty[0-9]+$/.exec(path);
    if (tty === null) {}
    var vc;
    if (tty) {
      tty = tty[0];
      vc = +/[0-9]+$/.exec(tty)[0];
    }
    var self = this;
    if (tty) {
      fs.stat(GPM_SOCKET, function(err, stat) {
        if (err || !stat.isSocket()) {
          return;
        }
        var conf = {
          eventMask: 65535,
          defaultMask: GPM_MOVE | GPM_HARD,
          minMod: 0,
          maxMod: 65535,
          pid,
          vc
        };
        var gpm = net.createConnection(GPM_SOCKET);
        this.gpm = gpm;
        gpm.on("connect", function() {
          send_config(gpm, conf, function() {
            conf.pid = 0;
            conf.vc = GPM_REQ_NOPASTE;
          });
        });
        gpm.on("data", function(packet) {
          var evnt = parseEvent(packet);
          switch (evnt.type & 15) {
            case GPM_MOVE:
              if (evnt.dx || evnt.dy) {
                self.emit("move", evnt.buttons, evnt.modifiers, evnt.x, evnt.y);
              }
              if (evnt.wdx || evnt.wdy) {
                self.emit("mousewheel", evnt.buttons, evnt.modifiers, evnt.x, evnt.y, evnt.wdx, evnt.wdy);
              }
              break;
            case GPM_DRAG:
              if (evnt.dx || evnt.dy) {
                self.emit("drag", evnt.buttons, evnt.modifiers, evnt.x, evnt.y);
              }
              if (evnt.wdx || evnt.wdy) {
                self.emit("mousewheel", evnt.buttons, evnt.modifiers, evnt.x, evnt.y, evnt.wdx, evnt.wdy);
              }
              break;
            case GPM_DOWN:
              self.emit("btndown", evnt.buttons, evnt.modifiers, evnt.x, evnt.y);
              if (evnt.type & GPM_DOUBLE) {
                self.emit("dblclick", evnt.buttons, evnt.modifiers, evnt.x, evnt.y);
              }
              break;
            case GPM_UP:
              self.emit("btnup", evnt.buttons, evnt.modifiers, evnt.x, evnt.y);
              if (!(evnt.type & GPM_MFLAG)) {
                self.emit("click", evnt.buttons, evnt.modifiers, evnt.x, evnt.y);
              }
              break;
          }
        });
        gpm.on("error", function() {
          self.stop();
        });
      });
    }
  }
  GpmClient.prototype.__proto__ = EventEmitter.prototype;
  GpmClient.prototype.stop = function() {
    if (this.gpm) {
      this.gpm.end();
    }
    delete this.gpm;
  };
  GpmClient.prototype.ButtonName = function(btn) {
    if (btn & 4)
      return "left";
    if (btn & 2)
      return "middle";
    if (btn & 1)
      return "right";
    return "";
  };
  GpmClient.prototype.hasShiftKey = function(mod) {
    return mod & 1 ? true : false;
  };
  GpmClient.prototype.hasCtrlKey = function(mod) {
    return mod & 4 ? true : false;
  };
  GpmClient.prototype.hasMetaKey = function(mod) {
    return mod & 8 ? true : false;
  };
  module.exports = GpmClient;
});

// node_modules/neo-blessed/lib/program.js
var require_program = __commonJS((exports, module) => {
  var EventEmitter = __require("events").EventEmitter;
  var StringDecoder = __require("string_decoder").StringDecoder;
  var cp = __require("child_process");
  var util = __require("util");
  var fs = __require("fs");
  var Tput = require_tput();
  var colors = require_colors();
  var slice = Array.prototype.slice;
  var nextTick = global.setImmediate || process.nextTick.bind(process);
  function Program(options) {
    var self = this;
    if (!(this instanceof Program)) {
      return new Program(options);
    }
    Program.bind(this);
    EventEmitter.call(this);
    if (!options || options.__proto__ !== Object.prototype) {
      options = {
        input: arguments[0],
        output: arguments[1]
      };
    }
    this.options = options;
    this.input = options.input || process.stdin;
    this.output = options.output || process.stdout;
    options.log = options.log || options.dump;
    if (options.log) {
      this._logger = fs.createWriteStream(options.log);
      if (options.dump)
        this.setupDump();
    }
    this.zero = options.zero !== false;
    this.useBuffer = options.buffer;
    this.x = 0;
    this.y = 0;
    this.savedX = 0;
    this.savedY = 0;
    this.cols = this.output.columns || 1;
    this.rows = this.output.rows || 1;
    this.scrollTop = 0;
    this.scrollBottom = this.rows - 1;
    this._terminal = options.terminal || options.term || process.env.TERM || (process.platform === "win32" ? "windows-ansi" : "xterm");
    this._terminal = this._terminal.toLowerCase();
    this.isOSXTerm = process.env.TERM_PROGRAM === "Apple_Terminal";
    this.isiTerm2 = process.env.TERM_PROGRAM === "iTerm.app" || !!process.env.ITERM_SESSION_ID;
    this.isXFCE = /xfce/i.test(process.env.COLORTERM);
    this.isTerminator = !!process.env.TERMINATOR_UUID;
    this.isLXDE = false;
    this.isVTE = !!process.env.VTE_VERSION || this.isXFCE || this.isTerminator || this.isLXDE;
    this.isRxvt = /rxvt/i.test(process.env.COLORTERM);
    this.isXterm = false;
    this.tmux = !!process.env.TMUX;
    this.tmuxVersion = function() {
      if (!self.tmux)
        return 2;
      try {
        var version = cp.execFileSync("tmux", ["-V"], { encoding: "utf8" });
        return +/^tmux ([\d.]+)/i.exec(version.trim().split(`
`)[0])[1];
      } catch (e) {
        return 2;
      }
    }();
    this._buf = "";
    this._flush = this.flush.bind(this);
    if (options.tput !== false) {
      this.setupTput();
    }
    this.listen();
  }
  Program.global = null;
  Program.total = 0;
  Program.instances = [];
  Program.bind = function(program) {
    if (!Program.global) {
      Program.global = program;
    }
    if (!~Program.instances.indexOf(program)) {
      Program.instances.push(program);
      program.index = Program.total;
      Program.total++;
    }
    if (Program._bound)
      return;
    Program._bound = true;
    unshiftEvent(process, "exit", Program._exitHandler = function() {
      Program.instances.forEach(function(program2) {
        program2.flush();
        program2._exiting = true;
      });
    });
  };
  Program.prototype.__proto__ = EventEmitter.prototype;
  Program.prototype.type = "program";
  Program.prototype.log = function() {
    return this._log("LOG", util.format.apply(util, arguments));
  };
  Program.prototype.debug = function() {
    if (!this.options.debug)
      return;
    return this._log("DEBUG", util.format.apply(util, arguments));
  };
  Program.prototype._log = function(pre, msg) {
    if (!this._logger)
      return;
    return this._logger.write(pre + ": " + msg + `
-
`);
  };
  Program.prototype.setupDump = function() {
    var self = this, write = this.output.write, decoder = new StringDecoder("utf8");
    function stringify(data) {
      return caret(data.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t")).replace(/[^ -~]/g, function(ch) {
        if (ch.charCodeAt(0) > 255)
          return ch;
        ch = ch.charCodeAt(0).toString(16);
        if (ch.length > 2) {
          if (ch.length < 4)
            ch = "0" + ch;
          return "\\u" + ch;
        }
        if (ch.length < 2)
          ch = "0" + ch;
        return "\\x" + ch;
      });
    }
    function caret(data) {
      return data.replace(/[\0\x80\x1b-\x1f\x7f\x01-\x1a]/g, function(ch) {
        switch (ch) {
          case "\x00":
          case "\x80":
            ch = "@";
            break;
          case "\x1B":
            ch = "[";
            break;
          case "\x1C":
            ch = "\\";
            break;
          case "\x1D":
            ch = "]";
            break;
          case "\x1E":
            ch = "^";
            break;
          case "\x1F":
            ch = "_";
            break;
          case "\x7F":
            ch = "?";
            break;
          default:
            ch = ch.charCodeAt(0);
            if (ch >= 1 && ch <= 26) {
              ch = String.fromCharCode(ch + 64);
            } else {
              return String.fromCharCode(ch);
            }
            break;
        }
        return "^" + ch;
      });
    }
    this.input.on("data", function(data) {
      self._log("IN", stringify(decoder.write(data)));
    });
    this.output.write = function(data) {
      self._log("OUT", stringify(data));
      return write.apply(this, arguments);
    };
  };
  Program.prototype.setupTput = function() {
    if (this._tputSetup)
      return;
    this._tputSetup = true;
    var self = this, options = this.options, write = this._write.bind(this);
    var tput = this.tput = new Tput({
      terminal: this.terminal,
      padding: options.padding,
      extended: options.extended,
      printf: options.printf,
      termcap: options.termcap,
      forceUnicode: options.forceUnicode
    });
    if (tput.error) {
      nextTick(function() {
        self.emit("warning", tput.error.message);
      });
    }
    if (tput.padding) {
      nextTick(function() {
        self.emit("warning", "Terminfo padding has been enabled.");
      });
    }
    this.put = function() {
      var args = slice.call(arguments), cap = args.shift();
      if (tput[cap]) {
        return this._write(tput[cap].apply(tput, args));
      }
    };
    Object.keys(tput).forEach(function(key) {
      if (self[key] == null) {
        self[key] = tput[key];
      }
      if (typeof tput[key] !== "function") {
        self.put[key] = tput[key];
        return;
      }
      if (tput.padding) {
        self.put[key] = function() {
          return tput._print(tput[key].apply(tput, arguments), write);
        };
      } else {
        self.put[key] = function() {
          return self._write(tput[key].apply(tput, arguments));
        };
      }
    });
  };
  Program.prototype.__defineGetter__("terminal", function() {
    return this._terminal;
  });
  Program.prototype.__defineSetter__("terminal", function(terminal) {
    this.setTerminal(terminal);
    return this.terminal;
  });
  Program.prototype.setTerminal = function(terminal) {
    this._terminal = terminal.toLowerCase();
    delete this._tputSetup;
    this.setupTput();
  };
  Program.prototype.has = function(name) {
    return this.tput ? this.tput.has(name) : false;
  };
  Program.prototype.term = function(is) {
    return this.terminal.indexOf(is) === 0;
  };
  Program.prototype.listen = function() {
    var self = this;
    if (!this.input._blessedInput) {
      this.input._blessedInput = 1;
      this._listenInput();
    } else {
      this.input._blessedInput++;
    }
    this.on("newListener", this._newHandler = function fn(type) {
      if (type === "keypress" || type === "mouse") {
        self.removeListener("newListener", fn);
        if (self.input.setRawMode && !self.input.isRaw) {
          self.input.setRawMode(true);
          self.input.resume();
        }
      }
    });
    this.on("newListener", function fn(type) {
      if (type === "mouse") {
        self.removeListener("newListener", fn);
        self.bindMouse();
      }
    });
    if (!this.output._blessedOutput) {
      this.output._blessedOutput = 1;
      this._listenOutput();
    } else {
      this.output._blessedOutput++;
    }
  };
  Program.prototype._listenInput = function() {
    var keys = require_keys(), self = this;
    this.input.on("keypress", this.input._keypressHandler = function(ch, key) {
      key = key || { ch };
      if (key.name === "undefined" && (key.code === "[M" || key.code === "[I" || key.code === "[O")) {
        return;
      }
      if (key.name === "undefined") {
        return;
      }
      if (key.name === "enter" && key.sequence === `
`) {
        key.name = "linefeed";
      }
      if (key.name === "return" && key.sequence === "\r") {
        self.input.emit("keypress", ch, merge({}, key, { name: "enter" }));
      }
      var name = (key.ctrl ? "C-" : "") + (key.meta ? "M-" : "") + (key.shift && key.name ? "S-" : "") + (key.name || ch);
      key.full = name;
      Program.instances.forEach(function(program) {
        if (program.input !== self.input)
          return;
        program.emit("keypress", ch, key);
        program.emit("key " + name, ch, key);
      });
    });
    this.input.on("data", this.input._dataHandler = function(data) {
      Program.instances.forEach(function(program) {
        if (program.input !== self.input)
          return;
        program.emit("data", data);
      });
    });
    keys.emitKeypressEvents(this.input);
  };
  Program.prototype._listenOutput = function() {
    var self = this;
    if (!this.output.isTTY) {
      nextTick(function() {
        self.emit("warning", "Output is not a TTY");
      });
    }
    function resize() {
      Program.instances.forEach(function(program) {
        if (program.output !== self.output)
          return;
        program.cols = program.output.columns;
        program.rows = program.output.rows;
        program.emit("resize");
      });
    }
    this.output.on("resize", this.output._resizeHandler = function() {
      Program.instances.forEach(function(program) {
        if (program.output !== self.output)
          return;
        if (!program.options.resizeTimeout) {
          return resize();
        }
        if (program._resizeTimer) {
          clearTimeout(program._resizeTimer);
          delete program._resizeTimer;
        }
        var time = typeof program.options.resizeTimeout === "number" ? program.options.resizeTimeout : 300;
        program._resizeTimer = setTimeout(resize, time);
      });
    });
  };
  Program.prototype.destroy = function() {
    var index = Program.instances.indexOf(this);
    if (~index) {
      Program.instances.splice(index, 1);
      Program.total--;
      this.flush();
      this._exiting = true;
      Program.global = Program.instances[0];
      if (Program.total === 0) {
        Program.global = null;
        process.removeListener("exit", Program._exitHandler);
        delete Program._exitHandler;
        delete Program._bound;
      }
      this.input._blessedInput--;
      this.output._blessedOutput--;
      if (this.input._blessedInput === 0) {
        this.input.removeListener("keypress", this.input._keypressHandler);
        this.input.removeListener("data", this.input._dataHandler);
        delete this.input._keypressHandler;
        delete this.input._dataHandler;
        if (this.input.setRawMode) {
          if (this.input.isRaw) {
            this.input.setRawMode(false);
          }
          if (!this.input.destroyed) {
            this.input.pause();
          }
        }
      }
      if (this.output._blessedOutput === 0) {
        this.output.removeListener("resize", this.output._resizeHandler);
        delete this.output._resizeHandler;
      }
      this.removeListener("newListener", this._newHandler);
      delete this._newHandler;
      this.destroyed = true;
      this.emit("destroy");
    }
  };
  Program.prototype.key = function(key, listener) {
    if (typeof key === "string")
      key = key.split(/\s*,\s*/);
    key.forEach(function(key2) {
      return this.on("key " + key2, listener);
    }, this);
  };
  Program.prototype.onceKey = function(key, listener) {
    if (typeof key === "string")
      key = key.split(/\s*,\s*/);
    key.forEach(function(key2) {
      return this.once("key " + key2, listener);
    }, this);
  };
  Program.prototype.unkey = Program.prototype.removeKey = function(key, listener) {
    if (typeof key === "string")
      key = key.split(/\s*,\s*/);
    key.forEach(function(key2) {
      return this.removeListener("key " + key2, listener);
    }, this);
  };
  Program.prototype.bindMouse = function() {
    if (this._boundMouse)
      return;
    this._boundMouse = true;
    var decoder = new StringDecoder("utf8"), self = this;
    this.on("data", function(data) {
      var text = decoder.write(data);
      if (!text)
        return;
      self._bindMouse(text, data);
    });
  };
  Program.prototype._bindMouse = function(s, buf) {
    var self = this, key, parts, b, x, y, mod, params, down, page, button;
    key = {
      name: undefined,
      ctrl: false,
      meta: false,
      shift: false
    };
    if (Buffer.isBuffer(s)) {
      if (s[0] > 127 && s[1] === undefined) {
        s[0] -= 128;
        s = "\x1B" + s.toString("utf-8");
      } else {
        s = s.toString("utf-8");
      }
    }
    var bx = s.charCodeAt(4);
    var by = s.charCodeAt(5);
    if (buf[0] === 27 && buf[1] === 91 && buf[2] === 77 && (this.isVTE || bx >= 65533 || by >= 65533 || bx > 0 && bx < 32 || by > 0 && by < 32 || buf[4] > 223 && buf[4] < 248 && buf.length === 6 || buf[5] > 223 && buf[5] < 248 && buf.length === 6)) {
      b = buf[3];
      x = buf[4];
      y = buf[5];
      if (x < 32)
        x += 255;
      if (y < 32)
        y += 255;
      s = "\x1B[M" + String.fromCharCode(b) + String.fromCharCode(x) + String.fromCharCode(y);
    }
    if (parts = /^\x1b\[M([\x00\u0020-\uffff]{3})/.exec(s)) {
      b = parts[1].charCodeAt(0);
      x = parts[1].charCodeAt(1);
      y = parts[1].charCodeAt(2);
      key.name = "mouse";
      key.type = "X10";
      key.raw = [b, x, y, parts[0]];
      key.buf = buf;
      key.x = x - 32;
      key.y = y - 32;
      if (this.zero)
        key.x--, key.y--;
      if (x === 0)
        key.x = 255;
      if (y === 0)
        key.y = 255;
      mod = b >> 2;
      key.shift = !!(mod & 1);
      key.meta = !!(mod >> 1 & 1);
      key.ctrl = !!(mod >> 2 & 1);
      b -= 32;
      if (b >> 6 & 1) {
        key.action = b & 1 ? "wheeldown" : "wheelup";
        key.button = "middle";
      } else if (b === 3) {
        key.action = "mouseup";
        key.button = this._lastButton || "unknown";
        delete this._lastButton;
      } else {
        key.action = "mousedown";
        button = b & 3;
        key.button = button === 0 ? "left" : button === 1 ? "middle" : button === 2 ? "right" : "unknown";
        this._lastButton = key.button;
      }
      if (b === 35 || b === 39 || b === 51 || b === 43 || this.isVTE && (b === 32 || b === 36 || b === 48 || b === 40)) {
        delete key.button;
        key.action = "mousemove";
      }
      self.emit("mouse", key);
      return;
    }
    if (parts = /^\x1b\[(\d+;\d+;\d+)M/.exec(s)) {
      params = parts[1].split(";");
      b = +params[0];
      x = +params[1];
      y = +params[2];
      key.name = "mouse";
      key.type = "urxvt";
      key.raw = [b, x, y, parts[0]];
      key.buf = buf;
      key.x = x;
      key.y = y;
      if (this.zero)
        key.x--, key.y--;
      mod = b >> 2;
      key.shift = !!(mod & 1);
      key.meta = !!(mod >> 1 & 1);
      key.ctrl = !!(mod >> 2 & 1);
      if (b === 128 || b === 129) {
        b = 67;
      }
      b -= 32;
      if (b >> 6 & 1) {
        key.action = b & 1 ? "wheeldown" : "wheelup";
        key.button = "middle";
      } else if (b === 3) {
        key.action = "mouseup";
        key.button = this._lastButton || "unknown";
        delete this._lastButton;
      } else {
        key.action = "mousedown";
        button = b & 3;
        key.button = button === 0 ? "left" : button === 1 ? "middle" : button === 2 ? "right" : "unknown";
        this._lastButton = key.button;
      }
      if (b === 35 || b === 39 || b === 51 || b === 43 || this.isVTE && (b === 32 || b === 36 || b === 48 || b === 40)) {
        delete key.button;
        key.action = "mousemove";
      }
      self.emit("mouse", key);
      return;
    }
    if (parts = /^\x1b\[<(\d+;\d+;\d+)([mM])/.exec(s)) {
      down = parts[2] === "M";
      params = parts[1].split(";");
      b = +params[0];
      x = +params[1];
      y = +params[2];
      key.name = "mouse";
      key.type = "sgr";
      key.raw = [b, x, y, parts[0]];
      key.buf = buf;
      key.x = x;
      key.y = y;
      if (this.zero)
        key.x--, key.y--;
      mod = b >> 2;
      key.shift = !!(mod & 1);
      key.meta = !!(mod >> 1 & 1);
      key.ctrl = !!(mod >> 2 & 1);
      if (b >> 6 & 1) {
        key.action = b & 1 ? "wheeldown" : "wheelup";
        key.button = "middle";
      } else {
        key.action = down ? "mousedown" : "mouseup";
        button = b & 3;
        key.button = button === 0 ? "left" : button === 1 ? "middle" : button === 2 ? "right" : "unknown";
      }
      if (b === 35 || b === 39 || b === 51 || b === 43 || this.isVTE && (b === 32 || b === 36 || b === 48 || b === 40)) {
        delete key.button;
        key.action = "mousemove";
      }
      self.emit("mouse", key);
      return;
    }
    if (parts = /^\x1b\[<(\d+;\d+;\d+;\d+)&w/.exec(s)) {
      params = parts[1].split(";");
      b = +params[0];
      x = +params[1];
      y = +params[2];
      page = +params[3];
      key.name = "mouse";
      key.type = "dec";
      key.raw = [b, x, y, parts[0]];
      key.buf = buf;
      key.x = x;
      key.y = y;
      key.page = page;
      if (this.zero)
        key.x--, key.y--;
      key.action = b === 3 ? "mouseup" : "mousedown";
      key.button = b === 2 ? "left" : b === 4 ? "middle" : b === 6 ? "right" : "unknown";
      self.emit("mouse", key);
      return;
    }
    if (parts = /^\x1b\[24([0135])~\[(\d+),(\d+)\]\r/.exec(s)) {
      b = +parts[1];
      x = +parts[2];
      y = +parts[3];
      key.name = "mouse";
      key.type = "vt300";
      key.raw = [b, x, y, parts[0]];
      key.buf = buf;
      key.x = x;
      key.y = y;
      if (this.zero)
        key.x--, key.y--;
      key.action = "mousedown";
      key.button = b === 1 ? "left" : b === 2 ? "middle" : b === 5 ? "right" : "unknown";
      self.emit("mouse", key);
      return;
    }
    if (parts = /^\x1b\[(O|I)/.exec(s)) {
      key.action = parts[1] === "I" ? "focus" : "blur";
      self.emit("mouse", key);
      self.emit(key.action);
      return;
    }
  };
  Program.prototype.enableGpm = function() {
    var self = this;
    var gpmclient = require_gpmclient();
    if (this.gpm)
      return;
    this.gpm = gpmclient();
    this.gpm.on("btndown", function(btn, modifier, x, y) {
      x--, y--;
      var key = {
        name: "mouse",
        type: "GPM",
        action: "mousedown",
        button: self.gpm.ButtonName(btn),
        raw: [btn, modifier, x, y],
        x,
        y,
        shift: self.gpm.hasShiftKey(modifier),
        meta: self.gpm.hasMetaKey(modifier),
        ctrl: self.gpm.hasCtrlKey(modifier)
      };
      self.emit("mouse", key);
    });
    this.gpm.on("btnup", function(btn, modifier, x, y) {
      x--, y--;
      var key = {
        name: "mouse",
        type: "GPM",
        action: "mouseup",
        button: self.gpm.ButtonName(btn),
        raw: [btn, modifier, x, y],
        x,
        y,
        shift: self.gpm.hasShiftKey(modifier),
        meta: self.gpm.hasMetaKey(modifier),
        ctrl: self.gpm.hasCtrlKey(modifier)
      };
      self.emit("mouse", key);
    });
    this.gpm.on("move", function(btn, modifier, x, y) {
      x--, y--;
      var key = {
        name: "mouse",
        type: "GPM",
        action: "mousemove",
        button: self.gpm.ButtonName(btn),
        raw: [btn, modifier, x, y],
        x,
        y,
        shift: self.gpm.hasShiftKey(modifier),
        meta: self.gpm.hasMetaKey(modifier),
        ctrl: self.gpm.hasCtrlKey(modifier)
      };
      self.emit("mouse", key);
    });
    this.gpm.on("drag", function(btn, modifier, x, y) {
      x--, y--;
      var key = {
        name: "mouse",
        type: "GPM",
        action: "mousemove",
        button: self.gpm.ButtonName(btn),
        raw: [btn, modifier, x, y],
        x,
        y,
        shift: self.gpm.hasShiftKey(modifier),
        meta: self.gpm.hasMetaKey(modifier),
        ctrl: self.gpm.hasCtrlKey(modifier)
      };
      self.emit("mouse", key);
    });
    this.gpm.on("mousewheel", function(btn, modifier, x, y, dx, dy) {
      var key = {
        name: "mouse",
        type: "GPM",
        action: dy > 0 ? "wheelup" : "wheeldown",
        button: self.gpm.ButtonName(btn),
        raw: [btn, modifier, x, y, dx, dy],
        x,
        y,
        shift: self.gpm.hasShiftKey(modifier),
        meta: self.gpm.hasMetaKey(modifier),
        ctrl: self.gpm.hasCtrlKey(modifier)
      };
      self.emit("mouse", key);
    });
  };
  Program.prototype.disableGpm = function() {
    if (this.gpm) {
      this.gpm.stop();
      delete this.gpm;
    }
  };
  Program.prototype.bindResponse = function() {
    if (this._boundResponse)
      return;
    this._boundResponse = true;
    var decoder = new StringDecoder("utf8"), self = this;
    this.on("data", function(data) {
      data = decoder.write(data);
      if (!data)
        return;
      self._bindResponse(data);
    });
  };
  Program.prototype._bindResponse = function(s) {
    var out = {}, parts;
    if (Buffer.isBuffer(s)) {
      if (s[0] > 127 && s[1] === undefined) {
        s[0] -= 128;
        s = "\x1B" + s.toString("utf-8");
      } else {
        s = s.toString("utf-8");
      }
    }
    if (parts = /^\x1b\[(\?|>)(\d*(?:;\d*)*)c/.exec(s)) {
      parts = parts[2].split(";").map(function(ch) {
        return +ch || 0;
      });
      out.event = "device-attributes";
      out.code = "DA";
      if (parts[1] === "?") {
        out.type = "primary-attribute";
        if (parts[0] === 1 && parts[2] === 2) {
          out.term = "vt100";
          out.advancedVideo = true;
        } else if (parts[0] === 1 && parts[2] === 0) {
          out.term = "vt101";
        } else if (parts[0] === 6) {
          out.term = "vt102";
        } else if (parts[0] === 60 && parts[1] === 1 && parts[2] === 2 && parts[3] === 6 && parts[4] === 8 && parts[5] === 9 && parts[6] === 15) {
          out.term = "vt220";
        } else {
          parts.forEach(function(attr) {
            switch (attr) {
              case 1:
                out.cols132 = true;
                break;
              case 2:
                out.printer = true;
                break;
              case 6:
                out.selectiveErase = true;
                break;
              case 8:
                out.userDefinedKeys = true;
                break;
              case 9:
                out.nationalReplacementCharsets = true;
                break;
              case 15:
                out.technicalCharacters = true;
                break;
              case 18:
                out.userWindows = true;
                break;
              case 21:
                out.horizontalScrolling = true;
                break;
              case 22:
                out.ansiColor = true;
                break;
              case 29:
                out.ansiTextLocator = true;
                break;
            }
          });
        }
      } else {
        out.type = "secondary-attribute";
        switch (parts[0]) {
          case 0:
            out.term = "vt100";
            break;
          case 1:
            out.term = "vt220";
            break;
          case 2:
            out.term = "vt240";
            break;
          case 18:
            out.term = "vt330";
            break;
          case 19:
            out.term = "vt340";
            break;
          case 24:
            out.term = "vt320";
            break;
          case 41:
            out.term = "vt420";
            break;
          case 61:
            out.term = "vt510";
            break;
          case 64:
            out.term = "vt520";
            break;
          case 65:
            out.term = "vt525";
            break;
        }
        out.firmwareVersion = parts[1];
        out.romCartridgeRegistrationNumber = parts[2];
      }
      out.deviceAttributes = out;
      this.emit("response", out);
      this.emit("response " + out.event, out);
      return;
    }
    if (parts = /^\x1b\[(\?)?(\d+)(?:;(\d+);(\d+);(\d+))?n/.exec(s)) {
      out.event = "device-status";
      out.code = "DSR";
      if (!parts[1] && parts[2] === "0" && !parts[3]) {
        out.type = "device-status";
        out.status = "OK";
        out.deviceStatus = out.status;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts[1] && (parts[2] === "10" || parts[2] === "11") && !parts[3]) {
        out.type = "printer-status";
        out.status = parts[2] === "10" ? "ready" : "not ready";
        out.printerStatus = out.status;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts[1] && (parts[2] === "20" || parts[2] === "21") && !parts[3]) {
        out.type = "udk-status";
        out.status = parts[2] === "20" ? "unlocked" : "locked";
        out.UDKStatus = out.status;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts[1] && parts[2] === "27" && parts[3] === "1" && parts[4] === "0" && parts[5] === "0") {
        out.type = "keyboard-status";
        out.status = "OK";
        out.keyboardStatus = out.status;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts[1] && (parts[2] === "53" || parts[2] === "50") && !parts[3]) {
        out.type = "locator-status";
        out.status = parts[2] === "53" ? "available" : "unavailable";
        out.locator = out.status;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      out.type = "error";
      out.text = "Unhandled: " + JSON.stringify(parts);
      out.error = out.text;
      this.emit("response", out);
      this.emit("response " + out.event, out);
      return;
    }
    if (parts = /^\x1b\[(\?)?(\d+);(\d+)R/.exec(s)) {
      out.event = "device-status";
      out.code = "DSR";
      out.type = "cursor-status";
      out.status = {
        x: +parts[3],
        y: +parts[2],
        page: !parts[1] ? undefined : 0
      };
      out.x = out.status.x;
      out.y = out.status.y;
      out.page = out.status.page;
      out.cursor = out.status;
      this.emit("response", out);
      this.emit("response " + out.event, out);
      return;
    }
    if (parts = /^\x1b\[(\d+)(?:;(\d+);(\d+))?t/.exec(s)) {
      out.event = "window-manipulation";
      out.code = "";
      if ((parts[1] === "1" || parts[1] === "2") && !parts[2]) {
        out.type = "window-state";
        out.state = parts[1] === "1" ? "non-iconified" : "iconified";
        out.windowState = out.state;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts[1] === "3" && parts[2]) {
        out.type = "window-position";
        out.position = {
          x: +parts[2],
          y: +parts[3]
        };
        out.x = out.position.x;
        out.y = out.position.y;
        out.windowPosition = out.position;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts[1] === "4" && parts[2]) {
        out.type = "window-size-pixels";
        out.size = {
          height: +parts[2],
          width: +parts[3]
        };
        out.height = out.size.height;
        out.width = out.size.width;
        out.windowSizePixels = out.size;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts[1] === "8" && parts[2]) {
        out.type = "textarea-size";
        out.size = {
          height: +parts[2],
          width: +parts[3]
        };
        out.height = out.size.height;
        out.width = out.size.width;
        out.textAreaSizeCharacters = out.size;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts[1] === "9" && parts[2]) {
        out.type = "screen-size";
        out.size = {
          height: +parts[2],
          width: +parts[3]
        };
        out.height = out.size.height;
        out.width = out.size.width;
        out.screenSizeCharacters = out.size;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      out.type = "error";
      out.text = "Unhandled: " + JSON.stringify(parts);
      out.error = out.text;
      this.emit("response", out);
      this.emit("response " + out.event, out);
      return;
    }
    if (parts = /^\x1b\](l|L)([^\x07\x1b]*)$/.exec(s)) {
      parts[2] = "rxvt";
      s = "\x1B]" + parts[1] + parts[2] + "\x1B\\";
    }
    if (parts = /^\x1b\](l|L)([^\x07\x1b]*)(?:\x07|\x1b\\)/.exec(s)) {
      out.event = "window-manipulation";
      out.code = "";
      if (parts[1] === "L") {
        out.type = "window-icon-label";
        out.text = parts[2];
        out.windowIconLabel = out.text;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts[1] === "l") {
        out.type = "window-title";
        out.text = parts[2];
        out.windowTitle = out.text;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      out.type = "error";
      out.text = "Unhandled: " + JSON.stringify(parts);
      out.error = out.text;
      this.emit("response", out);
      this.emit("response " + out.event, out);
      return;
    }
    if (parts = /^\x1b\[(\d+(?:;\d+){4})&w/.exec(s)) {
      parts = parts[1].split(";").map(function(ch) {
        return +ch;
      });
      out.event = "locator-position";
      out.code = "DECRQLP";
      switch (parts[0]) {
        case 0:
          out.status = "locator-unavailable";
          break;
        case 1:
          out.status = "request";
          break;
        case 2:
          out.status = "left-button-down";
          break;
        case 3:
          out.status = "left-button-up";
          break;
        case 4:
          out.status = "middle-button-down";
          break;
        case 5:
          out.status = "middle-button-up";
          break;
        case 6:
          out.status = "right-button-down";
          break;
        case 7:
          out.status = "right-button-up";
          break;
        case 8:
          out.status = "m4-button-down";
          break;
        case 9:
          out.status = "m4-button-up";
          break;
        case 10:
          out.status = "locator-outside";
          break;
      }
      out.mask = parts[1];
      out.row = parts[2];
      out.col = parts[3];
      out.page = parts[4];
      out.locatorPosition = out;
      this.emit("response", out);
      this.emit("response " + out.event, out);
      return;
    }
    if (parts = /^\x1b\](\d+);([^\x07\x1b]+)(?:\x07|\x1b\\)/.exec(s)) {
      out.event = "text-params";
      out.code = "Set Text Parameters";
      out.ps = +s[1];
      out.pt = s[2];
      this.emit("response", out);
      this.emit("response " + out.event, out);
    }
  };
  Program.prototype.response = function(name, text, callback, noBypass) {
    var self = this;
    if (arguments.length === 2) {
      callback = text;
      text = name;
      name = null;
    }
    if (!callback) {
      callback = function() {};
    }
    this.bindResponse();
    name = name ? "response " + name : "response";
    var onresponse;
    this.once(name, onresponse = function(event) {
      if (timeout)
        clearTimeout(timeout);
      if (event.type === "error") {
        return callback(new Error(event.event + ": " + event.text));
      }
      return callback(null, event);
    });
    var timeout = setTimeout(function() {
      self.removeListener(name, onresponse);
      return callback(new Error("Timeout."));
    }, 2000);
    return noBypass ? this._write(text) : this._twrite(text);
  };
  Program.prototype._owrite = Program.prototype.write = function(text) {
    if (!this.output.writable)
      return;
    return this.output.write(text);
  };
  Program.prototype._buffer = function(text) {
    if (this._exiting) {
      this.flush();
      this._owrite(text);
      return;
    }
    if (this._buf) {
      this._buf += text;
      return;
    }
    this._buf = text;
    nextTick(this._flush);
    return true;
  };
  Program.prototype.flush = function() {
    if (!this._buf)
      return;
    this._owrite(this._buf);
    this._buf = "";
  };
  Program.prototype._write = function(text) {
    if (this.ret)
      return text;
    if (this.useBuffer) {
      return this._buffer(text);
    }
    return this._owrite(text);
  };
  Program.prototype._twrite = function(data) {
    var self = this, iterations = 0, timer;
    if (this.tmux) {
      data = data.replace(/\x1b\\/g, "\x07");
      data = "\x1BPtmux;\x1B" + data + "\x1B\\";
      if (this.output.bytesWritten === 0) {
        timer = setInterval(function() {
          if (self.output.bytesWritten > 0 || ++iterations === 50) {
            clearInterval(timer);
            self.flush();
            self._owrite(data);
          }
        }, 100);
        return true;
      }
      this.flush();
      return this._owrite(data);
    }
    return this._write(data);
  };
  Program.prototype.echo = Program.prototype.print = function(text, attr) {
    return attr ? this._write(this.text(text, attr)) : this._write(text);
  };
  Program.prototype._ncoords = function() {
    if (this.x < 0)
      this.x = 0;
    else if (this.x >= this.cols)
      this.x = this.cols - 1;
    if (this.y < 0)
      this.y = 0;
    else if (this.y >= this.rows)
      this.y = this.rows - 1;
  };
  Program.prototype.setx = function(x) {
    return this.cursorCharAbsolute(x);
  };
  Program.prototype.sety = function(y) {
    return this.linePosAbsolute(y);
  };
  Program.prototype.move = function(x, y) {
    return this.cursorPos(y, x);
  };
  Program.prototype.omove = function(x, y) {
    if (!this.zero) {
      x = (x || 1) - 1;
      y = (y || 1) - 1;
    } else {
      x = x || 0;
      y = y || 0;
    }
    if (y === this.y && x === this.x) {
      return;
    }
    if (y === this.y) {
      if (x > this.x) {
        this.cuf(x - this.x);
      } else if (x < this.x) {
        this.cub(this.x - x);
      }
    } else if (x === this.x) {
      if (y > this.y) {
        this.cud(y - this.y);
      } else if (y < this.y) {
        this.cuu(this.y - y);
      }
    } else {
      if (!this.zero)
        x++, y++;
      this.cup(y, x);
    }
  };
  Program.prototype.rsetx = function(x) {
    if (!x)
      return;
    return x > 0 ? this.forward(x) : this.back(-x);
  };
  Program.prototype.rsety = function(y) {
    if (!y)
      return;
    return y > 0 ? this.up(y) : this.down(-y);
  };
  Program.prototype.rmove = function(x, y) {
    this.rsetx(x);
    this.rsety(y);
  };
  Program.prototype.simpleInsert = function(ch, i, attr) {
    return this._write(this.repeat(ch, i), attr);
  };
  Program.prototype.repeat = function(ch, i) {
    if (!i || i < 0)
      i = 0;
    return Array(i + 1).join(ch);
  };
  Program.prototype.__defineGetter__("title", function() {
    return this._title;
  });
  Program.prototype.__defineSetter__("title", function(title) {
    this.setTitle(title);
    return this._title;
  });
  Program.prototype.copyToClipboard = function(text) {
    if (this.isiTerm2) {
      this._twrite("\x1B]50;CopyToCliboard=" + text + "\x07");
      return true;
    }
    return false;
  };
  Program.prototype.cursorShape = function(shape, blink) {
    if (this.isiTerm2) {
      switch (shape) {
        case "block":
          if (!blink) {
            this._twrite("\x1B]50;CursorShape=0;BlinkingCursorEnabled=0\x07");
          } else {
            this._twrite("\x1B]50;CursorShape=0;BlinkingCursorEnabled=1\x07");
          }
          break;
        case "underline":
          if (!blink) {} else {}
          break;
        case "line":
          if (!blink) {
            this._twrite("\x1B]50;CursorShape=1;BlinkingCursorEnabled=0\x07");
          } else {
            this._twrite("\x1B]50;CursorShape=1;BlinkingCursorEnabled=1\x07");
          }
          break;
      }
      return true;
    } else if (this.term("xterm") || this.term("screen")) {
      switch (shape) {
        case "block":
          if (!blink) {
            this._twrite("\x1B[0 q");
          } else {
            this._twrite("\x1B[1 q");
          }
          break;
        case "underline":
          if (!blink) {
            this._twrite("\x1B[2 q");
          } else {
            this._twrite("\x1B[3 q");
          }
          break;
        case "line":
          if (!blink) {
            this._twrite("\x1B[4 q");
          } else {
            this._twrite("\x1B[5 q");
          }
          break;
      }
      return true;
    }
    return false;
  };
  Program.prototype.cursorColor = function(color) {
    if (this.term("xterm") || this.term("rxvt") || this.term("screen")) {
      this._twrite("\x1B]12;" + color + "\x07");
      return true;
    }
    return false;
  };
  Program.prototype.cursorReset = Program.prototype.resetCursor = function() {
    if (this.term("xterm") || this.term("rxvt") || this.term("screen")) {
      this._twrite("\x1B[0 q");
      this._twrite("\x1B]112\x07");
      this._twrite("\x1B]12;white\x07");
      return true;
    }
    return false;
  };
  Program.prototype.getTextParams = function(param, callback) {
    return this.response("text-params", "\x1B]" + param + ";?\x07", function(err, data) {
      if (err)
        return callback(err);
      return callback(null, data.pt);
    });
  };
  Program.prototype.getCursorColor = function(callback) {
    return this.getTextParams(12, callback);
  };
  Program.prototype.nul = function() {
    return this._write("\x80");
  };
  Program.prototype.bel = Program.prototype.bell = function() {
    if (this.has("bel"))
      return this.put.bel();
    return this._write("\x07");
  };
  Program.prototype.vtab = function() {
    this.y++;
    this._ncoords();
    return this._write("\v");
  };
  Program.prototype.ff = Program.prototype.form = function() {
    if (this.has("ff"))
      return this.put.ff();
    return this._write("\f");
  };
  Program.prototype.kbs = Program.prototype.backspace = function() {
    this.x--;
    this._ncoords();
    if (this.has("kbs"))
      return this.put.kbs();
    return this._write("\b");
  };
  Program.prototype.ht = Program.prototype.tab = function() {
    this.x += 8;
    this._ncoords();
    if (this.has("ht"))
      return this.put.ht();
    return this._write("\t");
  };
  Program.prototype.shiftOut = function() {
    return this._write("\x0E");
  };
  Program.prototype.shiftIn = function() {
    return this._write("\x0F");
  };
  Program.prototype.cr = Program.prototype.return = function() {
    this.x = 0;
    if (this.has("cr"))
      return this.put.cr();
    return this._write("\r");
  };
  Program.prototype.nel = Program.prototype.newline = Program.prototype.feed = function() {
    if (this.tput && this.tput.bools.eat_newline_glitch && this.x >= this.cols) {
      return;
    }
    this.x = 0;
    this.y++;
    this._ncoords();
    if (this.has("nel"))
      return this.put.nel();
    return this._write(`
`);
  };
  Program.prototype.ind = Program.prototype.index = function() {
    this.y++;
    this._ncoords();
    if (this.tput)
      return this.put.ind();
    return this._write("\x1BD");
  };
  Program.prototype.ri = Program.prototype.reverse = Program.prototype.reverseIndex = function() {
    this.y--;
    this._ncoords();
    if (this.tput)
      return this.put.ri();
    return this._write("\x1BM");
  };
  Program.prototype.nextLine = function() {
    this.y++;
    this.x = 0;
    this._ncoords();
    if (this.has("nel"))
      return this.put.nel();
    return this._write("\x1BE");
  };
  Program.prototype.reset = function() {
    this.x = this.y = 0;
    if (this.has("rs1") || this.has("ris")) {
      return this.has("rs1") ? this.put.rs1() : this.put.ris();
    }
    return this._write("\x1Bc");
  };
  Program.prototype.tabSet = function() {
    if (this.tput)
      return this.put.hts();
    return this._write("\x1BH");
  };
  Program.prototype.sc = Program.prototype.saveCursor = function(key) {
    if (key)
      return this.lsaveCursor(key);
    this.savedX = this.x || 0;
    this.savedY = this.y || 0;
    if (this.tput)
      return this.put.sc();
    return this._write("\x1B7");
  };
  Program.prototype.rc = Program.prototype.restoreCursor = function(key, hide) {
    if (key)
      return this.lrestoreCursor(key, hide);
    this.x = this.savedX || 0;
    this.y = this.savedY || 0;
    if (this.tput)
      return this.put.rc();
    return this._write("\x1B8");
  };
  Program.prototype.lsaveCursor = function(key) {
    key = key || "local";
    this._saved = this._saved || {};
    this._saved[key] = this._saved[key] || {};
    this._saved[key].x = this.x;
    this._saved[key].y = this.y;
    this._saved[key].hidden = this.cursorHidden;
  };
  Program.prototype.lrestoreCursor = function(key, hide) {
    var pos;
    key = key || "local";
    if (!this._saved || !this._saved[key])
      return;
    pos = this._saved[key];
    this.cup(pos.y, pos.x);
    if (hide && pos.hidden !== this.cursorHidden) {
      if (pos.hidden) {
        this.hideCursor();
      } else {
        this.showCursor();
      }
    }
  };
  Program.prototype.lineHeight = function() {
    return this._write("\x1B#");
  };
  Program.prototype.charset = function(val, level) {
    level = level || 0;
    switch (level) {
      case 0:
        level = "(";
        break;
      case 1:
        level = ")";
        break;
      case 2:
        level = "*";
        break;
      case 3:
        level = "+";
        break;
    }
    var name = typeof val === "string" ? val.toLowerCase() : val;
    switch (name) {
      case "acs":
      case "scld":
        if (this.tput)
          return this.put.smacs();
        val = "0";
        break;
      case "uk":
        val = "A";
        break;
      case "us":
      case "usascii":
      case "ascii":
        if (this.tput)
          return this.put.rmacs();
        val = "B";
        break;
      case "dutch":
        val = "4";
        break;
      case "finnish":
        val = "C";
        val = "5";
        break;
      case "french":
        val = "R";
        break;
      case "frenchcanadian":
        val = "Q";
        break;
      case "german":
        val = "K";
        break;
      case "italian":
        val = "Y";
        break;
      case "norwegiandanish":
        val = "E";
        val = "6";
        break;
      case "spanish":
        val = "Z";
        break;
      case "swedish":
        val = "H";
        val = "7";
        break;
      case "swiss":
        val = "=";
        break;
      case "isolatin":
        val = "/A";
        break;
      default:
        if (this.tput)
          return this.put.rmacs();
        val = "B";
        break;
    }
    return this._write("\x1B(" + val);
  };
  Program.prototype.enter_alt_charset_mode = Program.prototype.as = Program.prototype.smacs = function() {
    return this.charset("acs");
  };
  Program.prototype.exit_alt_charset_mode = Program.prototype.ae = Program.prototype.rmacs = function() {
    return this.charset("ascii");
  };
  Program.prototype.setG = function(val) {
    switch (val) {
      case 1:
        val = "~";
        break;
      case 2:
        val = "n";
        val = "}";
        val = "N";
        break;
      case 3:
        val = "o";
        val = "|";
        val = "O";
        break;
    }
    return this._write("\x1B" + val);
  };
  Program.prototype.setTitle = function(title) {
    this._title = title;
    return this._twrite("\x1B]0;" + title + "\x07");
  };
  Program.prototype.resetColors = function(param) {
    if (this.has("Cr")) {
      return this.put.Cr(param);
    }
    return this._twrite("\x1B]112\x07");
  };
  Program.prototype.dynamicColors = function(param) {
    if (this.has("Cs")) {
      return this.put.Cs(param);
    }
    return this._twrite("\x1B]12;" + param + "\x07");
  };
  Program.prototype.selData = function(a, b) {
    if (this.has("Ms")) {
      return this.put.Ms(a, b);
    }
    return this._twrite("\x1B]52;" + a + ";" + b + "\x07");
  };
  Program.prototype.cuu = Program.prototype.up = Program.prototype.cursorUp = function(param) {
    this.y -= param || 1;
    this._ncoords();
    if (this.tput) {
      if (!this.tput.strings.parm_up_cursor) {
        return this._write(this.repeat(this.tput.cuu1(), param));
      }
      return this.put.cuu(param);
    }
    return this._write("\x1B[" + (param || "") + "A");
  };
  Program.prototype.cud = Program.prototype.down = Program.prototype.cursorDown = function(param) {
    this.y += param || 1;
    this._ncoords();
    if (this.tput) {
      if (!this.tput.strings.parm_down_cursor) {
        return this._write(this.repeat(this.tput.cud1(), param));
      }
      return this.put.cud(param);
    }
    return this._write("\x1B[" + (param || "") + "B");
  };
  Program.prototype.cuf = Program.prototype.right = Program.prototype.forward = Program.prototype.cursorForward = function(param) {
    this.x += param || 1;
    this._ncoords();
    if (this.tput) {
      if (!this.tput.strings.parm_right_cursor) {
        return this._write(this.repeat(this.tput.cuf1(), param));
      }
      return this.put.cuf(param);
    }
    return this._write("\x1B[" + (param || "") + "C");
  };
  Program.prototype.cub = Program.prototype.left = Program.prototype.back = Program.prototype.cursorBackward = function(param) {
    this.x -= param || 1;
    this._ncoords();
    if (this.tput) {
      if (!this.tput.strings.parm_left_cursor) {
        return this._write(this.repeat(this.tput.cub1(), param));
      }
      return this.put.cub(param);
    }
    return this._write("\x1B[" + (param || "") + "D");
  };
  Program.prototype.cup = Program.prototype.pos = Program.prototype.cursorPos = function(row, col) {
    if (!this.zero) {
      row = (row || 1) - 1;
      col = (col || 1) - 1;
    } else {
      row = row || 0;
      col = col || 0;
    }
    this.x = col;
    this.y = row;
    this._ncoords();
    if (this.tput)
      return this.put.cup(row, col);
    return this._write("\x1B[" + (row + 1) + ";" + (col + 1) + "H");
  };
  Program.prototype.ed = Program.prototype.eraseInDisplay = function(param) {
    if (this.tput) {
      switch (param) {
        case "above":
          param = 1;
          break;
        case "all":
          param = 2;
          break;
        case "saved":
          param = 3;
          break;
        case "below":
        default:
          param = 0;
          break;
      }
      return this.put.ed(param);
    }
    switch (param) {
      case "above":
        return this._write("X1b[1J");
      case "all":
        return this._write("\x1B[2J");
      case "saved":
        return this._write("\x1B[3J");
      case "below":
      default:
        return this._write("\x1B[J");
    }
  };
  Program.prototype.clear = function() {
    this.x = 0;
    this.y = 0;
    if (this.tput)
      return this.put.clear();
    return this._write("\x1B[H\x1B[J");
  };
  Program.prototype.el = Program.prototype.eraseInLine = function(param) {
    if (this.tput) {
      switch (param) {
        case "left":
          param = 1;
          break;
        case "all":
          param = 2;
          break;
        case "right":
        default:
          param = 0;
          break;
      }
      return this.put.el(param);
    }
    switch (param) {
      case "left":
        return this._write("\x1B[1K");
      case "all":
        return this._write("\x1B[2K");
      case "right":
      default:
        return this._write("\x1B[K");
    }
  };
  Program.prototype.sgr = Program.prototype.attr = Program.prototype.charAttributes = function(param, val) {
    return this._write(this._attr(param, val));
  };
  Program.prototype.text = function(text, attr) {
    return this._attr(attr, true) + text + this._attr(attr, false);
  };
  Program.prototype._attr = function(param, val) {
    var self = this, parts, color, m;
    if (Array.isArray(param)) {
      parts = param;
      param = parts[0] || "normal";
    } else {
      param = param || "normal";
      parts = param.split(/\s*[,;]\s*/);
    }
    if (parts.length > 1) {
      var used = {}, out = [];
      parts.forEach(function(part) {
        part = self._attr(part, val).slice(2, -1);
        if (part === "")
          return;
        if (used[part])
          return;
        used[part] = true;
        out.push(part);
      });
      return "\x1B[" + out.join(";") + "m";
    }
    if (param.indexOf("no ") === 0) {
      param = param.substring(3);
      val = false;
    } else if (param.indexOf("!") === 0) {
      param = param.substring(1);
      val = false;
    }
    switch (param) {
      case "normal":
      case "default":
        if (val === false)
          return "";
        return "\x1B[m";
      case "bold":
        return val === false ? "\x1B[22m" : "\x1B[1m";
      case "ul":
      case "underline":
      case "underlined":
        return val === false ? "\x1B[24m" : "\x1B[4m";
      case "blink":
        return val === false ? "\x1B[25m" : "\x1B[5m";
      case "inverse":
        return val === false ? "\x1B[27m" : "\x1B[7m";
      case "invisible":
        return val === false ? "\x1B[28m" : "\x1B[8m";
      case "black fg":
        return val === false ? "\x1B[39m" : "\x1B[30m";
      case "red fg":
        return val === false ? "\x1B[39m" : "\x1B[31m";
      case "green fg":
        return val === false ? "\x1B[39m" : "\x1B[32m";
      case "yellow fg":
        return val === false ? "\x1B[39m" : "\x1B[33m";
      case "blue fg":
        return val === false ? "\x1B[39m" : "\x1B[34m";
      case "magenta fg":
        return val === false ? "\x1B[39m" : "\x1B[35m";
      case "cyan fg":
        return val === false ? "\x1B[39m" : "\x1B[36m";
      case "white fg":
      case "light grey fg":
      case "light gray fg":
      case "bright grey fg":
      case "bright gray fg":
        return val === false ? "\x1B[39m" : "\x1B[37m";
      case "default fg":
        if (val === false)
          return "";
        return "\x1B[39m";
      case "black bg":
        return val === false ? "\x1B[49m" : "\x1B[40m";
      case "red bg":
        return val === false ? "\x1B[49m" : "\x1B[41m";
      case "green bg":
        return val === false ? "\x1B[49m" : "\x1B[42m";
      case "yellow bg":
        return val === false ? "\x1B[49m" : "\x1B[43m";
      case "blue bg":
        return val === false ? "\x1B[49m" : "\x1B[44m";
      case "magenta bg":
        return val === false ? "\x1B[49m" : "\x1B[45m";
      case "cyan bg":
        return val === false ? "\x1B[49m" : "\x1B[46m";
      case "white bg":
      case "light grey bg":
      case "light gray bg":
      case "bright grey bg":
      case "bright gray bg":
        return val === false ? "\x1B[49m" : "\x1B[47m";
      case "default bg":
        if (val === false)
          return "";
        return "\x1B[49m";
      case "light black fg":
      case "bright black fg":
      case "grey fg":
      case "gray fg":
        return val === false ? "\x1B[39m" : "\x1B[90m";
      case "light red fg":
      case "bright red fg":
        return val === false ? "\x1B[39m" : "\x1B[91m";
      case "light green fg":
      case "bright green fg":
        return val === false ? "\x1B[39m" : "\x1B[92m";
      case "light yellow fg":
      case "bright yellow fg":
        return val === false ? "\x1B[39m" : "\x1B[93m";
      case "light blue fg":
      case "bright blue fg":
        return val === false ? "\x1B[39m" : "\x1B[94m";
      case "light magenta fg":
      case "bright magenta fg":
        return val === false ? "\x1B[39m" : "\x1B[95m";
      case "light cyan fg":
      case "bright cyan fg":
        return val === false ? "\x1B[39m" : "\x1B[96m";
      case "light white fg":
      case "bright white fg":
        return val === false ? "\x1B[39m" : "\x1B[97m";
      case "light black bg":
      case "bright black bg":
      case "grey bg":
      case "gray bg":
        return val === false ? "\x1B[49m" : "\x1B[100m";
      case "light red bg":
      case "bright red bg":
        return val === false ? "\x1B[49m" : "\x1B[101m";
      case "light green bg":
      case "bright green bg":
        return val === false ? "\x1B[49m" : "\x1B[102m";
      case "light yellow bg":
      case "bright yellow bg":
        return val === false ? "\x1B[49m" : "\x1B[103m";
      case "light blue bg":
      case "bright blue bg":
        return val === false ? "\x1B[49m" : "\x1B[104m";
      case "light magenta bg":
      case "bright magenta bg":
        return val === false ? "\x1B[49m" : "\x1B[105m";
      case "light cyan bg":
      case "bright cyan bg":
        return val === false ? "\x1B[49m" : "\x1B[106m";
      case "light white bg":
      case "bright white bg":
        return val === false ? "\x1B[49m" : "\x1B[107m";
      case "default fg bg":
        if (val === false)
          return "";
        return this.term("rxvt") ? "\x1B[100m" : "\x1B[39;49m";
      default:
        if (param[0] === "#") {
          param = param.replace(/#(?:[0-9a-f]{3}){1,2}/i, colors.match);
        }
        m = /^(-?\d+) (fg|bg)$/.exec(param);
        if (m) {
          color = +m[1];
          if (val === false || color === -1) {
            return this._attr("default " + m[2]);
          }
          color = colors.reduce(color, this.tput.colors);
          if (color < 16 || this.tput && this.tput.colors <= 16) {
            if (m[2] === "fg") {
              if (color < 8) {
                color += 30;
              } else if (color < 16) {
                color -= 8;
                color += 90;
              }
            } else if (m[2] === "bg") {
              if (color < 8) {
                color += 40;
              } else if (color < 16) {
                color -= 8;
                color += 100;
              }
            }
            return "\x1B[" + color + "m";
          }
          if (m[2] === "fg") {
            return "\x1B[38;5;" + color + "m";
          }
          if (m[2] === "bg") {
            return "\x1B[48;5;" + color + "m";
          }
        }
        if (/^[\d;]*$/.test(param)) {
          return "\x1B[" + param + "m";
        }
        return null;
    }
  };
  Program.prototype.fg = Program.prototype.setForeground = function(color, val) {
    color = color.split(/\s*[,;]\s*/).join(" fg, ") + " fg";
    return this.attr(color, val);
  };
  Program.prototype.bg = Program.prototype.setBackground = function(color, val) {
    color = color.split(/\s*[,;]\s*/).join(" bg, ") + " bg";
    return this.attr(color, val);
  };
  Program.prototype.dsr = Program.prototype.deviceStatus = function(param, callback, dec, noBypass) {
    if (dec) {
      return this.response("device-status", "\x1B[?" + (param || "0") + "n", callback, noBypass);
    }
    return this.response("device-status", "\x1B[" + (param || "0") + "n", callback, noBypass);
  };
  Program.prototype.getCursor = function(callback) {
    return this.deviceStatus(6, callback, false, true);
  };
  Program.prototype.saveReportedCursor = function(callback) {
    var self = this;
    if (this.tput.strings.user7 === "\x1B[6n" || this.term("screen")) {
      return this.getCursor(function(err, data) {
        if (data) {
          self._rx = data.status.x;
          self._ry = data.status.y;
        }
        if (!callback)
          return;
        return callback(err);
      });
    }
    if (!callback)
      return;
    return callback();
  };
  Program.prototype.restoreReportedCursor = function() {
    if (this._rx == null)
      return;
    return this.cup(this._ry, this._rx);
  };
  Program.prototype.ich = Program.prototype.insertChars = function(param) {
    this.x += param || 1;
    this._ncoords();
    if (this.tput)
      return this.put.ich(param);
    return this._write("\x1B[" + (param || 1) + "@");
  };
  Program.prototype.cnl = Program.prototype.cursorNextLine = function(param) {
    this.y += param || 1;
    this._ncoords();
    return this._write("\x1B[" + (param || "") + "E");
  };
  Program.prototype.cpl = Program.prototype.cursorPrecedingLine = function(param) {
    this.y -= param || 1;
    this._ncoords();
    return this._write("\x1B[" + (param || "") + "F");
  };
  Program.prototype.cha = Program.prototype.cursorCharAbsolute = function(param) {
    if (!this.zero) {
      param = (param || 1) - 1;
    } else {
      param = param || 0;
    }
    this.x = param;
    this.y = 0;
    this._ncoords();
    if (this.tput)
      return this.put.hpa(param);
    return this._write("\x1B[" + (param + 1) + "G");
  };
  Program.prototype.il = Program.prototype.insertLines = function(param) {
    if (this.tput)
      return this.put.il(param);
    return this._write("\x1B[" + (param || "") + "L");
  };
  Program.prototype.dl = Program.prototype.deleteLines = function(param) {
    if (this.tput)
      return this.put.dl(param);
    return this._write("\x1B[" + (param || "") + "M");
  };
  Program.prototype.dch = Program.prototype.deleteChars = function(param) {
    if (this.tput)
      return this.put.dch(param);
    return this._write("\x1B[" + (param || "") + "P");
  };
  Program.prototype.ech = Program.prototype.eraseChars = function(param) {
    if (this.tput)
      return this.put.ech(param);
    return this._write("\x1B[" + (param || "") + "X");
  };
  Program.prototype.hpa = Program.prototype.charPosAbsolute = function(param) {
    this.x = param || 0;
    this._ncoords();
    if (this.tput) {
      return this.put.hpa.apply(this.put, arguments);
    }
    param = slice.call(arguments).join(";");
    return this._write("\x1B[" + (param || "") + "`");
  };
  Program.prototype.hpr = Program.prototype.HPositionRelative = function(param) {
    if (this.tput)
      return this.cuf(param);
    this.x += param || 1;
    this._ncoords();
    return this._write("\x1B[" + (param || "") + "a");
  };
  Program.prototype.da = Program.prototype.sendDeviceAttributes = function(param, callback) {
    return this.response("device-attributes", "\x1B[" + (param || "") + "c", callback);
  };
  Program.prototype.vpa = Program.prototype.linePosAbsolute = function(param) {
    this.y = param || 1;
    this._ncoords();
    if (this.tput) {
      return this.put.vpa.apply(this.put, arguments);
    }
    param = slice.call(arguments).join(";");
    return this._write("\x1B[" + (param || "") + "d");
  };
  Program.prototype.vpr = Program.prototype.VPositionRelative = function(param) {
    if (this.tput)
      return this.cud(param);
    this.y += param || 1;
    this._ncoords();
    return this._write("\x1B[" + (param || "") + "e");
  };
  Program.prototype.hvp = Program.prototype.HVPosition = function(row, col) {
    if (!this.zero) {
      row = (row || 1) - 1;
      col = (col || 1) - 1;
    } else {
      row = row || 0;
      col = col || 0;
    }
    this.y = row;
    this.x = col;
    this._ncoords();
    if (this.tput)
      return this.put.cup(row, col);
    return this._write("\x1B[" + (row + 1) + ";" + (col + 1) + "f");
  };
  Program.prototype.sm = Program.prototype.setMode = function() {
    var param = slice.call(arguments).join(";");
    return this._write("\x1B[" + (param || "") + "h");
  };
  Program.prototype.decset = function() {
    var param = slice.call(arguments).join(";");
    return this.setMode("?" + param);
  };
  Program.prototype.dectcem = Program.prototype.cnorm = Program.prototype.cvvis = Program.prototype.showCursor = function() {
    this.cursorHidden = false;
    if (this.tput)
      return this.put.cnorm();
    return this.setMode("?25");
  };
  Program.prototype.alternate = Program.prototype.smcup = Program.prototype.alternateBuffer = function() {
    this.isAlt = true;
    if (this.tput)
      return this.put.smcup();
    if (this.term("vt") || this.term("linux"))
      return;
    this.setMode("?47");
    return this.setMode("?1049");
  };
  Program.prototype.rm = Program.prototype.resetMode = function() {
    var param = slice.call(arguments).join(";");
    return this._write("\x1B[" + (param || "") + "l");
  };
  Program.prototype.decrst = function() {
    var param = slice.call(arguments).join(";");
    return this.resetMode("?" + param);
  };
  Program.prototype.dectcemh = Program.prototype.cursor_invisible = Program.prototype.vi = Program.prototype.civis = Program.prototype.hideCursor = function() {
    this.cursorHidden = true;
    if (this.tput)
      return this.put.civis();
    return this.resetMode("?25");
  };
  Program.prototype.rmcup = Program.prototype.normalBuffer = function() {
    this.isAlt = false;
    if (this.tput)
      return this.put.rmcup();
    this.resetMode("?47");
    return this.resetMode("?1049");
  };
  Program.prototype.enableMouse = function() {
    if (process.env.BLESSED_FORCE_MODES) {
      var modes = process.env.BLESSED_FORCE_MODES.split(",");
      var options = {};
      for (var n = 0;n < modes.length; ++n) {
        var pair = modes[n].split("=");
        var v = pair[1] !== "0";
        switch (pair[0].toUpperCase()) {
          case "SGRMOUSE":
            options.sgrMouse = v;
            break;
          case "UTFMOUSE":
            options.utfMouse = v;
            break;
          case "VT200MOUSE":
            options.vt200Mouse = v;
            break;
          case "URXVTMOUSE":
            options.urxvtMouse = v;
            break;
          case "X10MOUSE":
            options.x10Mouse = v;
            break;
          case "DECMOUSE":
            options.decMouse = v;
            break;
          case "PTERMMOUSE":
            options.ptermMouse = v;
            break;
          case "JSBTERMMOUSE":
            options.jsbtermMouse = v;
            break;
          case "VT200HILITE":
            options.vt200Hilite = v;
            break;
          case "GPMMOUSE":
            options.gpmMouse = v;
            break;
          case "CELLMOTION":
            options.cellMotion = v;
            break;
          case "ALLMOTION":
            options.allMotion = v;
            break;
          case "SENDFOCUS":
            options.sendFocus = v;
            break;
        }
      }
      return this.setMouse(options, true);
    }
    if (this.term("rxvt-unicode")) {
      return this.setMouse({
        urxvtMouse: true,
        cellMotion: true,
        allMotion: true
      }, true);
    }
    if (this.term("rxvt")) {
      return this.setMouse({
        vt200Mouse: true,
        x10Mouse: true,
        cellMotion: true,
        allMotion: true
      }, true);
    }
    if (this.isVTE) {
      return this.setMouse({
        sgrMouse: true,
        cellMotion: true,
        allMotion: true
      }, true);
    }
    if (this.term("linux")) {
      return this.setMouse({
        vt200Mouse: true,
        gpmMouse: true
      }, true);
    }
    if (this.term("xterm") || this.term("screen") || this.tput && this.tput.strings.key_mouse) {
      return this.setMouse({
        vt200Mouse: true,
        utfMouse: true,
        cellMotion: true,
        allMotion: true
      }, true);
    }
  };
  Program.prototype.disableMouse = function() {
    if (!this._currentMouse)
      return;
    var obj = {};
    Object.keys(this._currentMouse).forEach(function(key) {
      obj[key] = false;
    });
    return this.setMouse(obj, false);
  };
  Program.prototype.setMouse = function(opt, enable) {
    if (opt.normalMouse != null) {
      opt.vt200Mouse = opt.normalMouse;
      opt.allMotion = opt.normalMouse;
    }
    if (opt.hiliteTracking != null) {
      opt.vt200Hilite = opt.hiliteTracking;
    }
    if (enable === true) {
      if (this._currentMouse) {
        this.setMouse(opt);
        Object.keys(opt).forEach(function(key) {
          this._currentMouse[key] = opt[key];
        }, this);
        return;
      }
      this._currentMouse = opt;
      this.mouseEnabled = true;
    } else if (enable === false) {
      delete this._currentMouse;
      this.mouseEnabled = false;
    }
    if (opt.x10Mouse != null) {
      if (opt.x10Mouse)
        this.setMode("?9");
      else
        this.resetMode("?9");
    }
    if (opt.vt200Mouse != null) {
      if (opt.vt200Mouse)
        this.setMode("?1000");
      else
        this.resetMode("?1000");
    }
    if (opt.vt200Hilite != null) {
      if (opt.vt200Hilite)
        this.setMode("?1001");
      else
        this.resetMode("?1001");
    }
    if (opt.cellMotion != null) {
      if (opt.cellMotion)
        this.setMode("?1002");
      else
        this.resetMode("?1002");
    }
    if (opt.allMotion != null) {
      if (this.tmux && this.tmuxVersion >= 2) {
        if (opt.allMotion)
          this._twrite("\x1B[?1003h");
        else
          this._twrite("\x1B[?1003l");
      } else {
        if (opt.allMotion)
          this.setMode("?1003");
        else
          this.resetMode("?1003");
      }
    }
    if (opt.sendFocus != null) {
      if (opt.sendFocus)
        this.setMode("?1004");
      else
        this.resetMode("?1004");
    }
    if (opt.utfMouse != null) {
      if (opt.utfMouse)
        this.setMode("?1005");
      else
        this.resetMode("?1005");
    }
    if (opt.sgrMouse != null) {
      if (opt.sgrMouse)
        this.setMode("?1006");
      else
        this.resetMode("?1006");
    }
    if (opt.urxvtMouse != null) {
      if (opt.urxvtMouse)
        this.setMode("?1015");
      else
        this.resetMode("?1015");
    }
    if (opt.decMouse != null) {
      if (opt.decMouse)
        this._write("\x1B[1;2'z\x1B[1;3'{");
      else
        this._write("\x1B['z");
    }
    if (opt.ptermMouse != null) {
      if (opt.ptermMouse)
        this._write("\x1B[>1h\x1B[>6h\x1B[>7h\x1B[>1h\x1B[>9l");
      else
        this._write("\x1B[>1l\x1B[>6l\x1B[>7l\x1B[>1l\x1B[>9h");
    }
    if (opt.jsbtermMouse != null) {
      if (opt.jsbtermMouse)
        this._write("\x1B[0~ZwLMRK+1Q\x1B\\");
      else
        this._write("\x1B[0~ZwQ\x1B\\");
    }
    if (opt.gpmMouse != null) {
      if (opt.gpmMouse)
        this.enableGpm();
      else
        this.disableGpm();
    }
  };
  Program.prototype.decstbm = Program.prototype.csr = Program.prototype.setScrollRegion = function(top, bottom) {
    if (!this.zero) {
      top = (top || 1) - 1;
      bottom = (bottom || this.rows) - 1;
    } else {
      top = top || 0;
      bottom = bottom || this.rows - 1;
    }
    this.scrollTop = top;
    this.scrollBottom = bottom;
    this.x = 0;
    this.y = 0;
    this._ncoords();
    if (this.tput)
      return this.put.csr(top, bottom);
    return this._write("\x1B[" + (top + 1) + ";" + (bottom + 1) + "r");
  };
  Program.prototype.scA = Program.prototype.saveCursorA = function() {
    this.savedX = this.x;
    this.savedY = this.y;
    if (this.tput)
      return this.put.sc();
    return this._write("\x1B[s");
  };
  Program.prototype.rcA = Program.prototype.restoreCursorA = function() {
    this.x = this.savedX || 0;
    this.y = this.savedY || 0;
    if (this.tput)
      return this.put.rc();
    return this._write("\x1B[u");
  };
  Program.prototype.cht = Program.prototype.cursorForwardTab = function(param) {
    this.x += 8;
    this._ncoords();
    if (this.tput)
      return this.put.tab(param);
    return this._write("\x1B[" + (param || 1) + "I");
  };
  Program.prototype.su = Program.prototype.scrollUp = function(param) {
    this.y -= param || 1;
    this._ncoords();
    if (this.tput)
      return this.put.parm_index(param);
    return this._write("\x1B[" + (param || 1) + "S");
  };
  Program.prototype.sd = Program.prototype.scrollDown = function(param) {
    this.y += param || 1;
    this._ncoords();
    if (this.tput)
      return this.put.parm_rindex(param);
    return this._write("\x1B[" + (param || 1) + "T");
  };
  Program.prototype.initMouseTracking = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + "T");
  };
  Program.prototype.resetTitleModes = function() {
    return this._write("\x1B[>" + slice.call(arguments).join(";") + "T");
  };
  Program.prototype.cbt = Program.prototype.cursorBackwardTab = function(param) {
    this.x -= 8;
    this._ncoords();
    if (this.tput)
      return this.put.cbt(param);
    return this._write("\x1B[" + (param || 1) + "Z");
  };
  Program.prototype.rep = Program.prototype.repeatPrecedingCharacter = function(param) {
    this.x += param || 1;
    this._ncoords();
    if (this.tput)
      return this.put.rep(param);
    return this._write("\x1B[" + (param || 1) + "b");
  };
  Program.prototype.tbc = Program.prototype.tabClear = function(param) {
    if (this.tput)
      return this.put.tbc(param);
    return this._write("\x1B[" + (param || 0) + "g");
  };
  Program.prototype.mc = Program.prototype.mediaCopy = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + "i");
  };
  Program.prototype.print_screen = Program.prototype.ps = Program.prototype.mc0 = function() {
    if (this.tput)
      return this.put.mc0();
    return this.mc("0");
  };
  Program.prototype.prtr_on = Program.prototype.po = Program.prototype.mc5 = function() {
    if (this.tput)
      return this.put.mc5();
    return this.mc("5");
  };
  Program.prototype.prtr_off = Program.prototype.pf = Program.prototype.mc4 = function() {
    if (this.tput)
      return this.put.mc4();
    return this.mc("4");
  };
  Program.prototype.prtr_non = Program.prototype.pO = Program.prototype.mc5p = function() {
    if (this.tput)
      return this.put.mc5p();
    return this.mc("?5");
  };
  Program.prototype.setResources = function() {
    return this._write("\x1B[>" + slice.call(arguments).join(";") + "m");
  };
  Program.prototype.disableModifiers = function(param) {
    return this._write("\x1B[>" + (param || "") + "n");
  };
  Program.prototype.setPointerMode = function(param) {
    return this._write("\x1B[>" + (param || "") + "p");
  };
  Program.prototype.decstr = Program.prototype.rs2 = Program.prototype.softReset = function() {
    if (this.tput)
      return this.put.rs2();
    return this._write("\x1B[!p\x1B[?3;4l\x1B[4l\x1B>");
  };
  Program.prototype.decrqm = Program.prototype.requestAnsiMode = function(param) {
    return this._write("\x1B[" + (param || "") + "$p");
  };
  Program.prototype.decrqmp = Program.prototype.requestPrivateMode = function(param) {
    return this._write("\x1B[?" + (param || "") + "$p");
  };
  Program.prototype.decscl = Program.prototype.setConformanceLevel = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + '"p');
  };
  Program.prototype.decll = Program.prototype.loadLEDs = function(param) {
    return this._write("\x1B[" + (param || "") + "q");
  };
  Program.prototype.decscusr = Program.prototype.setCursorStyle = function(param) {
    switch (param) {
      case "blinking block":
        param = 1;
        break;
      case "block":
      case "steady block":
        param = 2;
        break;
      case "blinking underline":
        param = 3;
        break;
      case "underline":
      case "steady underline":
        param = 4;
        break;
      case "blinking bar":
        param = 5;
        break;
      case "bar":
      case "steady bar":
        param = 6;
        break;
    }
    if (param === 2 && this.has("Se")) {
      return this.put.Se();
    }
    if (this.has("Ss")) {
      return this.put.Ss(param);
    }
    return this._write("\x1B[" + (param || 1) + " q");
  };
  Program.prototype.decsca = Program.prototype.setCharProtectionAttr = function(param) {
    return this._write("\x1B[" + (param || 0) + '"q');
  };
  Program.prototype.restorePrivateValues = function() {
    return this._write("\x1B[?" + slice.call(arguments).join(";") + "r");
  };
  Program.prototype.deccara = Program.prototype.setAttrInRectangle = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + "$r");
  };
  Program.prototype.savePrivateValues = function() {
    return this._write("\x1B[?" + slice.call(arguments).join(";") + "s");
  };
  Program.prototype.manipulateWindow = function() {
    var args = slice.call(arguments);
    var callback = typeof args[args.length - 1] === "function" ? args.pop() : function() {};
    return this.response("window-manipulation", "\x1B[" + args.join(";") + "t", callback);
  };
  Program.prototype.getWindowSize = function(callback) {
    return this.manipulateWindow(18, callback);
  };
  Program.prototype.decrara = Program.prototype.reverseAttrInRectangle = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + "$t");
  };
  Program.prototype.setTitleModeFeature = function() {
    return this._twrite("\x1B[>" + slice.call(arguments).join(";") + "t");
  };
  Program.prototype.decswbv = Program.prototype.setWarningBellVolume = function(param) {
    return this._write("\x1B[" + (param || "") + " t");
  };
  Program.prototype.decsmbv = Program.prototype.setMarginBellVolume = function(param) {
    return this._write("\x1B[" + (param || "") + " u");
  };
  Program.prototype.deccra = Program.prototype.copyRectangle = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + "$v");
  };
  Program.prototype.decefr = Program.prototype.enableFilterRectangle = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + "'w");
  };
  Program.prototype.decreqtparm = Program.prototype.requestParameters = function(param) {
    return this._write("\x1B[" + (param || 0) + "x");
  };
  Program.prototype.decsace = Program.prototype.selectChangeExtent = function(param) {
    return this._write("\x1B[" + (param || 0) + "x");
  };
  Program.prototype.decfra = Program.prototype.fillRectangle = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + "$x");
  };
  Program.prototype.decelr = Program.prototype.enableLocatorReporting = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + "'z");
  };
  Program.prototype.decera = Program.prototype.eraseRectangle = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + "$z");
  };
  Program.prototype.decsle = Program.prototype.setLocatorEvents = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + "'{");
  };
  Program.prototype.decsera = Program.prototype.selectiveEraseRectangle = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + "${");
  };
  Program.prototype.decrqlp = Program.prototype.req_mouse_pos = Program.prototype.reqmp = Program.prototype.requestLocatorPosition = function(param, callback) {
    if (this.has("req_mouse_pos")) {
      var code = this.tput.req_mouse_pos(param);
      return this.response("locator-position", code, callback);
    }
    return this.response("locator-position", "\x1B[" + (param || "") + "'|", callback);
  };
  Program.prototype.decic = Program.prototype.insertColumns = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + " }");
  };
  Program.prototype.decdc = Program.prototype.deleteColumns = function() {
    return this._write("\x1B[" + slice.call(arguments).join(";") + " ~");
  };
  Program.prototype.out = function(name) {
    var args = Array.prototype.slice.call(arguments, 1);
    this.ret = true;
    var out = this[name].apply(this, args);
    this.ret = false;
    return out;
  };
  Program.prototype.sigtstp = function(callback) {
    var resume = this.pause();
    process.once("SIGCONT", function() {
      resume();
      if (callback)
        callback();
    });
    process.kill(process.pid, "SIGTSTP");
  };
  Program.prototype.pause = function(callback) {
    var self = this, isAlt = this.isAlt, mouseEnabled = this.mouseEnabled;
    this.lsaveCursor("pause");
    if (isAlt)
      this.normalBuffer();
    this.showCursor();
    if (mouseEnabled)
      this.disableMouse();
    var write = this.output.write;
    this.output.write = function() {};
    if (this.input.setRawMode) {
      this.input.setRawMode(false);
    }
    this.input.pause();
    return this._resume = function() {
      delete self._resume;
      if (self.input.setRawMode) {
        self.input.setRawMode(true);
      }
      self.input.resume();
      self.output.write = write;
      if (isAlt)
        self.alternateBuffer();
      if (mouseEnabled)
        self.enableMouse();
      self.lrestoreCursor("pause", true);
      if (callback)
        callback();
    };
  };
  Program.prototype.resume = function() {
    if (this._resume)
      return this._resume();
  };
  function unshiftEvent(obj, event, listener) {
    var listeners = obj.listeners(event);
    obj.removeAllListeners(event);
    obj.on(event, listener);
    listeners.forEach(function(listener2) {
      obj.on(event, listener2);
    });
  }
  function merge(out) {
    slice.call(arguments, 1).forEach(function(obj) {
      Object.keys(obj).forEach(function(key) {
        out[key] = obj[key];
      });
    });
    return out;
  }
  module.exports = Program;
});

// node_modules/neo-blessed/lib/widget.js
var require_widget = __commonJS((exports) => {
  var widget = exports;
  widget.classes = [
    "Node",
    "Screen",
    "Element",
    "Box",
    "Text",
    "Line",
    "ScrollableBox",
    "ScrollableText",
    "BigText",
    "List",
    "Form",
    "Input",
    "Textarea",
    "Textbox",
    "Button",
    "ProgressBar",
    "FileManager",
    "Checkbox",
    "RadioSet",
    "RadioButton",
    "Prompt",
    "Question",
    "Message",
    "Loading",
    "Listbar",
    "Log",
    "Table",
    "ListTable",
    "Terminal",
    "Image",
    "ANSIImage",
    "OverlayImage",
    "Video",
    "Layout"
  ];
  widget.classes.forEach(function(name) {
    var file = name.toLowerCase();
    widget[name] = widget[file] = __require("./widgets/" + file);
  });
  widget.aliases = {
    ListBar: "Listbar",
    PNG: "ANSIImage"
  };
  Object.keys(widget.aliases).forEach(function(key) {
    var name = widget.aliases[key];
    widget[key] = widget[name];
    widget[key.toLowerCase()] = widget[name];
  });
});

// node_modules/neo-blessed/lib/unicode.js
var require_unicode = __commonJS((exports) => {
  var stringFromCharCode = String.fromCharCode;
  var floor = Math.floor;
  exports.charWidth = function(str, i) {
    var point = typeof str !== "number" ? exports.codePointAt(str, i || 0) : str;
    if (point === 0)
      return 0;
    if (point === 9) {
      if (!exports.blessed) {
        exports.blessed = require_blessed();
      }
      return exports.blessed.screen.global ? exports.blessed.screen.global.tabc.length : 8;
    }
    if (point < 32 || point >= 127 && point < 160) {
      return 0;
    }
    if (exports.combining[point]) {
      return 0;
    }
    if (point === 12288 || 65281 <= point && point <= 65376 || 65504 <= point && point <= 65510) {
      return 2;
    }
    if (4352 <= point && point <= 4447 || 4515 <= point && point <= 4519 || 4602 <= point && point <= 4607 || 9001 <= point && point <= 9002 || 11904 <= point && point <= 11929 || 11931 <= point && point <= 12019 || 12032 <= point && point <= 12245 || 12272 <= point && point <= 12283 || 12289 <= point && point <= 12350 || 12353 <= point && point <= 12438 || 12441 <= point && point <= 12543 || 12549 <= point && point <= 12589 || 12593 <= point && point <= 12686 || 12688 <= point && point <= 12730 || 12736 <= point && point <= 12771 || 12784 <= point && point <= 12830 || 12832 <= point && point <= 12871 || 12880 <= point && point <= 13054 || 13056 <= point && point <= 19903 || 19968 <= point && point <= 42124 || 42128 <= point && point <= 42182 || 43360 <= point && point <= 43388 || 44032 <= point && point <= 55203 || 55216 <= point && point <= 55238 || 55243 <= point && point <= 55291 || 63744 <= point && point <= 64255 || 65040 <= point && point <= 65049 || 65072 <= point && point <= 65106 || 65108 <= point && point <= 65126 || 65128 <= point && point <= 65131 || 110592 <= point && point <= 110593 || 127488 <= point && point <= 127490 || 127504 <= point && point <= 127546 || 127552 <= point && point <= 127560 || 127568 <= point && point <= 127569 || 131072 <= point && point <= 194367 || 177984 <= point && point <= 196605 || 196608 <= point && point <= 262141) {
      return 2;
    }
    if (process.env.NCURSES_CJK_WIDTH) {
      if (point === 161 || point === 164 || 167 <= point && point <= 168 || point === 170 || 173 <= point && point <= 174 || 176 <= point && point <= 180 || 182 <= point && point <= 186 || 188 <= point && point <= 191 || point === 198 || point === 208 || 215 <= point && point <= 216 || 222 <= point && point <= 225 || point === 230 || 232 <= point && point <= 234 || 236 <= point && point <= 237 || point === 240 || 242 <= point && point <= 243 || 247 <= point && point <= 250 || point === 252 || point === 254 || point === 257 || point === 273 || point === 275 || point === 283 || 294 <= point && point <= 295 || point === 299 || 305 <= point && point <= 307 || point === 312 || 319 <= point && point <= 322 || point === 324 || 328 <= point && point <= 331 || point === 333 || 338 <= point && point <= 339 || 358 <= point && point <= 359 || point === 363 || point === 462 || point === 464 || point === 466 || point === 468 || point === 470 || point === 472 || point === 474 || point === 476 || point === 593 || point === 609 || point === 708 || point === 711 || 713 <= point && point <= 715 || point === 717 || point === 720 || 728 <= point && point <= 731 || point === 733 || point === 735 || 768 <= point && point <= 879 || 913 <= point && point <= 929 || 931 <= point && point <= 937 || 945 <= point && point <= 961 || 963 <= point && point <= 969 || point === 1025 || 1040 <= point && point <= 1103 || point === 1105 || point === 8208 || 8211 <= point && point <= 8214 || 8216 <= point && point <= 8217 || 8220 <= point && point <= 8221 || 8224 <= point && point <= 8226 || 8228 <= point && point <= 8231 || point === 8240 || 8242 <= point && point <= 8243 || point === 8245 || point === 8251 || point === 8254 || point === 8308 || point === 8319 || 8321 <= point && point <= 8324 || point === 8364 || point === 8451 || point === 8453 || point === 8457 || point === 8467 || point === 8470 || 8481 <= point && point <= 8482 || point === 8486 || point === 8491 || 8531 <= point && point <= 8532 || 8539 <= point && point <= 8542 || 8544 <= point && point <= 8555 || 8560 <= point && point <= 8569 || point === 8585 || 8592 <= point && point <= 8601 || 8632 <= point && point <= 8633 || point === 8658 || point === 8660 || point === 8679 || point === 8704 || 8706 <= point && point <= 8707 || 8711 <= point && point <= 8712 || point === 8715 || point === 8719 || point === 8721 || point === 8725 || point === 8730 || 8733 <= point && point <= 8736 || point === 8739 || point === 8741 || 8743 <= point && point <= 8748 || point === 8750 || 8756 <= point && point <= 8759 || 8764 <= point && point <= 8765 || point === 8776 || point === 8780 || point === 8786 || 8800 <= point && point <= 8801 || 8804 <= point && point <= 8807 || 8810 <= point && point <= 8811 || 8814 <= point && point <= 8815 || 8834 <= point && point <= 8835 || 8838 <= point && point <= 8839 || point === 8853 || point === 8857 || point === 8869 || point === 8895 || point === 8978 || 9312 <= point && point <= 9449 || 9451 <= point && point <= 9547 || 9552 <= point && point <= 9587 || 9600 <= point && point <= 9615 || 9618 <= point && point <= 9621 || 9632 <= point && point <= 9633 || 9635 <= point && point <= 9641 || 9650 <= point && point <= 9651 || 9654 <= point && point <= 9655 || 9660 <= point && point <= 9661 || 9664 <= point && point <= 9665 || 9670 <= point && point <= 9672 || point === 9675 || 9678 <= point && point <= 9681 || 9698 <= point && point <= 9701 || point === 9711 || 9733 <= point && point <= 9734 || point === 9737 || 9742 <= point && point <= 9743 || 9748 <= point && point <= 9749 || point === 9756 || point === 9758 || point === 9792 || point === 9794 || 9824 <= point && point <= 9825 || 9827 <= point && point <= 9829 || 9831 <= point && point <= 9834 || 9836 <= point && point <= 9837 || point === 9839 || 9886 <= point && point <= 9887 || 9918 <= point && point <= 9919 || 9924 <= point && point <= 9933 || 9935 <= point && point <= 9953 || point === 9955 || 9960 <= point && point <= 9983 || point === 10045 || point === 10071 || 10102 <= point && point <= 10111 || 11093 <= point && point <= 11097 || 12872 <= point && point <= 12879 || 57344 <= point && point <= 63743 || 65024 <= point && point <= 65039 || point === 65533 || 127232 <= point && point <= 127242 || 127248 <= point && point <= 127277 || 127280 <= point && point <= 127337 || 127344 <= point && point <= 127386 || 917760 <= point && point <= 917999 || 983040 <= point && point <= 1048573 || 1048576 <= point && point <= 1114109) {
        return +process.env.NCURSES_CJK_WIDTH || 1;
      }
    }
    return 1;
  };
  exports.strWidth = function(str) {
    var width = 0;
    for (var i = 0;i < str.length; i++) {
      width += exports.charWidth(str, i);
      if (exports.isSurrogate(str, i))
        i++;
    }
    return width;
  };
  exports.isSurrogate = function(str, i) {
    var point = typeof str !== "number" ? exports.codePointAt(str, i || 0) : str;
    return point > 65535;
  };
  exports.combiningTable = [
    [768, 879],
    [1155, 1158],
    [1160, 1161],
    [1425, 1469],
    [1471, 1471],
    [1473, 1474],
    [1476, 1477],
    [1479, 1479],
    [1536, 1539],
    [1552, 1557],
    [1611, 1630],
    [1648, 1648],
    [1750, 1764],
    [1767, 1768],
    [1770, 1773],
    [1807, 1807],
    [1809, 1809],
    [1840, 1866],
    [1958, 1968],
    [2027, 2035],
    [2305, 2306],
    [2364, 2364],
    [2369, 2376],
    [2381, 2381],
    [2385, 2388],
    [2402, 2403],
    [2433, 2433],
    [2492, 2492],
    [2497, 2500],
    [2509, 2509],
    [2530, 2531],
    [2561, 2562],
    [2620, 2620],
    [2625, 2626],
    [2631, 2632],
    [2635, 2637],
    [2672, 2673],
    [2689, 2690],
    [2748, 2748],
    [2753, 2757],
    [2759, 2760],
    [2765, 2765],
    [2786, 2787],
    [2817, 2817],
    [2876, 2876],
    [2879, 2879],
    [2881, 2883],
    [2893, 2893],
    [2902, 2902],
    [2946, 2946],
    [3008, 3008],
    [3021, 3021],
    [3134, 3136],
    [3142, 3144],
    [3146, 3149],
    [3157, 3158],
    [3260, 3260],
    [3263, 3263],
    [3270, 3270],
    [3276, 3277],
    [3298, 3299],
    [3393, 3395],
    [3405, 3405],
    [3530, 3530],
    [3538, 3540],
    [3542, 3542],
    [3633, 3633],
    [3636, 3642],
    [3655, 3662],
    [3761, 3761],
    [3764, 3769],
    [3771, 3772],
    [3784, 3789],
    [3864, 3865],
    [3893, 3893],
    [3895, 3895],
    [3897, 3897],
    [3953, 3966],
    [3968, 3972],
    [3974, 3975],
    [3984, 3991],
    [3993, 4028],
    [4038, 4038],
    [4141, 4144],
    [4146, 4146],
    [4150, 4151],
    [4153, 4153],
    [4184, 4185],
    [4448, 4607],
    [4959, 4959],
    [5906, 5908],
    [5938, 5940],
    [5970, 5971],
    [6002, 6003],
    [6068, 6069],
    [6071, 6077],
    [6086, 6086],
    [6089, 6099],
    [6109, 6109],
    [6155, 6157],
    [6313, 6313],
    [6432, 6434],
    [6439, 6440],
    [6450, 6450],
    [6457, 6459],
    [6679, 6680],
    [6912, 6915],
    [6964, 6964],
    [6966, 6970],
    [6972, 6972],
    [6978, 6978],
    [7019, 7027],
    [7616, 7626],
    [7678, 7679],
    [8203, 8207],
    [8234, 8238],
    [8288, 8291],
    [8298, 8303],
    [8400, 8431],
    [12330, 12335],
    [12441, 12442],
    [43014, 43014],
    [43019, 43019],
    [43045, 43046],
    [64286, 64286],
    [65024, 65039],
    [65056, 65059],
    [65279, 65279],
    [65529, 65531],
    [68097, 68099],
    [68101, 68102],
    [68108, 68111],
    [68152, 68154],
    [68159, 68159],
    [119143, 119145],
    [119155, 119170],
    [119173, 119179],
    [119210, 119213],
    [119362, 119364],
    [917505, 917505],
    [917536, 917631],
    [917760, 917999]
  ];
  exports.combining = exports.combiningTable.reduce(function(out, row) {
    for (var i = row[0];i <= row[1]; i++) {
      out[i] = true;
    }
    return out;
  }, {});
  exports.isCombining = function(str, i) {
    var point = typeof str !== "number" ? exports.codePointAt(str, i || 0) : str;
    return exports.combining[point] === true;
  };
  exports.codePointAt = function(str, position) {
    if (str == null) {
      throw TypeError();
    }
    var string = String(str);
    if (string.codePointAt) {
      return string.codePointAt(position);
    }
    var size = string.length;
    var index = position ? Number(position) : 0;
    if (index !== index) {
      index = 0;
    }
    if (index < 0 || index >= size) {
      return;
    }
    var first = string.charCodeAt(index);
    var second;
    if (first >= 55296 && first <= 56319 && size > index + 1) {
      second = string.charCodeAt(index + 1);
      if (second >= 56320 && second <= 57343) {
        return (first - 55296) * 1024 + second - 56320 + 65536;
      }
    }
    return first;
  };
  exports.fromCodePoint = function() {
    if (String.fromCodePoint) {
      return String.fromCodePoint.apply(String, arguments);
    }
    var MAX_SIZE = 16384;
    var codeUnits = [];
    var highSurrogate;
    var lowSurrogate;
    var index = -1;
    var length = arguments.length;
    if (!length) {
      return "";
    }
    var result = "";
    while (++index < length) {
      var codePoint = Number(arguments[index]);
      if (!isFinite(codePoint) || codePoint < 0 || codePoint > 1114111 || floor(codePoint) !== codePoint) {
        throw RangeError("Invalid code point: " + codePoint);
      }
      if (codePoint <= 65535) {
        codeUnits.push(codePoint);
      } else {
        codePoint -= 65536;
        highSurrogate = (codePoint >> 10) + 55296;
        lowSurrogate = codePoint % 1024 + 56320;
        codeUnits.push(highSurrogate, lowSurrogate);
      }
      if (index + 1 === length || codeUnits.length > MAX_SIZE) {
        result += stringFromCharCode.apply(null, codeUnits);
        codeUnits.length = 0;
      }
    }
    return result;
  };
  exports.chars = {};
  exports.chars.wide = new RegExp("([" + "\\u1100-\\u115f" + "\\u2329\\u232a" + "\\u2e80-\\u303e\\u3040-\\ua4cf" + "\\uac00-\\ud7a3" + "\\uf900-\\ufaff" + "\\ufe10-\\ufe19" + "\\ufe30-\\ufe6f" + "\\uff00-\\uff60" + "\\uffe0-\\uffe6" + "])", "g");
  exports.chars.swide = new RegExp("(" + "[\\ud840-\\ud87f][\\udc00-\\udffd]" + "|" + "[\\ud880-\\ud8bf][\\udc00-\\udffd]" + ")", "g");
  exports.chars.all = new RegExp("(" + exports.chars.swide.source.slice(1, -1) + "|" + exports.chars.wide.source.slice(1, -1) + ")", "g");
  exports.chars.surrogate = /[\ud800-\udbff][\udc00-\udfff]/g;
  exports.chars.combining = exports.combiningTable.reduce(function(out, row) {
    var low, high, range;
    if (row[0] > 65535) {
      low = exports.fromCodePoint(row[0]);
      low = [
        hexify(low.charCodeAt(0)),
        hexify(low.charCodeAt(1))
      ];
      high = exports.fromCodePoint(row[1]);
      high = [
        hexify(high.charCodeAt(0)),
        hexify(high.charCodeAt(1))
      ];
      range = "[\\u" + low[0] + "-" + "\\u" + high[0] + "]" + "[\\u" + low[1] + "-" + "\\u" + high[1] + "]";
      if (!~out.indexOf("|"))
        out += "]";
      out += "|" + range;
    } else {
      low = hexify(row[0]);
      high = hexify(row[1]);
      low = "\\u" + low;
      high = "\\u" + high;
      out += low + "-" + high;
    }
    return out;
  }, "[");
  exports.chars.combining = new RegExp(exports.chars.combining, "g");
  function hexify(n) {
    n = n.toString(16);
    while (n.length < 4)
      n = "0" + n;
    return n;
  }
});

// node_modules/neo-blessed/lib/events.js
var require_events = __commonJS((exports, module) => {
  var slice = Array.prototype.slice;
  function EventEmitter() {
    if (!this._events)
      this._events = {};
  }
  EventEmitter.prototype.setMaxListeners = function(n) {
    this._maxListeners = n;
  };
  EventEmitter.prototype.addListener = function(type, listener) {
    if (!this._events[type]) {
      this._events[type] = listener;
    } else if (typeof this._events[type] === "function") {
      this._events[type] = [this._events[type], listener];
    } else {
      this._events[type].push(listener);
    }
    this._emit("newListener", [type, listener]);
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.removeListener = function(type, listener) {
    var handler = this._events[type];
    if (!handler)
      return;
    if (typeof handler === "function" || handler.length === 1) {
      delete this._events[type];
      this._emit("removeListener", [type, listener]);
      return;
    }
    for (var i = 0;i < handler.length; i++) {
      if (handler[i] === listener || handler[i].listener === listener) {
        handler.splice(i, 1);
        this._emit("removeListener", [type, listener]);
        return;
      }
    }
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.removeAllListeners = function(type) {
    if (type) {
      delete this._events[type];
    } else {
      this._events = {};
    }
  };
  EventEmitter.prototype.once = function(type, listener) {
    function on() {
      this.removeListener(type, on);
      return listener.apply(this, arguments);
    }
    on.listener = listener;
    return this.on(type, on);
  };
  EventEmitter.prototype.listeners = function(type) {
    return typeof this._events[type] === "function" ? [this._events[type]] : this._events[type] || [];
  };
  EventEmitter.prototype._emit = function(type, args) {
    var handler = this._events[type], ret;
    if (!handler) {
      if (type === "error") {
        throw new args[0];
      }
      return;
    }
    if (typeof handler === "function") {
      return handler.apply(this, args);
    }
    for (var i = 0;i < handler.length; i++) {
      if (handler[i].apply(this, args) === false) {
        ret = false;
      }
    }
    return ret !== false;
  };
  EventEmitter.prototype.emit = function(type) {
    var args = slice.call(arguments, 1), params = slice.call(arguments), el = this;
    this._emit("event", params);
    if (this.type === "screen") {
      return this._emit(type, args);
    }
    if (this._emit(type, args) === false) {
      return false;
    }
    type = "element " + type;
    args.unshift(this);
    do {
      if (!el._events[type])
        continue;
      if (el._emit(type, args) === false) {
        return false;
      }
    } while (el = el.parent);
    return true;
  };
  exports = EventEmitter;
  exports.EventEmitter = EventEmitter;
  module.exports = exports;
});

// node_modules/neo-blessed/lib/widgets/node.js
var require_node = __commonJS((exports, module) => {
  var EventEmitter = require_events().EventEmitter;
  function Node(options) {
    var self = this;
    var Screen = require_screen();
    if (!(this instanceof Node)) {
      return new Node(options);
    }
    EventEmitter.call(this);
    options = options || {};
    this.options = options;
    this.screen = this.screen || options.screen;
    if (!this.screen) {
      if (this.type === "screen") {
        this.screen = this;
      } else if (Screen.total === 1) {
        this.screen = Screen.global;
      } else if (options.parent) {
        this.screen = options.parent;
        while (this.screen && this.screen.type !== "screen") {
          this.screen = this.screen.parent;
        }
      } else if (Screen.total) {
        this.screen = Screen.instances[Screen.instances.length - 1];
        process.nextTick(function() {
          if (!self.parent) {
            throw new Error("Element (" + self.type + ")" + " was not appended synchronously after the" + " screen's creation. Please set a `parent`" + " or `screen` option in the element's constructor" + " if you are going to use multiple screens and" + " append the element later.");
          }
        });
      } else {
        throw new Error("No active screen.");
      }
    }
    this.parent = options.parent || null;
    this.children = [];
    this.$ = this._ = this.data = {};
    this.uid = Node.uid++;
    this.index = this.index != null ? this.index : -1;
    if (this.type !== "screen") {
      this.detached = true;
    }
    if (this.parent) {
      this.parent.append(this);
    }
    (options.children || []).forEach(this.append.bind(this));
  }
  Node.uid = 0;
  Node.prototype.__proto__ = EventEmitter.prototype;
  Node.prototype.type = "node";
  Node.prototype.insert = function(element, i) {
    var self = this;
    if (element.screen && element.screen !== this.screen) {
      throw new Error("Cannot switch a node's screen.");
    }
    element.detach();
    element.parent = this;
    element.screen = this.screen;
    if (i === 0) {
      this.children.unshift(element);
    } else if (i === this.children.length) {
      this.children.push(element);
    } else {
      this.children.splice(i, 0, element);
    }
    element.emit("reparent", this);
    this.emit("adopt", element);
    (function emit(el) {
      var n = el.detached !== self.detached;
      el.detached = self.detached;
      if (n)
        el.emit("attach");
      el.children.forEach(emit);
    })(element);
    if (!this.screen.focused) {
      this.screen.focused = element;
    }
  };
  Node.prototype.prepend = function(element) {
    this.insert(element, 0);
  };
  Node.prototype.append = function(element) {
    this.insert(element, this.children.length);
  };
  Node.prototype.insertBefore = function(element, other) {
    var i = this.children.indexOf(other);
    if (~i)
      this.insert(element, i);
  };
  Node.prototype.insertAfter = function(element, other) {
    var i = this.children.indexOf(other);
    if (~i)
      this.insert(element, i + 1);
  };
  Node.prototype.remove = function(element) {
    if (element.parent !== this)
      return;
    var i = this.children.indexOf(element);
    if (!~i)
      return;
    element.clearPos();
    element.parent = null;
    this.children.splice(i, 1);
    i = this.screen.clickable.indexOf(element);
    if (~i)
      this.screen.clickable.splice(i, 1);
    i = this.screen.keyable.indexOf(element);
    if (~i)
      this.screen.keyable.splice(i, 1);
    element.emit("reparent", null);
    this.emit("remove", element);
    (function emit(el) {
      var n = el.detached !== true;
      el.detached = true;
      if (n)
        el.emit("detach");
      el.children.forEach(emit);
    })(element);
    if (this.screen.focused === element) {
      this.screen.rewindFocus();
    }
  };
  Node.prototype.detach = function() {
    if (this.parent)
      this.parent.remove(this);
  };
  Node.prototype.free = function() {
    return;
  };
  Node.prototype.destroy = function() {
    this.detach();
    this.forDescendants(function(el) {
      el.free();
      el.destroyed = true;
      el.emit("destroy");
    }, this);
  };
  Node.prototype.forDescendants = function(iter, s) {
    if (s)
      iter(this);
    this.children.forEach(function emit(el) {
      iter(el);
      el.children.forEach(emit);
    });
  };
  Node.prototype.forAncestors = function(iter, s) {
    var el = this;
    if (s)
      iter(this);
    while (el = el.parent) {
      iter(el);
    }
  };
  Node.prototype.collectDescendants = function(s) {
    var out = [];
    this.forDescendants(function(el) {
      out.push(el);
    }, s);
    return out;
  };
  Node.prototype.collectAncestors = function(s) {
    var out = [];
    this.forAncestors(function(el) {
      out.push(el);
    }, s);
    return out;
  };
  Node.prototype.emitDescendants = function() {
    var args = Array.prototype.slice(arguments), iter;
    if (typeof args[args.length - 1] === "function") {
      iter = args.pop();
    }
    return this.forDescendants(function(el) {
      if (iter)
        iter(el);
      el.emit.apply(el, args);
    }, true);
  };
  Node.prototype.emitAncestors = function() {
    var args = Array.prototype.slice(arguments), iter;
    if (typeof args[args.length - 1] === "function") {
      iter = args.pop();
    }
    return this.forAncestors(function(el) {
      if (iter)
        iter(el);
      el.emit.apply(el, args);
    }, true);
  };
  Node.prototype.hasDescendant = function(target) {
    return function find(el) {
      for (var i = 0;i < el.children.length; i++) {
        if (el.children[i] === target) {
          return true;
        }
        if (find(el.children[i]) === true) {
          return true;
        }
      }
      return false;
    }(this);
  };
  Node.prototype.hasAncestor = function(target) {
    var el = this;
    while (el = el.parent) {
      if (el === target)
        return true;
    }
    return false;
  };
  Node.prototype.get = function(name, value) {
    if (this.data.hasOwnProperty(name)) {
      return this.data[name];
    }
    return value;
  };
  Node.prototype.set = function(name, value) {
    return this.data[name] = value;
  };
  module.exports = Node;
});

// node_modules/neo-blessed/lib/widgets/element.js
var require_element = __commonJS((exports, module) => {
  var assert = __require("assert");
  var colors = require_colors();
  var unicode = require_unicode();
  var nextTick = global.setImmediate || process.nextTick.bind(process);
  var helpers = require_helpers();
  var Node = require_node();
  function Element(options) {
    var self = this;
    if (!(this instanceof Node)) {
      return new Element(options);
    }
    options = options || {};
    if (options.scrollable && !this._ignore && this.type !== "scrollable-box") {
      var ScrollableBox = require_scrollablebox();
      Object.getOwnPropertyNames(ScrollableBox.prototype).forEach(function(key) {
        if (key === "type")
          return;
        Object.defineProperty(this, key, Object.getOwnPropertyDescriptor(ScrollableBox.prototype, key));
      }, this);
      this._ignore = true;
      ScrollableBox.call(this, options);
      delete this._ignore;
      return this;
    }
    Node.call(this, options);
    this.name = options.name;
    options.position = options.position || {
      left: options.left,
      right: options.right,
      top: options.top,
      bottom: options.bottom,
      width: options.width,
      height: options.height
    };
    if (options.position.width === "shrink" || options.position.height === "shrink") {
      if (options.position.width === "shrink") {
        delete options.position.width;
      }
      if (options.position.height === "shrink") {
        delete options.position.height;
      }
      options.shrink = true;
    }
    this.position = options.position;
    this.noOverflow = options.noOverflow;
    this.dockBorders = options.dockBorders;
    this.shadow = options.shadow;
    this.style = options.style;
    if (!this.style) {
      this.style = {};
      this.style.fg = options.fg;
      this.style.bg = options.bg;
      this.style.bold = options.bold;
      this.style.underline = options.underline;
      this.style.blink = options.blink;
      this.style.inverse = options.inverse;
      this.style.invisible = options.invisible;
      this.style.transparent = options.transparent;
    }
    this.hidden = options.hidden || false;
    this.fixed = options.fixed || false;
    this.align = options.align || "left";
    this.valign = options.valign || "top";
    this.wrap = options.wrap !== false;
    this.shrink = options.shrink;
    this.fixed = options.fixed;
    this.ch = options.ch || " ";
    if (typeof options.padding === "number" || !options.padding) {
      options.padding = {
        left: options.padding,
        top: options.padding,
        right: options.padding,
        bottom: options.padding
      };
    }
    this.padding = {
      left: options.padding.left || 0,
      top: options.padding.top || 0,
      right: options.padding.right || 0,
      bottom: options.padding.bottom || 0
    };
    this.border = options.border;
    if (this.border) {
      if (typeof this.border === "string") {
        this.border = { type: this.border };
      }
      this.border.type = this.border.type || "bg";
      if (this.border.type === "ascii")
        this.border.type = "line";
      this.border.ch = this.border.ch || " ";
      this.style.border = this.style.border || this.border.style;
      if (!this.style.border) {
        this.style.border = {};
        this.style.border.fg = this.border.fg;
        this.style.border.bg = this.border.bg;
      }
      if (this.border.left == null)
        this.border.left = true;
      if (this.border.top == null)
        this.border.top = true;
      if (this.border.right == null)
        this.border.right = true;
      if (this.border.bottom == null)
        this.border.bottom = true;
    }
    if (options.clickable) {
      this.screen._listenMouse(this);
    }
    if (options.input || options.keyable) {
      this.screen._listenKeys(this);
    }
    this.parseTags = options.parseTags || options.tags;
    this.setContent(options.content || "", true);
    if (options.label) {
      this.setLabel(options.label);
    }
    if (options.hoverText) {
      this.setHover(options.hoverText);
    }
    this.on("newListener", function fn(type) {
      if (type === "mouse" || type === "click" || type === "mouseover" || type === "mouseout" || type === "mousedown" || type === "mouseup" || type === "mousewheel" || type === "wheeldown" || type === "wheelup" || type === "mousemove") {
        self.screen._listenMouse(self);
      } else if (type === "keypress" || type.indexOf("key ") === 0) {
        self.screen._listenKeys(self);
      }
    });
    this.on("resize", function() {
      self.parseContent();
    });
    this.on("attach", function() {
      self.parseContent();
    });
    this.on("detach", function() {
      delete self.lpos;
    });
    if (options.hoverBg != null) {
      options.hoverEffects = options.hoverEffects || {};
      options.hoverEffects.bg = options.hoverBg;
    }
    if (this.style.hover) {
      options.hoverEffects = this.style.hover;
    }
    if (this.style.focus) {
      options.focusEffects = this.style.focus;
    }
    if (options.effects) {
      if (options.effects.hover)
        options.hoverEffects = options.effects.hover;
      if (options.effects.focus)
        options.focusEffects = options.effects.focus;
    }
    [
      ["hoverEffects", "mouseover", "mouseout", "_htemp"],
      ["focusEffects", "focus", "blur", "_ftemp"]
    ].forEach(function(props) {
      var pname = props[0], over = props[1], out = props[2], temp = props[3];
      self.screen.setEffects(self, self, over, out, self.options[pname], temp);
    });
    if (this.options.draggable) {
      this.draggable = true;
    }
    if (options.focused) {
      this.focus();
    }
  }
  Element.prototype.__proto__ = Node.prototype;
  Element.prototype.type = "element";
  Element.prototype.__defineGetter__("focused", function() {
    return this.screen.focused === this;
  });
  Element.prototype.sattr = function(style, fg, bg) {
    var { bold, underline, blink, inverse, invisible } = style;
    if (fg == null && bg == null) {
      fg = style.fg;
      bg = style.bg;
    }
    if (typeof bold === "function")
      bold = bold(this);
    if (typeof underline === "function")
      underline = underline(this);
    if (typeof blink === "function")
      blink = blink(this);
    if (typeof inverse === "function")
      inverse = inverse(this);
    if (typeof invisible === "function")
      invisible = invisible(this);
    if (typeof fg === "function")
      fg = fg(this);
    if (typeof bg === "function")
      bg = bg(this);
    return (invisible ? 16 : 0) << 18 | (inverse ? 8 : 0) << 18 | (blink ? 4 : 0) << 18 | (underline ? 2 : 0) << 18 | (bold ? 1 : 0) << 18 | colors.convert(fg) << 9 | colors.convert(bg);
  };
  Element.prototype.onScreenEvent = function(type, handler) {
    var listeners = this._slisteners = this._slisteners || [];
    listeners.push({ type, handler });
    this.screen.on(type, handler);
  };
  Element.prototype.onceScreenEvent = function(type, handler) {
    var listeners = this._slisteners = this._slisteners || [];
    var entry = { type, handler };
    listeners.push(entry);
    this.screen.once(type, function() {
      var i = listeners.indexOf(entry);
      if (~i)
        listeners.splice(i, 1);
      return handler.apply(this, arguments);
    });
  };
  Element.prototype.removeScreenEvent = function(type, handler) {
    var listeners = this._slisteners = this._slisteners || [];
    for (var i = 0;i < listeners.length; i++) {
      var listener = listeners[i];
      if (listener.type === type && listener.handler === handler) {
        listeners.splice(i, 1);
        if (this._slisteners.length === 0) {
          delete this._slisteners;
        }
        break;
      }
    }
    this.screen.removeListener(type, handler);
  };
  Element.prototype.free = function() {
    var listeners = this._slisteners = this._slisteners || [];
    for (var i = 0;i < listeners.length; i++) {
      var listener = listeners[i];
      this.screen.removeListener(listener.type, listener.handler);
    }
    delete this._slisteners;
  };
  Element.prototype.hide = function() {
    if (this.hidden)
      return;
    this.clearPos();
    this.hidden = true;
    this.emit("hide");
    if (this.screen.focused === this) {
      this.screen.rewindFocus();
    }
  };
  Element.prototype.show = function() {
    if (!this.hidden)
      return;
    this.hidden = false;
    this.emit("show");
  };
  Element.prototype.toggle = function() {
    return this.hidden ? this.show() : this.hide();
  };
  Element.prototype.focus = function() {
    return this.screen.focused = this;
  };
  Element.prototype.setContent = function(content, noClear, noTags) {
    if (!noClear)
      this.clearPos();
    this.content = content || "";
    this.parseContent(noTags);
    this.emit("set content");
  };
  Element.prototype.getContent = function() {
    if (!this._clines)
      return "";
    return this._clines.fake.join(`
`);
  };
  Element.prototype.setText = function(content, noClear) {
    content = content || "";
    content = content.replace(/\x1b\[[\d;]*m/g, "");
    return this.setContent(content, noClear, true);
  };
  Element.prototype.getText = function() {
    return this.getContent().replace(/\x1b\[[\d;]*m/g, "");
  };
  Element.prototype.parseContent = function(noTags) {
    if (this.detached)
      return false;
    var width = this.width - this.iwidth;
    if (this._clines == null || this._clines.width !== width || this._clines.content !== this.content) {
      var content = this.content;
      content = content.replace(/[\x00-\x08\x0b-\x0c\x0e-\x1a\x1c-\x1f\x7f]/g, "").replace(/\x1b(?!\[[\d;]*m)/g, "").replace(/\r\n|\r/g, `
`).replace(/\t/g, this.screen.tabc);
      if (this.screen.fullUnicode) {
        content = content.replace(unicode.chars.all, "$1\x03");
        if (this.screen.program.isiTerm2) {
          content = content.replace(unicode.chars.combining, "");
        }
      } else {
        content = content.replace(unicode.chars.all, "??");
        content = content.replace(unicode.chars.combining, "");
        content = content.replace(unicode.chars.surrogate, "?");
      }
      if (!noTags) {
        content = this._parseTags(content);
      }
      this._clines = this._wrapContent(content, width);
      this._clines.width = width;
      this._clines.content = this.content;
      this._clines.attr = this._parseAttr(this._clines);
      this._clines.ci = [];
      this._clines.reduce(function(total, line) {
        this._clines.ci.push(total);
        return total + line.length + 1;
      }.bind(this), 0);
      this._pcontent = this._clines.join(`
`);
      this.emit("parsed content");
      return true;
    }
    this._clines.attr = this._parseAttr(this._clines) || this._clines.attr;
    return false;
  };
  Element.prototype._parseTags = function(text) {
    if (!this.parseTags)
      return text;
    if (!/{\/?[\w\-,;!#]*}/.test(text))
      return text;
    var program = this.screen.program, out = "", state, bg = [], fg = [], flag = [], cap, slash, param, attr, esc;
    for (;; ) {
      if (!esc && (cap = /^{escape}/.exec(text))) {
        text = text.substring(cap[0].length);
        esc = true;
        continue;
      }
      if (esc && (cap = /^([\s\S]+?){\/escape}/.exec(text))) {
        text = text.substring(cap[0].length);
        out += cap[1];
        esc = false;
        continue;
      }
      if (esc) {
        out += text;
        break;
      }
      if (cap = /^{(\/?)([\w\-,;!#]*)}/.exec(text)) {
        text = text.substring(cap[0].length);
        slash = cap[1] === "/";
        param = cap[2].replace(/-/g, " ");
        if (param === "open") {
          out += "{";
          continue;
        } else if (param === "close") {
          out += "}";
          continue;
        }
        if (param.slice(-3) === " bg")
          state = bg;
        else if (param.slice(-3) === " fg")
          state = fg;
        else
          state = flag;
        if (slash) {
          if (!param) {
            out += program._attr("normal");
            bg.length = 0;
            fg.length = 0;
            flag.length = 0;
          } else {
            attr = program._attr(param, false);
            if (attr == null) {
              out += cap[0];
            } else {
              state.pop();
              if (state.length) {
                out += program._attr(state[state.length - 1]);
              } else {
                out += attr;
              }
            }
          }
        } else {
          if (!param) {
            out += cap[0];
          } else {
            attr = program._attr(param);
            if (attr == null) {
              out += cap[0];
            } else {
              state.push(param);
              out += attr;
            }
          }
        }
        continue;
      }
      if (cap = /^[\s\S]+?(?={\/?[\w\-,;!#]*})/.exec(text)) {
        text = text.substring(cap[0].length);
        out += cap[0];
        continue;
      }
      out += text;
      break;
    }
    return out;
  };
  Element.prototype._parseAttr = function(lines) {
    var dattr = this.sattr(this.style), attr = dattr, attrs = [], line, i, j, c;
    if (lines[0].attr === attr) {
      return;
    }
    for (j = 0;j < lines.length; j++) {
      line = lines[j];
      attrs[j] = attr;
      for (i = 0;i < line.length; i++) {
        if (line[i] === "\x1B") {
          if (c = /^\x1b\[[\d;]*m/.exec(line.substring(i))) {
            attr = this.screen.attrCode(c[0], attr, dattr);
            i += c[0].length - 1;
          }
        }
      }
    }
    return attrs;
  };
  Element.prototype._align = function(line, width, align) {
    if (!align)
      return line;
    var cline = line.replace(/\x1b\[[\d;]*m/g, ""), len = cline.length, s = width - len;
    if (this.shrink) {
      s = 0;
    }
    if (len === 0)
      return line;
    if (s < 0)
      return line;
    if (align === "center") {
      s = Array((s / 2 | 0) + 1).join(" ");
      return s + line + s;
    } else if (align === "right") {
      s = Array(s + 1).join(" ");
      return s + line;
    } else if (this.parseTags && ~line.indexOf("{|}")) {
      var parts = line.split("{|}");
      var cparts = cline.split("{|}");
      s = Math.max(width - cparts[0].length - cparts[1].length, 0);
      s = Array(s + 1).join(" ");
      return parts[0] + s + parts[1];
    }
    return line;
  };
  Element.prototype._wrapContent = function(content, width) {
    var tags = this.parseTags, state = this.align, wrap = this.wrap, margin = 0, rtof = [], ftor = [], out = [], no = 0, line, align, cap, total, i, part, j, lines, rest;
    lines = content.split(`
`);
    if (!content) {
      out.push(content);
      out.rtof = [0];
      out.ftor = [[0]];
      out.fake = lines;
      out.real = out;
      out.mwidth = 0;
      return out;
    }
    if (this.scrollbar)
      margin++;
    if (this.type === "textarea")
      margin++;
    if (width > margin)
      width -= margin;
    main:
      for (;no < lines.length; no++) {
        line = lines[no];
        align = state;
        ftor.push([]);
        if (tags) {
          if (cap = /^{(left|center|right)}/.exec(line)) {
            line = line.substring(cap[0].length);
            align = state = cap[1] !== "left" ? cap[1] : null;
          }
          if (cap = /{\/(left|center|right)}$/.exec(line)) {
            line = line.slice(0, -cap[0].length);
            state = this.align;
          }
        }
        while (line.length > width) {
          for (i = 0, total = 0;i < line.length; i++) {
            while (line[i] === "\x1B") {
              while (line[i] && line[i++] !== "m")
                ;
            }
            if (!line[i])
              break;
            if (++total === width) {
              i++;
              if (!wrap) {
                rest = line.substring(i).match(/\x1b\[[^m]*m/g);
                rest = rest ? rest.join("") : "";
                out.push(this._align(line.substring(0, i) + rest, width, align));
                ftor[no].push(out.length - 1);
                rtof.push(no);
                continue main;
              }
              if (!this.screen.fullUnicode) {
                if (i !== line.length) {
                  j = i;
                  while (j > i - 10 && j > 0 && line[--j] !== " ")
                    ;
                  if (line[j] === " ")
                    i = j + 1;
                }
              } else {
                if (i !== line.length) {
                  if (unicode.isSurrogate(line, i))
                    i--;
                  for (var s = 0, n = 0;n < i; n++) {
                    if (unicode.isSurrogate(line, n))
                      s++, n++;
                  }
                  i += s;
                  j = i;
                  while (j > i - 10 && j > 0) {
                    j--;
                    if (line[j] === " " || line[j] === "\x03" || unicode.isSurrogate(line, j - 1) && line[j + 1] !== "\x03" || unicode.isCombining(line, j)) {
                      break;
                    }
                  }
                  if (line[j] === " " || line[j] === "\x03" || unicode.isSurrogate(line, j - 1) && line[j + 1] !== "\x03" || unicode.isCombining(line, j)) {
                    i = j + 1;
                  }
                }
              }
              break;
            }
          }
          part = line.substring(0, i);
          line = line.substring(i);
          out.push(this._align(part, width, align));
          ftor[no].push(out.length - 1);
          rtof.push(no);
          if (line === "")
            continue main;
          if (/^(?:\x1b[\[\d;]*m)+$/.test(line)) {
            out[out.length - 1] += line;
            continue main;
          }
        }
        out.push(this._align(line, width, align));
        ftor[no].push(out.length - 1);
        rtof.push(no);
      }
    out.rtof = rtof;
    out.ftor = ftor;
    out.fake = lines;
    out.real = out;
    out.mwidth = out.reduce(function(current, line2) {
      line2 = line2.replace(/\x1b\[[\d;]*m/g, "");
      return line2.length > current ? line2.length : current;
    }, 0);
    return out;
  };
  Element.prototype.__defineGetter__("visible", function() {
    var el = this;
    do {
      if (el.detached)
        return false;
      if (el.hidden)
        return false;
    } while (el = el.parent);
    return true;
  });
  Element.prototype.__defineGetter__("_detached", function() {
    var el = this;
    do {
      if (el.type === "screen")
        return false;
      if (!el.parent)
        return true;
    } while (el = el.parent);
    return false;
  });
  Element.prototype.enableMouse = function() {
    this.screen._listenMouse(this);
  };
  Element.prototype.enableKeys = function() {
    this.screen._listenKeys(this);
  };
  Element.prototype.enableInput = function() {
    this.screen._listenMouse(this);
    this.screen._listenKeys(this);
  };
  Element.prototype.__defineGetter__("draggable", function() {
    return this._draggable === true;
  });
  Element.prototype.__defineSetter__("draggable", function(draggable) {
    return draggable ? this.enableDrag(draggable) : this.disableDrag();
  });
  Element.prototype.enableDrag = function(verify) {
    var self = this;
    if (this._draggable)
      return true;
    if (typeof verify !== "function") {
      verify = function() {
        return true;
      };
    }
    this.enableMouse();
    this.on("mousedown", this._dragMD = function(data) {
      if (self.screen._dragging)
        return;
      if (!verify(data))
        return;
      self.screen._dragging = self;
      self._drag = {
        x: data.x - self.aleft,
        y: data.y - self.atop
      };
      self.setFront();
    });
    this.onScreenEvent("mouse", this._dragM = function(data) {
      if (self.screen._dragging !== self)
        return;
      if (data.action !== "mousedown" && data.action !== "mousemove") {
        delete self.screen._dragging;
        delete self._drag;
        return;
      }
      if (!self.parent)
        return;
      var ox = self._drag.x, oy = self._drag.y, px = self.parent.aleft, py = self.parent.atop, x = data.x - px - ox, y = data.y - py - oy;
      if (self.position.right != null) {
        if (self.position.left != null) {
          self.width = "100%-" + (self.parent.width - self.width);
        }
        self.position.right = null;
      }
      if (self.position.bottom != null) {
        if (self.position.top != null) {
          self.height = "100%-" + (self.parent.height - self.height);
        }
        self.position.bottom = null;
      }
      self.rleft = x;
      self.rtop = y;
      self.screen.render();
    });
    return this._draggable = true;
  };
  Element.prototype.disableDrag = function() {
    if (!this._draggable)
      return false;
    delete this.screen._dragging;
    delete this._drag;
    this.removeListener("mousedown", this._dragMD);
    this.removeScreenEvent("mouse", this._dragM);
    return this._draggable = false;
  };
  Element.prototype.key = function() {
    return this.screen.program.key.apply(this, arguments);
  };
  Element.prototype.onceKey = function() {
    return this.screen.program.onceKey.apply(this, arguments);
  };
  Element.prototype.unkey = Element.prototype.removeKey = function() {
    return this.screen.program.unkey.apply(this, arguments);
  };
  Element.prototype.setIndex = function(index) {
    if (!this.parent)
      return;
    if (index < 0) {
      index = this.parent.children.length + index;
    }
    index = Math.max(index, 0);
    index = Math.min(index, this.parent.children.length - 1);
    var i = this.parent.children.indexOf(this);
    if (!~i)
      return;
    var item = this.parent.children.splice(i, 1)[0];
    this.parent.children.splice(index, 0, item);
  };
  Element.prototype.setFront = function() {
    return this.setIndex(-1);
  };
  Element.prototype.setBack = function() {
    return this.setIndex(0);
  };
  Element.prototype.clearPos = function(get, override) {
    if (this.detached)
      return;
    var lpos = this._getCoords(get);
    if (!lpos)
      return;
    this.screen.clearRegion(lpos.xi, lpos.xl, lpos.yi, lpos.yl, override);
  };
  Element.prototype.setLabel = function(options) {
    var self = this;
    var Box = require_box();
    if (typeof options === "string") {
      options = { text: options };
    }
    if (this._label) {
      this._label.setContent(options.text);
      if (options.side !== "right") {
        this._label.rleft = 2 + (this.border ? -1 : 0);
        this._label.position.right = undefined;
        if (!this.screen.autoPadding) {
          this._label.rleft = 2;
        }
      } else {
        this._label.rright = 2 + (this.border ? -1 : 0);
        this._label.position.left = undefined;
        if (!this.screen.autoPadding) {
          this._label.rright = 2;
        }
      }
      return;
    }
    this._label = new Box({
      screen: this.screen,
      parent: this,
      content: options.text,
      top: -this.itop,
      tags: this.parseTags,
      shrink: true,
      style: this.style.label
    });
    if (options.side !== "right") {
      this._label.rleft = 2 - this.ileft;
    } else {
      this._label.rright = 2 - this.iright;
    }
    this._label._isLabel = true;
    if (!this.screen.autoPadding) {
      if (options.side !== "right") {
        this._label.rleft = 2;
      } else {
        this._label.rright = 2;
      }
      this._label.rtop = 0;
    }
    var reposition = function() {
      self._label.rtop = (self.childBase || 0) - self.itop;
      if (!self.screen.autoPadding) {
        self._label.rtop = self.childBase || 0;
      }
      self.screen.render();
    };
    this.on("scroll", this._labelScroll = function() {
      reposition();
    });
    this.on("resize", this._labelResize = function() {
      nextTick(function() {
        reposition();
      });
    });
  };
  Element.prototype.removeLabel = function() {
    if (!this._label)
      return;
    this.removeListener("scroll", this._labelScroll);
    this.removeListener("resize", this._labelResize);
    this._label.detach();
    delete this._labelScroll;
    delete this._labelResize;
    delete this._label;
  };
  Element.prototype.setHover = function(options) {
    if (typeof options === "string") {
      options = { text: options };
    }
    this._hoverOptions = options;
    this.enableMouse();
    this.screen._initHover();
  };
  Element.prototype.removeHover = function() {
    delete this._hoverOptions;
    if (!this.screen._hoverText || this.screen._hoverText.detached)
      return;
    this.screen._hoverText.detach();
    this.screen.render();
  };
  Element.prototype._getPos = function() {
    var pos = this.lpos;
    assert.ok(pos);
    if (pos.aleft != null)
      return pos;
    pos.aleft = pos.xi;
    pos.atop = pos.yi;
    pos.aright = this.screen.cols - pos.xl;
    pos.abottom = this.screen.rows - pos.yl;
    pos.width = pos.xl - pos.xi;
    pos.height = pos.yl - pos.yi;
    return pos;
  };
  Element.prototype._getWidth = function(get) {
    var parent = get ? this.parent._getPos() : this.parent, width = this.position.width, left, expr;
    if (typeof width === "string") {
      if (width === "half")
        width = "50%";
      expr = width.split(/(?=\+|-)/);
      width = expr[0];
      width = +width.slice(0, -1) / 100;
      width = parent.width * width | 0;
      width += +(expr[1] || 0);
      return width;
    }
    if (width == null) {
      left = this.position.left || 0;
      if (typeof left === "string") {
        if (left === "center")
          left = "50%";
        expr = left.split(/(?=\+|-)/);
        left = expr[0];
        left = +left.slice(0, -1) / 100;
        left = parent.width * left | 0;
        left += +(expr[1] || 0);
      }
      width = parent.width - (this.position.right || 0) - left;
      if (this.screen.autoPadding) {
        if ((this.position.left != null || this.position.right == null) && this.position.left !== "center") {
          width -= this.parent.ileft;
        }
        width -= this.parent.iright;
      }
    }
    return width;
  };
  Element.prototype.__defineGetter__("width", function() {
    return this._getWidth(false);
  });
  Element.prototype._getHeight = function(get) {
    var parent = get ? this.parent._getPos() : this.parent, height = this.position.height, top, expr;
    if (typeof height === "string") {
      if (height === "half")
        height = "50%";
      expr = height.split(/(?=\+|-)/);
      height = expr[0];
      height = +height.slice(0, -1) / 100;
      height = parent.height * height | 0;
      height += +(expr[1] || 0);
      return height;
    }
    if (height == null) {
      top = this.position.top || 0;
      if (typeof top === "string") {
        if (top === "center")
          top = "50%";
        expr = top.split(/(?=\+|-)/);
        top = expr[0];
        top = +top.slice(0, -1) / 100;
        top = parent.height * top | 0;
        top += +(expr[1] || 0);
      }
      height = parent.height - (this.position.bottom || 0) - top;
      if (this.screen.autoPadding) {
        if ((this.position.top != null || this.position.bottom == null) && this.position.top !== "center") {
          height -= this.parent.itop;
        }
        height -= this.parent.ibottom;
      }
    }
    return height;
  };
  Element.prototype.__defineGetter__("height", function() {
    return this._getHeight(false);
  });
  Element.prototype._getLeft = function(get) {
    var parent = get ? this.parent._getPos() : this.parent, left = this.position.left || 0, expr;
    if (typeof left === "string") {
      if (left === "center")
        left = "50%";
      expr = left.split(/(?=\+|-)/);
      left = expr[0];
      left = +left.slice(0, -1) / 100;
      left = parent.width * left | 0;
      left += +(expr[1] || 0);
      if (this.position.left === "center") {
        left -= this._getWidth(get) / 2 | 0;
      }
    }
    if (this.position.left == null && this.position.right != null) {
      return this.screen.cols - this._getWidth(get) - this._getRight(get);
    }
    if (this.screen.autoPadding) {
      if ((this.position.left != null || this.position.right == null) && this.position.left !== "center") {
        left += this.parent.ileft;
      }
    }
    return (parent.aleft || 0) + left;
  };
  Element.prototype.__defineGetter__("aleft", function() {
    return this._getLeft(false);
  });
  Element.prototype._getRight = function(get) {
    var parent = get ? this.parent._getPos() : this.parent, right;
    if (this.position.right == null && this.position.left != null) {
      right = this.screen.cols - (this._getLeft(get) + this._getWidth(get));
      if (this.screen.autoPadding) {
        right += this.parent.iright;
      }
      return right;
    }
    right = (parent.aright || 0) + (this.position.right || 0);
    if (this.screen.autoPadding) {
      right += this.parent.iright;
    }
    return right;
  };
  Element.prototype.__defineGetter__("aright", function() {
    return this._getRight(false);
  });
  Element.prototype._getTop = function(get) {
    var parent = get ? this.parent._getPos() : this.parent, top = this.position.top || 0, expr;
    if (typeof top === "string") {
      if (top === "center")
        top = "50%";
      expr = top.split(/(?=\+|-)/);
      top = expr[0];
      top = +top.slice(0, -1) / 100;
      top = parent.height * top | 0;
      top += +(expr[1] || 0);
      if (this.position.top === "center") {
        top -= this._getHeight(get) / 2 | 0;
      }
    }
    if (this.position.top == null && this.position.bottom != null) {
      return this.screen.rows - this._getHeight(get) - this._getBottom(get);
    }
    if (this.screen.autoPadding) {
      if ((this.position.top != null || this.position.bottom == null) && this.position.top !== "center") {
        top += this.parent.itop;
      }
    }
    return (parent.atop || 0) + top;
  };
  Element.prototype.__defineGetter__("atop", function() {
    return this._getTop(false);
  });
  Element.prototype._getBottom = function(get) {
    var parent = get ? this.parent._getPos() : this.parent, bottom;
    if (this.position.bottom == null && this.position.top != null) {
      bottom = this.screen.rows - (this._getTop(get) + this._getHeight(get));
      if (this.screen.autoPadding) {
        bottom += this.parent.ibottom;
      }
      return bottom;
    }
    bottom = (parent.abottom || 0) + (this.position.bottom || 0);
    if (this.screen.autoPadding) {
      bottom += this.parent.ibottom;
    }
    return bottom;
  };
  Element.prototype.__defineGetter__("abottom", function() {
    return this._getBottom(false);
  });
  Element.prototype.__defineGetter__("rleft", function() {
    return this.aleft - this.parent.aleft;
  });
  Element.prototype.__defineGetter__("rright", function() {
    return this.aright - this.parent.aright;
  });
  Element.prototype.__defineGetter__("rtop", function() {
    return this.atop - this.parent.atop;
  });
  Element.prototype.__defineGetter__("rbottom", function() {
    return this.abottom - this.parent.abottom;
  });
  Element.prototype.__defineSetter__("width", function(val) {
    if (this.position.width === val)
      return;
    if (/^\d+$/.test(val))
      val = +val;
    this.emit("resize");
    this.clearPos();
    return this.position.width = val;
  });
  Element.prototype.__defineSetter__("height", function(val) {
    if (this.position.height === val)
      return;
    if (/^\d+$/.test(val))
      val = +val;
    this.emit("resize");
    this.clearPos();
    return this.position.height = val;
  });
  Element.prototype.__defineSetter__("aleft", function(val) {
    var expr;
    if (typeof val === "string") {
      if (val === "center") {
        val = this.screen.width / 2 | 0;
        val -= this.width / 2 | 0;
      } else {
        expr = val.split(/(?=\+|-)/);
        val = expr[0];
        val = +val.slice(0, -1) / 100;
        val = this.screen.width * val | 0;
        val += +(expr[1] || 0);
      }
    }
    val -= this.parent.aleft;
    if (this.position.left === val)
      return;
    this.emit("move");
    this.clearPos();
    return this.position.left = val;
  });
  Element.prototype.__defineSetter__("aright", function(val) {
    val -= this.parent.aright;
    if (this.position.right === val)
      return;
    this.emit("move");
    this.clearPos();
    return this.position.right = val;
  });
  Element.prototype.__defineSetter__("atop", function(val) {
    var expr;
    if (typeof val === "string") {
      if (val === "center") {
        val = this.screen.height / 2 | 0;
        val -= this.height / 2 | 0;
      } else {
        expr = val.split(/(?=\+|-)/);
        val = expr[0];
        val = +val.slice(0, -1) / 100;
        val = this.screen.height * val | 0;
        val += +(expr[1] || 0);
      }
    }
    val -= this.parent.atop;
    if (this.position.top === val)
      return;
    this.emit("move");
    this.clearPos();
    return this.position.top = val;
  });
  Element.prototype.__defineSetter__("abottom", function(val) {
    val -= this.parent.abottom;
    if (this.position.bottom === val)
      return;
    this.emit("move");
    this.clearPos();
    return this.position.bottom = val;
  });
  Element.prototype.__defineSetter__("rleft", function(val) {
    if (this.position.left === val)
      return;
    if (/^\d+$/.test(val))
      val = +val;
    this.emit("move");
    this.clearPos();
    return this.position.left = val;
  });
  Element.prototype.__defineSetter__("rright", function(val) {
    if (this.position.right === val)
      return;
    this.emit("move");
    this.clearPos();
    return this.position.right = val;
  });
  Element.prototype.__defineSetter__("rtop", function(val) {
    if (this.position.top === val)
      return;
    if (/^\d+$/.test(val))
      val = +val;
    this.emit("move");
    this.clearPos();
    return this.position.top = val;
  });
  Element.prototype.__defineSetter__("rbottom", function(val) {
    if (this.position.bottom === val)
      return;
    this.emit("move");
    this.clearPos();
    return this.position.bottom = val;
  });
  Element.prototype.__defineGetter__("ileft", function() {
    return (this.border ? 1 : 0) + this.padding.left;
  });
  Element.prototype.__defineGetter__("itop", function() {
    return (this.border ? 1 : 0) + this.padding.top;
  });
  Element.prototype.__defineGetter__("iright", function() {
    return (this.border ? 1 : 0) + this.padding.right;
  });
  Element.prototype.__defineGetter__("ibottom", function() {
    return (this.border ? 1 : 0) + this.padding.bottom;
  });
  Element.prototype.__defineGetter__("iwidth", function() {
    return (this.border ? 2 : 0) + this.padding.left + this.padding.right;
  });
  Element.prototype.__defineGetter__("iheight", function() {
    return (this.border ? 2 : 0) + this.padding.top + this.padding.bottom;
  });
  Element.prototype.__defineGetter__("tpadding", function() {
    return this.padding.left + this.padding.top + this.padding.right + this.padding.bottom;
  });
  Element.prototype.__defineGetter__("left", function() {
    return this.rleft;
  });
  Element.prototype.__defineGetter__("right", function() {
    return this.rright;
  });
  Element.prototype.__defineGetter__("top", function() {
    return this.rtop;
  });
  Element.prototype.__defineGetter__("bottom", function() {
    return this.rbottom;
  });
  Element.prototype.__defineSetter__("left", function(val) {
    return this.rleft = val;
  });
  Element.prototype.__defineSetter__("right", function(val) {
    return this.rright = val;
  });
  Element.prototype.__defineSetter__("top", function(val) {
    return this.rtop = val;
  });
  Element.prototype.__defineSetter__("bottom", function(val) {
    return this.rbottom = val;
  });
  Element.prototype._getShrinkBox = function(xi, xl, yi, yl, get) {
    if (!this.children.length) {
      return { xi, xl: xi + 1, yi, yl: yi + 1 };
    }
    var i, el, ret, mxi = xi, mxl = xi + 1, myi = yi, myl = yi + 1;
    var _lpos;
    if (get) {
      _lpos = this.lpos;
      this.lpos = { xi, xl, yi, yl };
    }
    for (i = 0;i < this.children.length; i++) {
      el = this.children[i];
      ret = el._getCoords(get);
      if (!ret)
        continue;
      if (el.position.left == null && el.position.right != null) {
        ret.xl = xi + (ret.xl - ret.xi);
        ret.xi = xi;
        if (this.screen.autoPadding) {
          ret.xl += this.ileft;
          ret.xi += this.ileft;
        }
      }
      if (el.position.top == null && el.position.bottom != null) {
        ret.yl = yi + (ret.yl - ret.yi);
        ret.yi = yi;
        if (this.screen.autoPadding) {
          ret.yl += this.itop;
          ret.yi += this.itop;
        }
      }
      if (ret.xi < mxi)
        mxi = ret.xi;
      if (ret.xl > mxl)
        mxl = ret.xl;
      if (ret.yi < myi)
        myi = ret.yi;
      if (ret.yl > myl)
        myl = ret.yl;
    }
    if (get) {
      this.lpos = _lpos;
    }
    if (this.position.width == null && (this.position.left == null || this.position.right == null)) {
      if (this.position.left == null && this.position.right != null) {
        xi = xl - (mxl - mxi);
        if (!this.screen.autoPadding) {
          xi -= this.padding.left + this.padding.right;
        } else {
          xi -= this.ileft;
        }
      } else {
        xl = mxl;
        if (!this.screen.autoPadding) {
          xl += this.padding.left + this.padding.right;
          if (this.type === "list-table") {
            xl -= this.padding.left + this.padding.right;
            xl += this.iright;
          }
        } else {
          xl += this.iright;
        }
      }
    }
    if (this.position.height == null && (this.position.top == null || this.position.bottom == null) && (!this.scrollable || this._isList)) {
      if (this._isList) {
        myi = 0 - this.itop;
        myl = this.items.length + this.ibottom;
      }
      if (this.position.top == null && this.position.bottom != null) {
        yi = yl - (myl - myi);
        if (!this.screen.autoPadding) {
          yi -= this.padding.top + this.padding.bottom;
        } else {
          yi -= this.itop;
        }
      } else {
        yl = myl;
        if (!this.screen.autoPadding) {
          yl += this.padding.top + this.padding.bottom;
        } else {
          yl += this.ibottom;
        }
      }
    }
    return { xi, xl, yi, yl };
  };
  Element.prototype._getShrinkContent = function(xi, xl, yi, yl) {
    var h = this._clines.length, w = this._clines.mwidth || 1;
    if (this.position.width == null && (this.position.left == null || this.position.right == null)) {
      if (this.position.left == null && this.position.right != null) {
        xi = xl - w - this.iwidth;
      } else {
        xl = xi + w + this.iwidth;
      }
    }
    if (this.position.height == null && (this.position.top == null || this.position.bottom == null) && (!this.scrollable || this._isList)) {
      if (this.position.top == null && this.position.bottom != null) {
        yi = yl - h - this.iheight;
      } else {
        yl = yi + h + this.iheight;
      }
    }
    return { xi, xl, yi, yl };
  };
  Element.prototype._getShrink = function(xi, xl, yi, yl, get) {
    var shrinkBox = this._getShrinkBox(xi, xl, yi, yl, get), shrinkContent = this._getShrinkContent(xi, xl, yi, yl, get), xll = xl, yll = yl;
    if (shrinkBox.xl - shrinkBox.xi > shrinkContent.xl - shrinkContent.xi) {
      xi = shrinkBox.xi;
      xl = shrinkBox.xl;
    } else {
      xi = shrinkContent.xi;
      xl = shrinkContent.xl;
    }
    if (shrinkBox.yl - shrinkBox.yi > shrinkContent.yl - shrinkContent.yi) {
      yi = shrinkBox.yi;
      yl = shrinkBox.yl;
    } else {
      yi = shrinkContent.yi;
      yl = shrinkContent.yl;
    }
    if (xl < xll && this.position.left === "center") {
      xll = (xll - xl) / 2 | 0;
      xi += xll;
      xl += xll;
    }
    if (yl < yll && this.position.top === "center") {
      yll = (yll - yl) / 2 | 0;
      yi += yll;
      yl += yll;
    }
    return { xi, xl, yi, yl };
  };
  Element.prototype._getCoords = function(get, noscroll) {
    if (this.hidden)
      return;
    var xi = this._getLeft(get), xl = xi + this._getWidth(get), yi = this._getTop(get), yl = yi + this._getHeight(get), base = this.childBase || 0, el = this, fixed = this.fixed, coords, v, noleft, noright, notop, nobot, ppos, b;
    if (this.shrink) {
      coords = this._getShrink(xi, xl, yi, yl, get);
      xi = coords.xi, xl = coords.xl;
      yi = coords.yi, yl = coords.yl;
    }
    while (el = el.parent) {
      if (el.scrollable) {
        if (fixed) {
          fixed = false;
          continue;
        }
        break;
      }
    }
    var thisparent = el;
    if (el && !noscroll) {
      ppos = thisparent.lpos;
      if (!ppos)
        return;
      yi -= ppos.base;
      yl -= ppos.base;
      b = thisparent.border ? 1 : 0;
      if (this._isLabel) {
        b = 0;
      }
      if (yi < ppos.yi + b) {
        if (yl - 1 < ppos.yi + b) {
          return;
        } else {
          notop = true;
          v = ppos.yi - yi;
          if (this.border)
            v--;
          if (thisparent.border)
            v++;
          base += v;
          yi += v;
        }
      } else if (yl > ppos.yl - b) {
        if (yi > ppos.yl - 1 - b) {
          return;
        } else {
          nobot = true;
          v = yl - ppos.yl;
          if (this.border)
            v--;
          if (thisparent.border)
            v++;
          yl -= v;
        }
      }
      if (yi >= yl)
        return;
      if (xi < el.lpos.xi) {
        xi = el.lpos.xi;
        noleft = true;
        if (this.border)
          xi--;
        if (thisparent.border)
          xi++;
      }
      if (xl > el.lpos.xl) {
        xl = el.lpos.xl;
        noright = true;
        if (this.border)
          xl++;
        if (thisparent.border)
          xl--;
      }
      if (xi >= xl)
        return;
    }
    if (this.noOverflow && this.parent.lpos) {
      if (xi < this.parent.lpos.xi + this.parent.ileft) {
        xi = this.parent.lpos.xi + this.parent.ileft;
      }
      if (xl > this.parent.lpos.xl - this.parent.iright) {
        xl = this.parent.lpos.xl - this.parent.iright;
      }
      if (yi < this.parent.lpos.yi + this.parent.itop) {
        yi = this.parent.lpos.yi + this.parent.itop;
      }
      if (yl > this.parent.lpos.yl - this.parent.ibottom) {
        yl = this.parent.lpos.yl - this.parent.ibottom;
      }
    }
    return {
      xi,
      xl,
      yi,
      yl,
      base,
      noleft,
      noright,
      notop,
      nobot,
      renders: this.screen.renders
    };
  };
  Element.prototype.render = function() {
    this._emit("prerender");
    this.parseContent();
    var coords = this._getCoords(true);
    if (!coords) {
      delete this.lpos;
      return;
    }
    if (coords.xl - coords.xi <= 0) {
      coords.xl = Math.max(coords.xl, coords.xi);
      return;
    }
    if (coords.yl - coords.yi <= 0) {
      coords.yl = Math.max(coords.yl, coords.yi);
      return;
    }
    var lines = this.screen.lines, xi = coords.xi, xl = coords.xl, yi = coords.yi, yl = coords.yl, x, y, cell, attr, ch, content = this._pcontent, ci = this._clines.ci[coords.base], battr, dattr, c, visible, i, bch = this.ch;
    if (coords.base >= this._clines.ci.length) {
      ci = this._pcontent.length;
    }
    this.lpos = coords;
    if (this.border && this.border.type === "line") {
      this.screen._borderStops[coords.yi] = true;
      this.screen._borderStops[coords.yl - 1] = true;
    }
    dattr = this.sattr(this.style);
    attr = dattr;
    if (ci > 0) {
      attr = this._clines.attr[Math.min(coords.base, this._clines.length - 1)];
    }
    if (this.border)
      xi++, xl--, yi++, yl--;
    if (this.tpadding || this.valign && this.valign !== "top") {
      if (this.style.transparent) {
        for (y = Math.max(yi, 0);y < yl; y++) {
          if (!lines[y])
            break;
          for (x = Math.max(xi, 0);x < xl; x++) {
            if (!lines[y][x])
              break;
            lines[y][x][0] = colors.blend(attr, lines[y][x][0]);
            lines[y].dirty = true;
          }
        }
      } else {
        this.screen.fillRegion(dattr, bch, xi, xl, yi, yl);
      }
    }
    if (this.tpadding) {
      xi += this.padding.left, xl -= this.padding.right;
      yi += this.padding.top, yl -= this.padding.bottom;
    }
    if (this.valign === "middle" || this.valign === "bottom") {
      visible = yl - yi;
      if (this._clines.length < visible) {
        if (this.valign === "middle") {
          visible = visible / 2 | 0;
          visible -= this._clines.length / 2 | 0;
        } else if (this.valign === "bottom") {
          visible -= this._clines.length;
        }
        ci -= visible * (xl - xi);
      }
    }
    for (y = yi;y < yl; y++) {
      if (!lines[y]) {
        if (y >= this.screen.height || yl < this.ibottom) {
          break;
        } else {
          continue;
        }
      }
      for (x = xi;x < xl; x++) {
        cell = lines[y][x];
        if (!cell) {
          if (x >= this.screen.width || xl < this.iright) {
            break;
          } else {
            continue;
          }
        }
        ch = content[ci++] || bch;
        while (ch === "\x1B") {
          if (c = /^\x1b\[[\d;]*m/.exec(content.substring(ci - 1))) {
            ci += c[0].length - 1;
            attr = this.screen.attrCode(c[0], attr, dattr);
            if (this.parent._isList && this.parent.interactive && this.parent.items[this.parent.selected] === this && this.parent.options.invertSelected !== false) {
              attr = attr & ~(511 << 9) | dattr & 511 << 9;
            }
            ch = content[ci] || bch;
            ci++;
          } else {
            break;
          }
        }
        if (ch === "\t")
          ch = bch;
        if (ch === `
`) {
          if (x === xi && y !== yi && content[ci - 2] !== `
`) {
            x--;
            continue;
          }
          ch = bch;
          for (;x < xl; x++) {
            cell = lines[y][x];
            if (!cell)
              break;
            if (this.style.transparent) {
              lines[y][x][0] = colors.blend(attr, lines[y][x][0]);
              if (content[ci])
                lines[y][x][1] = ch;
              lines[y].dirty = true;
            } else {
              if (attr !== cell[0] || ch !== cell[1]) {
                lines[y][x][0] = attr;
                lines[y][x][1] = ch;
                lines[y].dirty = true;
              }
            }
          }
          continue;
        }
        if (this.screen.fullUnicode && content[ci - 1]) {
          var point = unicode.codePointAt(content, ci - 1);
          if (unicode.combining[point]) {
            if (point > 65535) {
              ch = content[ci - 1] + content[ci];
              ci++;
            }
            if (x - 1 >= xi) {
              lines[y][x - 1][1] += ch;
            } else if (y - 1 >= yi) {
              lines[y - 1][xl - 1][1] += ch;
            }
            x--;
            continue;
          }
          if (point > 65535) {
            ch = content[ci - 1] + content[ci];
            ci++;
          }
        }
        if (this._noFill)
          continue;
        if (this.style.transparent) {
          lines[y][x][0] = colors.blend(attr, lines[y][x][0]);
          if (content[ci])
            lines[y][x][1] = ch;
          lines[y].dirty = true;
        } else {
          if (attr !== cell[0] || ch !== cell[1]) {
            lines[y][x][0] = attr;
            lines[y][x][1] = ch;
            lines[y].dirty = true;
          }
        }
      }
    }
    if (this.scrollbar) {
      i = Math.max(this._clines.length, this._scrollBottom());
    }
    if (coords.notop || coords.nobot)
      i = -Infinity;
    if (this.scrollbar && yl - yi < i) {
      x = xl - 1;
      if (this.scrollbar.ignoreBorder && this.border)
        x++;
      if (this.alwaysScroll) {
        y = this.childBase / (i - (yl - yi));
      } else {
        y = (this.childBase + this.childOffset) / (i - 1);
      }
      y = yi + ((yl - yi) * y | 0);
      if (y >= yl)
        y = yl - 1;
      cell = lines[y] && lines[y][x];
      if (cell) {
        if (this.track) {
          ch = this.track.ch || " ";
          attr = this.sattr(this.style.track, this.style.track.fg || this.style.fg, this.style.track.bg || this.style.bg);
          this.screen.fillRegion(attr, ch, x, x + 1, yi, yl);
        }
        ch = this.scrollbar.ch || " ";
        attr = this.sattr(this.style.scrollbar, this.style.scrollbar.fg || this.style.fg, this.style.scrollbar.bg || this.style.bg);
        if (attr !== cell[0] || ch !== cell[1]) {
          lines[y][x][0] = attr;
          lines[y][x][1] = ch;
          lines[y].dirty = true;
        }
      }
    }
    if (this.border)
      xi--, xl++, yi--, yl++;
    if (this.tpadding) {
      xi -= this.padding.left, xl += this.padding.right;
      yi -= this.padding.top, yl += this.padding.bottom;
    }
    if (this.border) {
      battr = this.sattr(this.style.border);
      y = yi;
      if (coords.notop)
        y = -1;
      for (x = xi;x < xl; x++) {
        if (!lines[y])
          break;
        if (coords.noleft && x === xi)
          continue;
        if (coords.noright && x === xl - 1)
          continue;
        cell = lines[y][x];
        if (!cell)
          continue;
        if (this.border.type === "line") {
          if (x === xi) {
            ch = "\u250C";
            if (!this.border.left) {
              if (this.border.top) {
                ch = "\u2500";
              } else {
                continue;
              }
            } else {
              if (!this.border.top) {
                ch = "\u2502";
              }
            }
          } else if (x === xl - 1) {
            ch = "\u2510";
            if (!this.border.right) {
              if (this.border.top) {
                ch = "\u2500";
              } else {
                continue;
              }
            } else {
              if (!this.border.top) {
                ch = "\u2502";
              }
            }
          } else {
            ch = "\u2500";
          }
        } else if (this.border.type === "bg") {
          ch = this.border.ch;
        }
        if (!this.border.top && x !== xi && x !== xl - 1) {
          ch = " ";
          if (dattr !== cell[0] || ch !== cell[1]) {
            lines[y][x][0] = dattr;
            lines[y][x][1] = ch;
            lines[y].dirty = true;
            continue;
          }
        }
        if (battr !== cell[0] || ch !== cell[1]) {
          lines[y][x][0] = battr;
          lines[y][x][1] = ch;
          lines[y].dirty = true;
        }
      }
      y = yi + 1;
      for (;y < yl - 1; y++) {
        if (!lines[y])
          continue;
        cell = lines[y][xi];
        if (cell) {
          if (this.border.left) {
            if (this.border.type === "line") {
              ch = "\u2502";
            } else if (this.border.type === "bg") {
              ch = this.border.ch;
            }
            if (!coords.noleft) {
              if (battr !== cell[0] || ch !== cell[1]) {
                lines[y][xi][0] = battr;
                lines[y][xi][1] = ch;
                lines[y].dirty = true;
              }
            }
          } else {
            ch = " ";
            if (dattr !== cell[0] || ch !== cell[1]) {
              lines[y][xi][0] = dattr;
              lines[y][xi][1] = ch;
              lines[y].dirty = true;
            }
          }
        }
        cell = lines[y][xl - 1];
        if (cell) {
          if (this.border.right) {
            if (this.border.type === "line") {
              ch = "\u2502";
            } else if (this.border.type === "bg") {
              ch = this.border.ch;
            }
            if (!coords.noright) {
              if (battr !== cell[0] || ch !== cell[1]) {
                lines[y][xl - 1][0] = battr;
                lines[y][xl - 1][1] = ch;
                lines[y].dirty = true;
              }
            }
          } else {
            ch = " ";
            if (dattr !== cell[0] || ch !== cell[1]) {
              lines[y][xl - 1][0] = dattr;
              lines[y][xl - 1][1] = ch;
              lines[y].dirty = true;
            }
          }
        }
      }
      y = yl - 1;
      if (coords.nobot)
        y = -1;
      for (x = xi;x < xl; x++) {
        if (!lines[y])
          break;
        if (coords.noleft && x === xi)
          continue;
        if (coords.noright && x === xl - 1)
          continue;
        cell = lines[y][x];
        if (!cell)
          continue;
        if (this.border.type === "line") {
          if (x === xi) {
            ch = "\u2514";
            if (!this.border.left) {
              if (this.border.bottom) {
                ch = "\u2500";
              } else {
                continue;
              }
            } else {
              if (!this.border.bottom) {
                ch = "\u2502";
              }
            }
          } else if (x === xl - 1) {
            ch = "\u2518";
            if (!this.border.right) {
              if (this.border.bottom) {
                ch = "\u2500";
              } else {
                continue;
              }
            } else {
              if (!this.border.bottom) {
                ch = "\u2502";
              }
            }
          } else {
            ch = "\u2500";
          }
        } else if (this.border.type === "bg") {
          ch = this.border.ch;
        }
        if (!this.border.bottom && x !== xi && x !== xl - 1) {
          ch = " ";
          if (dattr !== cell[0] || ch !== cell[1]) {
            lines[y][x][0] = dattr;
            lines[y][x][1] = ch;
            lines[y].dirty = true;
          }
          continue;
        }
        if (battr !== cell[0] || ch !== cell[1]) {
          lines[y][x][0] = battr;
          lines[y][x][1] = ch;
          lines[y].dirty = true;
        }
      }
    }
    if (this.shadow) {
      y = Math.max(yi + 1, 0);
      for (;y < yl + 1; y++) {
        if (!lines[y])
          break;
        x = xl;
        for (;x < xl + 2; x++) {
          if (!lines[y][x])
            break;
          lines[y][x][0] = colors.blend(lines[y][x][0]);
          lines[y].dirty = true;
        }
      }
      y = yl;
      for (;y < yl + 1; y++) {
        if (!lines[y])
          break;
        for (x = Math.max(xi + 1, 0);x < xl; x++) {
          if (!lines[y][x])
            break;
          lines[y][x][0] = colors.blend(lines[y][x][0]);
          lines[y].dirty = true;
        }
      }
    }
    this.children.forEach(function(el) {
      if (el.screen._ci !== -1) {
        el.index = el.screen._ci++;
      }
      el.render();
    });
    this._emit("render", [coords]);
    return coords;
  };
  Element.prototype._render = Element.prototype.render;
  Element.prototype.insertLine = function(i, line) {
    if (typeof line === "string")
      line = line.split(`
`);
    if (i !== i || i == null) {
      i = this._clines.ftor.length;
    }
    i = Math.max(i, 0);
    while (this._clines.fake.length < i) {
      this._clines.fake.push("");
      this._clines.ftor.push([this._clines.push("") - 1]);
      this._clines.rtof(this._clines.fake.length - 1);
    }
    var start = this._clines.length, diff, real;
    if (i >= this._clines.ftor.length) {
      real = this._clines.ftor[this._clines.ftor.length - 1];
      real = real[real.length - 1] + 1;
    } else {
      real = this._clines.ftor[i][0];
    }
    for (var j = 0;j < line.length; j++) {
      this._clines.fake.splice(i + j, 0, line[j]);
    }
    this.setContent(this._clines.fake.join(`
`), true);
    diff = this._clines.length - start;
    if (diff > 0) {
      var pos = this._getCoords();
      if (!pos)
        return;
      var height = pos.yl - pos.yi - this.iheight, base = this.childBase || 0, visible = real >= base && real - base < height;
      if (pos && visible && this.screen.cleanSides(this)) {
        this.screen.insertLine(diff, pos.yi + this.itop + real - base, pos.yi, pos.yl - this.ibottom - 1);
      }
    }
  };
  Element.prototype.deleteLine = function(i, n) {
    n = n || 1;
    if (i !== i || i == null) {
      i = this._clines.ftor.length - 1;
    }
    i = Math.max(i, 0);
    i = Math.min(i, this._clines.ftor.length - 1);
    var start = this._clines.length, diff, real = this._clines.ftor[i][0];
    while (n--) {
      this._clines.fake.splice(i, 1);
    }
    this.setContent(this._clines.fake.join(`
`), true);
    diff = start - this._clines.length;
    var height = 0;
    if (diff > 0) {
      var pos = this._getCoords();
      if (!pos)
        return;
      height = pos.yl - pos.yi - this.iheight;
      var base = this.childBase || 0, visible = real >= base && real - base < height;
      if (pos && visible && this.screen.cleanSides(this)) {
        this.screen.deleteLine(diff, pos.yi + this.itop + real - base, pos.yi, pos.yl - this.ibottom - 1);
      }
    }
    if (this._clines.length < height) {
      this.clearPos();
    }
  };
  Element.prototype.insertTop = function(line) {
    var fake = this._clines.rtof[this.childBase || 0];
    return this.insertLine(fake, line);
  };
  Element.prototype.insertBottom = function(line) {
    var h = (this.childBase || 0) + this.height - this.iheight, i = Math.min(h, this._clines.length), fake = this._clines.rtof[i - 1] + 1;
    return this.insertLine(fake, line);
  };
  Element.prototype.deleteTop = function(n) {
    var fake = this._clines.rtof[this.childBase || 0];
    return this.deleteLine(fake, n);
  };
  Element.prototype.deleteBottom = function(n) {
    var h = (this.childBase || 0) + this.height - 1 - this.iheight, i = Math.min(h, this._clines.length - 1), fake = this._clines.rtof[i];
    n = n || 1;
    return this.deleteLine(fake - (n - 1), n);
  };
  Element.prototype.setLine = function(i, line) {
    i = Math.max(i, 0);
    while (this._clines.fake.length < i) {
      this._clines.fake.push("");
    }
    this._clines.fake[i] = line;
    return this.setContent(this._clines.fake.join(`
`), true);
  };
  Element.prototype.setBaseLine = function(i, line) {
    var fake = this._clines.rtof[this.childBase || 0];
    return this.setLine(fake + i, line);
  };
  Element.prototype.getLine = function(i) {
    i = Math.max(i, 0);
    i = Math.min(i, this._clines.fake.length - 1);
    return this._clines.fake[i];
  };
  Element.prototype.getBaseLine = function(i) {
    var fake = this._clines.rtof[this.childBase || 0];
    return this.getLine(fake + i);
  };
  Element.prototype.clearLine = function(i) {
    i = Math.min(i, this._clines.fake.length - 1);
    return this.setLine(i, "");
  };
  Element.prototype.clearBaseLine = function(i) {
    var fake = this._clines.rtof[this.childBase || 0];
    return this.clearLine(fake + i);
  };
  Element.prototype.unshiftLine = function(line) {
    return this.insertLine(0, line);
  };
  Element.prototype.shiftLine = function(n) {
    return this.deleteLine(0, n);
  };
  Element.prototype.pushLine = function(line) {
    if (!this.content)
      return this.setLine(0, line);
    return this.insertLine(this._clines.fake.length, line);
  };
  Element.prototype.popLine = function(n) {
    return this.deleteLine(this._clines.fake.length - 1, n);
  };
  Element.prototype.getLines = function() {
    return this._clines.fake.slice();
  };
  Element.prototype.getScreenLines = function() {
    return this._clines.slice();
  };
  Element.prototype.strWidth = function(text) {
    text = this.parseTags ? helpers.stripTags(text) : text;
    return this.screen.fullUnicode ? unicode.strWidth(text) : helpers.dropUnicode(text).length;
  };
  Element.prototype.screenshot = function(xi, xl, yi, yl) {
    xi = this.lpos.xi + this.ileft + (xi || 0);
    if (xl != null) {
      xl = this.lpos.xi + this.ileft + (xl || 0);
    } else {
      xl = this.lpos.xl - this.iright;
    }
    yi = this.lpos.yi + this.itop + (yi || 0);
    if (yl != null) {
      yl = this.lpos.yi + this.itop + (yl || 0);
    } else {
      yl = this.lpos.yl - this.ibottom;
    }
    return this.screen.screenshot(xi, xl, yi, yl);
  };
  module.exports = Element;
});

// node_modules/neo-blessed/lib/widgets/box.js
var require_box = __commonJS((exports, module) => {
  var Node = require_node();
  var Element = require_element();
  function Box(options) {
    if (!(this instanceof Node)) {
      return new Box(options);
    }
    options = options || {};
    Element.call(this, options);
  }
  Box.prototype.__proto__ = Element.prototype;
  Box.prototype.type = "box";
  module.exports = Box;
});

// node_modules/neo-blessed/lib/widgets/scrollablebox.js
var require_scrollablebox = __commonJS((exports, module) => {
  var Node = require_node();
  var Box = require_box();
  function ScrollableBox(options) {
    var self = this;
    if (!(this instanceof Node)) {
      return new ScrollableBox(options);
    }
    options = options || {};
    Box.call(this, options);
    if (options.scrollable === false) {
      return this;
    }
    this.scrollable = true;
    this.childOffset = 0;
    this.childBase = 0;
    this.baseLimit = options.baseLimit || Infinity;
    this.alwaysScroll = options.alwaysScroll;
    this.scrollbar = options.scrollbar;
    if (this.scrollbar) {
      this.scrollbar.ch = this.scrollbar.ch || " ";
      this.style.scrollbar = this.style.scrollbar || this.scrollbar.style;
      if (!this.style.scrollbar) {
        this.style.scrollbar = {};
        this.style.scrollbar.fg = this.scrollbar.fg;
        this.style.scrollbar.bg = this.scrollbar.bg;
        this.style.scrollbar.bold = this.scrollbar.bold;
        this.style.scrollbar.underline = this.scrollbar.underline;
        this.style.scrollbar.inverse = this.scrollbar.inverse;
        this.style.scrollbar.invisible = this.scrollbar.invisible;
      }
      if (this.track || this.scrollbar.track) {
        this.track = this.scrollbar.track || this.track;
        this.style.track = this.style.scrollbar.track || this.style.track;
        this.track.ch = this.track.ch || " ";
        this.style.track = this.style.track || this.track.style;
        if (!this.style.track) {
          this.style.track = {};
          this.style.track.fg = this.track.fg;
          this.style.track.bg = this.track.bg;
          this.style.track.bold = this.track.bold;
          this.style.track.underline = this.track.underline;
          this.style.track.inverse = this.track.inverse;
          this.style.track.invisible = this.track.invisible;
        }
        this.track.style = this.style.track;
      }
      if (options.mouse) {
        this.on("mousedown", function(data) {
          if (self._scrollingBar) {
            delete self.screen._dragging;
            delete self._drag;
            return;
          }
          var x = data.x - self.aleft;
          var y = data.y - self.atop;
          if (x === self.width - self.iright - 1) {
            delete self.screen._dragging;
            delete self._drag;
            var perc = (y - self.itop) / (self.height - self.iheight);
            self.setScrollPerc(perc * 100 | 0);
            self.screen.render();
            var smd, smu;
            self._scrollingBar = true;
            self.onScreenEvent("mousedown", smd = function(data2) {
              var y2 = data2.y - self.atop;
              var perc2 = y2 / self.height;
              self.setScrollPerc(perc2 * 100 | 0);
              self.screen.render();
            });
            self.onScreenEvent("mouseup", smu = function() {
              self._scrollingBar = false;
              self.removeScreenEvent("mousedown", smd);
              self.removeScreenEvent("mouseup", smu);
            });
          }
        });
      }
    }
    if (options.mouse) {
      this.on("wheeldown", function() {
        self.scroll(self.height / 2 | 0 || 1);
        self.screen.render();
      });
      this.on("wheelup", function() {
        self.scroll(-(self.height / 2 | 0) || -1);
        self.screen.render();
      });
    }
    if (options.keys && !options.ignoreKeys) {
      this.on("keypress", function(ch, key) {
        if (key.name === "up" || options.vi && key.name === "k") {
          self.scroll(-1);
          self.screen.render();
          return;
        }
        if (key.name === "down" || options.vi && key.name === "j") {
          self.scroll(1);
          self.screen.render();
          return;
        }
        if (options.vi && key.name === "u" && key.ctrl) {
          self.scroll(-(self.height / 2 | 0) || -1);
          self.screen.render();
          return;
        }
        if (options.vi && key.name === "d" && key.ctrl) {
          self.scroll(self.height / 2 | 0 || 1);
          self.screen.render();
          return;
        }
        if (options.vi && key.name === "b" && key.ctrl) {
          self.scroll(-self.height || -1);
          self.screen.render();
          return;
        }
        if (options.vi && key.name === "f" && key.ctrl) {
          self.scroll(self.height || 1);
          self.screen.render();
          return;
        }
        if (options.vi && key.name === "g" && !key.shift) {
          self.scrollTo(0);
          self.screen.render();
          return;
        }
        if (options.vi && key.name === "g" && key.shift) {
          self.scrollTo(self.getScrollHeight());
          self.screen.render();
          return;
        }
      });
    }
    this.on("parsed content", function() {
      self._recalculateIndex();
    });
    self._recalculateIndex();
  }
  ScrollableBox.prototype.__proto__ = Box.prototype;
  ScrollableBox.prototype.type = "scrollable-box";
  ScrollableBox.prototype.__defineGetter__("reallyScrollable", function() {
    if (this.shrink)
      return this.scrollable;
    return this.getScrollHeight() > this.height;
  });
  ScrollableBox.prototype._scrollBottom = function() {
    if (!this.scrollable)
      return 0;
    if (this._isList) {
      return this.items ? this.items.length : 0;
    }
    if (this.lpos && this.lpos._scrollBottom) {
      return this.lpos._scrollBottom;
    }
    var bottom = this.children.reduce(function(current, el) {
      if (!el.detached) {
        var lpos = el._getCoords(false, true);
        if (lpos) {
          return Math.max(current, el.rtop + (lpos.yl - lpos.yi));
        }
      }
      return Math.max(current, el.rtop + el.height);
    }, 0);
    if (this.lpos)
      this.lpos._scrollBottom = bottom;
    return bottom;
  };
  ScrollableBox.prototype.setScroll = ScrollableBox.prototype.scrollTo = function(offset, always) {
    this.scroll(0);
    return this.scroll(offset - (this.childBase + this.childOffset), always);
  };
  ScrollableBox.prototype.getScroll = function() {
    return this.childBase + this.childOffset;
  };
  ScrollableBox.prototype.scroll = function(offset, always) {
    if (!this.scrollable)
      return;
    if (this.detached)
      return;
    var visible = this.height - this.iheight, base = this.childBase, d, p, t, b, max, emax;
    if (this.alwaysScroll || always) {
      this.childOffset = offset > 0 ? visible - 1 + offset : offset;
    } else {
      this.childOffset += offset;
    }
    if (this.childOffset > visible - 1) {
      d = this.childOffset - (visible - 1);
      this.childOffset -= d;
      this.childBase += d;
    } else if (this.childOffset < 0) {
      d = this.childOffset;
      this.childOffset += -d;
      this.childBase += d;
    }
    if (this.childBase < 0) {
      this.childBase = 0;
    } else if (this.childBase > this.baseLimit) {
      this.childBase = this.baseLimit;
    }
    if (this.childBase === base) {
      return this.emit("scroll");
    }
    this.parseContent();
    max = this._clines.length - (this.height - this.iheight);
    if (max < 0)
      max = 0;
    emax = this._scrollBottom() - (this.height - this.iheight);
    if (emax < 0)
      emax = 0;
    this.childBase = Math.min(this.childBase, Math.max(emax, max));
    if (this.childBase < 0) {
      this.childBase = 0;
    } else if (this.childBase > this.baseLimit) {
      this.childBase = this.baseLimit;
    }
    p = this.lpos;
    if (p && this.childBase !== base && this.screen.cleanSides(this)) {
      t = p.yi + this.itop;
      b = p.yl - this.ibottom - 1;
      d = this.childBase - base;
      if (d > 0 && d < visible) {
        this.screen.deleteLine(d, t, t, b);
      } else if (d < 0 && -d < visible) {
        d = -d;
        this.screen.insertLine(d, t, t, b);
      }
    }
    return this.emit("scroll");
  };
  ScrollableBox.prototype._recalculateIndex = function() {
    var max, emax;
    if (this.detached || !this.scrollable) {
      return 0;
    }
    max = this._clines.length - (this.height - this.iheight);
    if (max < 0)
      max = 0;
    emax = this._scrollBottom() - (this.height - this.iheight);
    if (emax < 0)
      emax = 0;
    this.childBase = Math.min(this.childBase, Math.max(emax, max));
    if (this.childBase < 0) {
      this.childBase = 0;
    } else if (this.childBase > this.baseLimit) {
      this.childBase = this.baseLimit;
    }
  };
  ScrollableBox.prototype.resetScroll = function() {
    if (!this.scrollable)
      return;
    this.childOffset = 0;
    this.childBase = 0;
    return this.emit("scroll");
  };
  ScrollableBox.prototype.getScrollHeight = function() {
    return Math.max(this._clines.length, this._scrollBottom());
  };
  ScrollableBox.prototype.getScrollPerc = function(s) {
    var pos = this.lpos || this._getCoords();
    if (!pos)
      return s ? -1 : 0;
    var height = pos.yl - pos.yi - this.iheight, i = this.getScrollHeight(), p;
    if (height < i) {
      if (this.alwaysScroll) {
        p = this.childBase / (i - height);
      } else {
        p = (this.childBase + this.childOffset) / (i - 1);
      }
      return p * 100;
    }
    return s ? -1 : 0;
  };
  ScrollableBox.prototype.setScrollPerc = function(i) {
    var m = Math.max(this._clines.length, this._scrollBottom());
    return this.scrollTo(i / 100 * m | 0);
  };
  module.exports = ScrollableBox;
});

// node_modules/neo-blessed/lib/widgets/scrollabletext.js
var require_scrollabletext = __commonJS((exports, module) => {
  var Node = require_node();
  var ScrollableBox = require_scrollablebox();
  function ScrollableText(options) {
    if (!(this instanceof Node)) {
      return new ScrollableText(options);
    }
    options = options || {};
    options.alwaysScroll = true;
    ScrollableBox.call(this, options);
  }
  ScrollableText.prototype.__proto__ = ScrollableBox.prototype;
  ScrollableText.prototype.type = "scrollable-text";
  module.exports = ScrollableText;
});

// node_modules/neo-blessed/lib/widgets/log.js
var require_log = __commonJS((exports, module) => {
  var util = __require("util");
  var nextTick = global.setImmediate || process.nextTick.bind(process);
  var Node = require_node();
  var ScrollableText = require_scrollabletext();
  function Log(options) {
    var self = this;
    if (!(this instanceof Node)) {
      return new Log(options);
    }
    options = options || {};
    ScrollableText.call(this, options);
    this.scrollback = options.scrollback != null ? options.scrollback : Infinity;
    this.scrollOnInput = options.scrollOnInput;
    this.on("set content", function() {
      if (!self._userScrolled || self.scrollOnInput) {
        nextTick(function() {
          self.setScrollPerc(100);
          self._userScrolled = false;
          self.screen.render();
        });
      }
    });
  }
  Log.prototype.__proto__ = ScrollableText.prototype;
  Log.prototype.type = "log";
  Log.prototype.log = Log.prototype.add = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === "object") {
      let output = util.inspect(args[0], { depth: 1, colors: true, maxArrayLength: 50 });
      if (output.length < 1000) {
        let output2 = util.inspect(args[0], { depth: 2, colors: true, maxArrayLength: 50 });
      }
      args[0] = output;
    }
    var text = util.format.apply(util, args);
    this.emit("log", text);
    var ret = this.pushLine(text);
    if (this._clines.fake.length > this.scrollback) {
      this.shiftLine(0, this.scrollback / 3 | 0);
    }
    return ret;
  };
  Log.prototype._scroll = Log.prototype.scroll;
  Log.prototype.scroll = function(offset, always) {
    if (offset === 0)
      return this._scroll(offset, always);
    this._userScrolled = true;
    var ret = this._scroll(offset, always);
    if (this.getScrollPerc() === 100) {
      this._userScrolled = false;
    }
    return ret;
  };
  module.exports = Log;
});

// node_modules/neo-blessed/lib/widgets/screen.js
var require_screen = __commonJS((exports, module) => {
  var path = __require("path");
  var fs = __require("fs");
  var cp = __require("child_process");
  var colors = require_colors();
  var program = require_program();
  var unicode = require_unicode();
  var nextTick = global.setImmediate || process.nextTick.bind(process);
  var helpers = require_helpers();
  var Node = require_node();
  var Log = require_log();
  var Element = require_element();
  var Box = require_box();
  function Screen(options) {
    var self = this;
    if (!(this instanceof Node)) {
      return new Screen(options);
    }
    Screen.bind(this);
    options = options || {};
    if (options.rsety && options.listen) {
      options = { program: options };
    }
    this.program = options.program;
    if (!this.program) {
      this.program = program({
        input: options.input,
        output: options.output,
        log: options.log,
        debug: options.debug,
        dump: options.dump,
        terminal: options.terminal || options.term,
        resizeTimeout: options.resizeTimeout,
        forceUnicode: options.forceUnicode,
        tput: true,
        buffer: true,
        zero: true
      });
    } else {
      this.program.setupTput();
      this.program.useBuffer = true;
      this.program.zero = true;
      this.program.options.resizeTimeout = options.resizeTimeout;
      if (options.forceUnicode != null) {
        this.program.tput.features.unicode = options.forceUnicode;
        this.program.tput.unicode = options.forceUnicode;
      }
    }
    this.tput = this.program.tput;
    Node.call(this, options);
    this.autoPadding = options.autoPadding !== false;
    this.tabc = Array((options.tabSize || 4) + 1).join(" ");
    this.dockBorders = options.dockBorders;
    this.ignoreLocked = options.ignoreLocked || [];
    this._unicode = this.tput.unicode || this.tput.numbers.U8 === 1;
    this.fullUnicode = this.options.fullUnicode && this._unicode;
    this.dattr = 0 << 18 | 511 << 9 | 511;
    this.renders = 0;
    this.position = {
      left: this.left = this.aleft = this.rleft = 0,
      right: this.right = this.aright = this.rright = 0,
      top: this.top = this.atop = this.rtop = 0,
      bottom: this.bottom = this.abottom = this.rbottom = 0,
      get height() {
        return self.height;
      },
      get width() {
        return self.width;
      }
    };
    this.ileft = 0;
    this.itop = 0;
    this.iright = 0;
    this.ibottom = 0;
    this.iheight = 0;
    this.iwidth = 0;
    this.padding = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    this.hover = null;
    this.history = [];
    this.clickable = [];
    this.keyable = [];
    this.grabKeys = false;
    this.lockKeys = false;
    this.focused;
    this._buf = "";
    this._ci = -1;
    if (options.title) {
      this.title = options.title;
    }
    options.cursor = options.cursor || {
      artificial: options.artificialCursor,
      shape: options.cursorShape,
      blink: options.cursorBlink,
      color: options.cursorColor
    };
    this.cursor = {
      artificial: options.cursor.artificial || false,
      shape: options.cursor.shape || "block",
      blink: options.cursor.blink || false,
      color: options.cursor.color || null,
      _set: false,
      _state: 1,
      _hidden: true
    };
    this.program.on("resize", function() {
      self.alloc();
      self.render();
      (function emit(el) {
        el.emit("resize");
        el.children.forEach(emit);
      })(self);
    });
    this.program.on("focus", function() {
      self.emit("focus");
    });
    this.program.on("blur", function() {
      self.emit("blur");
    });
    this.program.on("warning", function(text) {
      self.emit("warning", text);
    });
    this.on("newListener", function fn(type) {
      if (type === "keypress" || type.indexOf("key ") === 0 || type === "mouse") {
        if (type === "keypress" || type.indexOf("key ") === 0)
          self._listenKeys();
        if (type === "mouse")
          self._listenMouse();
      }
      if (type === "mouse" || type === "click" || type === "mouseover" || type === "mouseout" || type === "mousedown" || type === "mouseup" || type === "mousewheel" || type === "wheeldown" || type === "wheelup" || type === "mousemove") {
        self._listenMouse();
      }
    });
    this.setMaxListeners(Infinity);
    this.enter();
    this.postEnter();
  }
  Screen.global = null;
  Screen.total = 0;
  Screen.instances = [];
  Screen.bind = function(screen) {
    if (!Screen.global) {
      Screen.global = screen;
    }
    if (!~Screen.instances.indexOf(screen)) {
      Screen.instances.push(screen);
      screen.index = Screen.total;
      Screen.total++;
    }
    if (Screen._bound)
      return;
    Screen._bound = true;
    process.on("uncaughtException", Screen._exceptionHandler = function(err) {
      if (process.listeners("uncaughtException").length > 1) {
        return;
      }
      Screen.instances.slice().forEach(function(screen2) {
        screen2.destroy();
      });
      err = err || new Error("Uncaught Exception.");
      console.error(err.stack ? err.stack + "" : err + "");
      nextTick(function() {
        process.exit(1);
      });
    });
    ["SIGTERM", "SIGINT", "SIGQUIT"].forEach(function(signal) {
      var name = "_" + signal.toLowerCase() + "Handler";
      process.on(signal, Screen[name] = function() {
        if (process.listeners(signal).length > 1) {
          return;
        }
        nextTick(function() {
          process.exit(0);
        });
      });
    });
    process.on("exit", Screen._exitHandler = function() {
      Screen.instances.slice().forEach(function(screen2) {
        screen2.destroy();
      });
    });
  };
  Screen.prototype.__proto__ = Node.prototype;
  Screen.prototype.type = "screen";
  Screen.prototype.__defineGetter__("title", function() {
    return this.program.title;
  });
  Screen.prototype.__defineSetter__("title", function(title) {
    return this.program.title = title;
  });
  Screen.prototype.__defineGetter__("terminal", function() {
    return this.program.terminal;
  });
  Screen.prototype.__defineSetter__("terminal", function(terminal) {
    this.setTerminal(terminal);
    return this.program.terminal;
  });
  Screen.prototype.setTerminal = function(terminal) {
    var entered = !!this.program.isAlt;
    if (entered) {
      this._buf = "";
      this.program._buf = "";
      this.leave();
    }
    this.program.setTerminal(terminal);
    this.tput = this.program.tput;
    if (entered) {
      this.enter();
    }
  };
  Screen.prototype.enter = function() {
    if (this.program.isAlt)
      return;
    if (!this.cursor._set) {
      if (this.options.cursor.shape) {
        this.cursorShape(this.cursor.shape, this.cursor.blink);
      }
      if (this.options.cursor.color) {
        this.cursorColor(this.cursor.color);
      }
    }
    if (process.platform === "win32") {
      try {
        cp.execSync("cls", { stdio: "ignore", timeout: 1000 });
      } catch (e) {}
    }
    this.program.alternateBuffer();
    this.program.put.keypad_xmit();
    this.program.csr(0, this.height - 1);
    this.program.hideCursor();
    this.program.cup(0, 0);
    if (this.tput.strings.ena_acs) {
      this.program._write(this.tput.enacs());
    }
    this.alloc();
  };
  Screen.prototype.leave = function() {
    if (!this.program.isAlt)
      return;
    this.program.put.keypad_local();
    if (this.program.scrollTop !== 0 || this.program.scrollBottom !== this.rows - 1) {
      this.program.csr(0, this.height - 1);
    }
    this.program.showCursor();
    this.alloc();
    if (this._listenedMouse) {
      this.program.disableMouse();
    }
    this.program.normalBuffer();
    if (this.cursor._set)
      this.cursorReset();
    this.program.flush();
    if (process.platform === "win32") {
      try {
        cp.execSync("cls", { stdio: "ignore", timeout: 1000 });
      } catch (e) {}
    }
  };
  Screen.prototype.postEnter = function() {
    var self = this;
    if (this.options.debug) {
      this.debugLog = new Log({
        screen: this,
        parent: this,
        hidden: true,
        draggable: true,
        left: "center",
        top: "center",
        width: "30%",
        height: "30%",
        border: "line",
        label: " {bold}Debug Log{/bold} ",
        tags: true,
        keys: true,
        vi: true,
        mouse: true,
        scrollbar: {
          ch: " ",
          track: {
            bg: "yellow"
          },
          style: {
            inverse: true
          }
        }
      });
      this.debugLog.toggle = function() {
        if (self.debugLog.hidden) {
          self.saveFocus();
          self.debugLog.show();
          self.debugLog.setFront();
          self.debugLog.focus();
        } else {
          self.debugLog.hide();
          self.restoreFocus();
        }
        self.render();
      };
      this.debugLog.key(["q", "escape"], self.debugLog.toggle);
      this.key("f12", self.debugLog.toggle);
    }
    if (this.options.warnings) {
      this.on("warning", function(text) {
        var warning = new Box({
          screen: self,
          parent: self,
          left: "center",
          top: "center",
          width: "shrink",
          padding: 1,
          height: "shrink",
          align: "center",
          valign: "middle",
          border: "line",
          label: " {red-fg}{bold}WARNING{/} ",
          content: "{bold}" + text + "{/bold}",
          tags: true
        });
        self.render();
        var timeout = setTimeout(function() {
          warning.destroy();
          self.render();
        }, 1500);
        if (timeout.unref) {
          timeout.unref();
        }
      });
    }
  };
  Screen.prototype._destroy = Screen.prototype.destroy;
  Screen.prototype.destroy = function() {
    this.leave();
    var index = Screen.instances.indexOf(this);
    if (~index) {
      Screen.instances.splice(index, 1);
      Screen.total--;
      Screen.global = Screen.instances[0];
      if (Screen.total === 0) {
        Screen.global = null;
        process.removeListener("uncaughtException", Screen._exceptionHandler);
        process.removeListener("SIGTERM", Screen._sigtermHandler);
        process.removeListener("SIGINT", Screen._sigintHandler);
        process.removeListener("SIGQUIT", Screen._sigquitHandler);
        process.removeListener("exit", Screen._exitHandler);
        delete Screen._exceptionHandler;
        delete Screen._sigtermHandler;
        delete Screen._sigintHandler;
        delete Screen._sigquitHandler;
        delete Screen._exitHandler;
        delete Screen._bound;
      }
      this.destroyed = true;
      this.emit("destroy");
      this._destroy();
    }
    this.program.destroy();
  };
  Screen.prototype.log = function() {
    return this.program.log.apply(this.program, arguments);
  };
  Screen.prototype.debug = function() {
    if (this.debugLog) {
      this.debugLog.log.apply(this.debugLog, arguments);
    }
    return this.program.debug.apply(this.program, arguments);
  };
  Screen.prototype._listenMouse = function(el) {
    var self = this;
    if (el && !~this.clickable.indexOf(el)) {
      el.clickable = true;
      this.clickable.push(el);
    }
    if (this._listenedMouse)
      return;
    this._listenedMouse = true;
    this.program.enableMouse();
    if (this.options.sendFocus) {
      this.program.setMouse({ sendFocus: true }, true);
    }
    this.on("render", function() {
      self._needsClickableSort = true;
    });
    this.program.on("mouse", function(data) {
      if (self.lockKeys)
        return;
      if (self._needsClickableSort) {
        self.clickable = helpers.hsort(self.clickable);
        self._needsClickableSort = false;
      }
      var i = 0, el2, set, pos;
      for (;i < self.clickable.length; i++) {
        el2 = self.clickable[i];
        if (el2.detached || !el2.visible) {
          continue;
        }
        pos = el2.lpos;
        if (!pos)
          continue;
        if (data.x >= pos.xi && data.x < pos.xl && data.y >= pos.yi && data.y < pos.yl) {
          el2.emit("mouse", data);
          if (data.action === "mousedown") {
            self.mouseDown = el2;
          } else if (data.action === "mouseup") {
            (self.mouseDown || el2).emit("click", data);
            self.mouseDown = null;
          } else if (data.action === "mousemove") {
            if (self.hover && el2.index > self.hover.index) {
              set = false;
            }
            if (self.hover !== el2 && !set) {
              if (self.hover) {
                self.hover.emit("mouseout", data);
              }
              el2.emit("mouseover", data);
              self.hover = el2;
            }
            set = true;
          }
          el2.emit(data.action, data);
          break;
        }
      }
      if ((data.action === "mousemove" || data.action === "mousedown" || data.action === "mouseup") && self.hover && !set) {
        self.hover.emit("mouseout", data);
        self.hover = null;
      }
      self.emit("mouse", data);
      self.emit(data.action, data);
    });
    this.on("element click", function(el2) {
      if (el2.clickable === true && el2.options.autoFocus !== false) {
        el2.focus();
      }
    });
  };
  Screen.prototype.enableMouse = function(el) {
    this._listenMouse(el);
  };
  Screen.prototype._listenKeys = function(el) {
    var self = this;
    if (el && !~this.keyable.indexOf(el)) {
      el.keyable = true;
      this.keyable.push(el);
    }
    if (this._listenedKeys)
      return;
    this._listenedKeys = true;
    this.program.on("keypress", function(ch, key) {
      if (self.lockKeys && !~self.ignoreLocked.indexOf(key.full)) {
        return;
      }
      var { focused, grabKeys } = self;
      if (!grabKeys || ~self.ignoreLocked.indexOf(key.full)) {
        self.emit("keypress", ch, key);
        self.emit("key " + key.full, ch, key);
      }
      if (self.grabKeys !== grabKeys || self.lockKeys) {
        return;
      }
      if (focused && focused.keyable) {
        focused.emit("keypress", ch, key);
        focused.emit("key " + key.full, ch, key);
      }
    });
  };
  Screen.prototype.enableKeys = function(el) {
    this._listenKeys(el);
  };
  Screen.prototype.enableInput = function(el) {
    this._listenMouse(el);
    this._listenKeys(el);
  };
  Screen.prototype._initHover = function() {
    var self = this;
    if (this._hoverText) {
      return;
    }
    this._hoverText = new Box({
      screen: this,
      left: 0,
      top: 0,
      tags: false,
      height: "shrink",
      width: "shrink",
      border: "line",
      style: {
        border: {
          fg: "default"
        },
        bg: "default",
        fg: "default"
      }
    });
    this.on("mousemove", function(data) {
      if (self._hoverText.detached)
        return;
      self._hoverText.rleft = data.x + 1;
      self._hoverText.rtop = data.y;
      self.render();
    });
    this.on("element mouseover", function(el, data) {
      if (!el._hoverOptions)
        return;
      self._hoverText.parseTags = el.parseTags;
      self._hoverText.setContent(el._hoverOptions.text);
      self.append(self._hoverText);
      self._hoverText.rleft = data.x + 1;
      self._hoverText.rtop = data.y;
      self.render();
    });
    this.on("element mouseout", function() {
      if (self._hoverText.detached)
        return;
      self._hoverText.detach();
      self.render();
    });
    this.on("element mouseup", function(el) {
      if (!self._hoverText.getContent())
        return;
      if (!el._hoverOptions)
        return;
      self.append(self._hoverText);
      self.render();
    });
  };
  Screen.prototype.__defineGetter__("cols", function() {
    return this.program.cols;
  });
  Screen.prototype.__defineGetter__("rows", function() {
    return this.program.rows;
  });
  Screen.prototype.__defineGetter__("width", function() {
    return this.program.cols;
  });
  Screen.prototype.__defineGetter__("height", function() {
    return this.program.rows;
  });
  Screen.prototype.alloc = function(dirty) {
    var x, y;
    this.lines = [];
    for (y = 0;y < this.rows; y++) {
      this.lines[y] = [];
      for (x = 0;x < this.cols; x++) {
        this.lines[y][x] = [this.dattr, " "];
      }
      this.lines[y].dirty = !!dirty;
    }
    this.olines = [];
    for (y = 0;y < this.rows; y++) {
      this.olines[y] = [];
      for (x = 0;x < this.cols; x++) {
        this.olines[y][x] = [this.dattr, " "];
      }
    }
    this.program.clear();
  };
  Screen.prototype.realloc = function() {
    return this.alloc(true);
  };
  Screen.prototype.render = function() {
    var self = this;
    if (this.destroyed)
      return;
    this.emit("prerender");
    this._borderStops = {};
    this._ci = 0;
    this.children.forEach(function(el) {
      el.index = self._ci++;
      el.render();
    });
    this._ci = -1;
    if (this.screen.dockBorders) {
      this._dockBorders();
    }
    this.draw(0, this.lines.length - 1);
    if (this.focused && this.focused._updateCursor) {
      this.focused._updateCursor(true);
    }
    this.renders++;
    this.emit("render");
  };
  Screen.prototype.blankLine = function(ch, dirty) {
    var out = [];
    for (var x = 0;x < this.cols; x++) {
      out[x] = [this.dattr, ch || " "];
    }
    out.dirty = dirty;
    return out;
  };
  Screen.prototype.insertLine = function(n, y, top, bottom) {
    if (!this.tput.strings.change_scroll_region || !this.tput.strings.delete_line || !this.tput.strings.insert_line)
      return;
    this._buf += this.tput.csr(top, bottom);
    this._buf += this.tput.cup(y, 0);
    this._buf += this.tput.il(n);
    this._buf += this.tput.csr(0, this.height - 1);
    var j = bottom + 1;
    while (n--) {
      this.lines.splice(y, 0, this.blankLine());
      this.lines.splice(j, 1);
      this.olines.splice(y, 0, this.blankLine());
      this.olines.splice(j, 1);
    }
  };
  Screen.prototype.deleteLine = function(n, y, top, bottom) {
    if (!this.tput.strings.change_scroll_region || !this.tput.strings.delete_line || !this.tput.strings.insert_line)
      return;
    this._buf += this.tput.csr(top, bottom);
    this._buf += this.tput.cup(y, 0);
    this._buf += this.tput.dl(n);
    this._buf += this.tput.csr(0, this.height - 1);
    var j = bottom + 1;
    while (n--) {
      this.lines.splice(j, 0, this.blankLine());
      this.lines.splice(y, 1);
      this.olines.splice(j, 0, this.blankLine());
      this.olines.splice(y, 1);
    }
  };
  Screen.prototype.insertLineNC = function(n, y, top, bottom) {
    if (!this.tput.strings.change_scroll_region || !this.tput.strings.delete_line)
      return;
    this._buf += this.tput.csr(top, bottom);
    this._buf += this.tput.cup(top, 0);
    this._buf += this.tput.dl(n);
    this._buf += this.tput.csr(0, this.height - 1);
    var j = bottom + 1;
    while (n--) {
      this.lines.splice(j, 0, this.blankLine());
      this.lines.splice(y, 1);
      this.olines.splice(j, 0, this.blankLine());
      this.olines.splice(y, 1);
    }
  };
  Screen.prototype.deleteLineNC = function(n, y, top, bottom) {
    if (!this.tput.strings.change_scroll_region || !this.tput.strings.delete_line)
      return;
    this._buf += this.tput.csr(top, bottom);
    this._buf += this.tput.cup(bottom, 0);
    this._buf += Array(n + 1).join(`
`);
    this._buf += this.tput.csr(0, this.height - 1);
    var j = bottom + 1;
    while (n--) {
      this.lines.splice(j, 0, this.blankLine());
      this.lines.splice(y, 1);
      this.olines.splice(j, 0, this.blankLine());
      this.olines.splice(y, 1);
    }
  };
  Screen.prototype.insertBottom = function(top, bottom) {
    return this.deleteLine(1, top, top, bottom);
  };
  Screen.prototype.insertTop = function(top, bottom) {
    return this.insertLine(1, top, top, bottom);
  };
  Screen.prototype.deleteBottom = function(top, bottom) {
    return this.clearRegion(0, this.width, bottom, bottom);
  };
  Screen.prototype.deleteTop = function(top, bottom) {
    return this.deleteLine(1, top, top, bottom);
  };
  Screen.prototype.cleanSides = function(el) {
    var pos = el.lpos;
    if (!pos) {
      return false;
    }
    if (pos._cleanSides != null) {
      return pos._cleanSides;
    }
    if (pos.xi <= 0 && pos.xl >= this.width) {
      return pos._cleanSides = true;
    }
    if (this.options.fastCSR) {
      if (pos.yi < 0)
        return pos._cleanSides = false;
      if (pos.yl > this.height)
        return pos._cleanSides = false;
      if (this.width - (pos.xl - pos.xi) < 40) {
        return pos._cleanSides = true;
      }
      return pos._cleanSides = false;
    }
    if (!this.options.smartCSR) {
      return false;
    }
    var yi = pos.yi + el.itop, yl = pos.yl - el.ibottom, first, ch, x, y;
    if (pos.yi < 0)
      return pos._cleanSides = false;
    if (pos.yl > this.height)
      return pos._cleanSides = false;
    if (pos.xi - 1 < 0)
      return pos._cleanSides = true;
    if (pos.xl > this.width)
      return pos._cleanSides = true;
    for (x = pos.xi - 1;x >= 0; x--) {
      if (!this.olines[yi])
        break;
      first = this.olines[yi][x];
      for (y = yi;y < yl; y++) {
        if (!this.olines[y] || !this.olines[y][x])
          break;
        ch = this.olines[y][x];
        if (ch[0] !== first[0] || ch[1] !== first[1]) {
          return pos._cleanSides = false;
        }
      }
    }
    for (x = pos.xl;x < this.width; x++) {
      if (!this.olines[yi])
        break;
      first = this.olines[yi][x];
      for (y = yi;y < yl; y++) {
        if (!this.olines[y] || !this.olines[y][x])
          break;
        ch = this.olines[y][x];
        if (ch[0] !== first[0] || ch[1] !== first[1]) {
          return pos._cleanSides = false;
        }
      }
    }
    return pos._cleanSides = true;
  };
  Screen.prototype._dockBorders = function() {
    var lines = this.lines, stops = this._borderStops, i, y, x, ch;
    stops = Object.keys(stops).map(function(k) {
      return +k;
    }).sort(function(a, b) {
      return a - b;
    });
    for (i = 0;i < stops.length; i++) {
      y = stops[i];
      if (!lines[y])
        continue;
      for (x = 0;x < this.width; x++) {
        ch = lines[y][x][1];
        if (angles[ch]) {
          lines[y][x][1] = this._getAngle(lines, x, y);
          lines[y].dirty = true;
        }
      }
    }
  };
  Screen.prototype._getAngle = function(lines, x, y) {
    var angle = 0, attr = lines[y][x][0], ch = lines[y][x][1];
    if (lines[y][x - 1] && langles[lines[y][x - 1][1]]) {
      if (!this.options.ignoreDockContrast) {
        if (lines[y][x - 1][0] !== attr)
          return ch;
      }
      angle |= 1 << 3;
    }
    if (lines[y - 1] && uangles[lines[y - 1][x][1]]) {
      if (!this.options.ignoreDockContrast) {
        if (lines[y - 1][x][0] !== attr)
          return ch;
      }
      angle |= 1 << 2;
    }
    if (lines[y][x + 1] && rangles[lines[y][x + 1][1]]) {
      if (!this.options.ignoreDockContrast) {
        if (lines[y][x + 1][0] !== attr)
          return ch;
      }
      angle |= 1 << 1;
    }
    if (lines[y + 1] && dangles[lines[y + 1][x][1]]) {
      if (!this.options.ignoreDockContrast) {
        if (lines[y + 1][x][0] !== attr)
          return ch;
      }
      angle |= 1 << 0;
    }
    return angleTable[angle] || ch;
  };
  Screen.prototype.draw = function(start, end) {
    var x, y, line, out, ch, data, attr, fg, bg, flags;
    var main = "", pre, post;
    var clr, neq, xx;
    var lx = -1, ly = -1, o;
    var acs;
    if (this._buf) {
      main += this._buf;
      this._buf = "";
    }
    for (y = start;y <= end; y++) {
      line = this.lines[y];
      o = this.olines[y];
      if (!line.dirty && !(this.cursor.artificial && y === this.program.y)) {
        continue;
      }
      line.dirty = false;
      out = "";
      attr = this.dattr;
      for (x = 0;x < line.length; x++) {
        data = line[x][0];
        ch = line[x][1];
        if (this.cursor.artificial && !this.cursor._hidden && this.cursor._state && x === this.program.x && y === this.program.y) {
          var cattr = this._cursorAttr(this.cursor, data);
          if (cattr.ch)
            ch = cattr.ch;
          data = cattr.attr;
        }
        if (this.options.useBCE && ch === " " && (this.tput.bools.back_color_erase || (data & 511) === (this.dattr & 511)) && (data >> 18 & 8) === (this.dattr >> 18 & 8)) {
          clr = true;
          neq = false;
          for (xx = x;xx < line.length; xx++) {
            if (line[xx][0] !== data || line[xx][1] !== " ") {
              clr = false;
              break;
            }
            if (line[xx][0] !== o[xx][0] || line[xx][1] !== o[xx][1]) {
              neq = true;
            }
          }
          if (clr && neq) {
            lx = -1, ly = -1;
            if (data !== attr) {
              out += this.codeAttr(data);
              attr = data;
            }
            out += this.tput.cup(y, x);
            out += this.tput.el();
            for (xx = x;xx < line.length; xx++) {
              o[xx][0] = data;
              o[xx][1] = " ";
            }
            break;
          }
        }
        if (data === o[x][0] && ch === o[x][1]) {
          if (lx === -1) {
            lx = x;
            ly = y;
          }
          continue;
        } else if (lx !== -1) {
          if (this.tput.strings.parm_right_cursor) {
            out += y === ly ? this.tput.cuf(x - lx) : this.tput.cup(y, x);
          } else {
            out += this.tput.cup(y, x);
          }
          lx = -1, ly = -1;
        }
        o[x][0] = data;
        o[x][1] = ch;
        if (data !== attr) {
          if (attr !== this.dattr) {
            out += "\x1B[m";
          }
          if (data !== this.dattr) {
            out += "\x1B[";
            bg = data & 511;
            fg = data >> 9 & 511;
            flags = data >> 18;
            if (flags & 1) {
              out += "1;";
            }
            if (flags & 2) {
              out += "4;";
            }
            if (flags & 4) {
              out += "5;";
            }
            if (flags & 8) {
              out += "7;";
            }
            if (flags & 16) {
              out += "8;";
            }
            if (bg !== 511) {
              bg = this._reduceColor(bg);
              if (bg < 16) {
                if (bg < 8) {
                  bg += 40;
                } else if (bg < 16) {
                  bg -= 8;
                  bg += 100;
                }
                out += bg + ";";
              } else {
                out += "48;5;" + bg + ";";
              }
            }
            if (fg !== 511) {
              fg = this._reduceColor(fg);
              if (fg < 16) {
                if (fg < 8) {
                  fg += 30;
                } else if (fg < 16) {
                  fg -= 8;
                  fg += 90;
                }
                out += fg + ";";
              } else {
                out += "38;5;" + fg + ";";
              }
            }
            if (out[out.length - 1] === ";")
              out = out.slice(0, -1);
            out += "m";
          }
        }
        if (this.fullUnicode) {
          if (unicode.charWidth(line[x][1]) === 2) {
            if (x === line.length - 1 || angles[line[x + 1][1]]) {
              ch = " ";
              o[x][1] = "\x00";
            } else {
              o[x][1] = "\x00";
              o[++x][1] = "\x00";
            }
          }
        }
        if (this.tput.strings.enter_alt_charset_mode && !this.tput.brokenACS && (this.tput.acscr[ch] || acs)) {
          if (this.tput.acscr[ch]) {
            if (acs) {
              ch = this.tput.acscr[ch];
            } else {
              ch = this.tput.smacs() + this.tput.acscr[ch];
              acs = true;
            }
          } else if (acs) {
            ch = this.tput.rmacs() + ch;
            acs = false;
          }
        } else {
          if (!this.tput.unicode && this.tput.numbers.U8 !== 1 && ch > "~") {
            ch = this.tput.utoa[ch] || "?";
          }
        }
        out += ch;
        attr = data;
      }
      if (attr !== this.dattr) {
        out += "\x1B[m";
      }
      if (out) {
        main += this.tput.cup(y, 0) + out;
      }
    }
    if (acs) {
      main += this.tput.rmacs();
      acs = false;
    }
    if (main) {
      pre = "";
      post = "";
      pre += this.tput.sc();
      post += this.tput.rc();
      if (!this.program.cursorHidden) {
        pre += this.tput.civis();
        post += this.tput.cnorm();
      }
      this.program._write(pre + main + post);
    }
  };
  Screen.prototype._reduceColor = function(color) {
    return colors.reduce(color, this.tput.colors);
  };
  Screen.prototype.attrCode = function(code, cur, def) {
    var flags = cur >> 18 & 511, fg = cur >> 9 & 511, bg = cur & 511, c, i;
    code = code.slice(2, -1).split(";");
    if (!code[0])
      code[0] = "0";
    for (i = 0;i < code.length; i++) {
      c = +code[i] || 0;
      switch (c) {
        case 0:
          bg = def & 511;
          fg = def >> 9 & 511;
          flags = def >> 18 & 511;
          break;
        case 1:
          flags |= 1;
          break;
        case 22:
          flags = def >> 18 & 511;
          break;
        case 4:
          flags |= 2;
          break;
        case 24:
          flags = def >> 18 & 511;
          break;
        case 5:
          flags |= 4;
          break;
        case 25:
          flags = def >> 18 & 511;
          break;
        case 7:
          flags |= 8;
          break;
        case 27:
          flags = def >> 18 & 511;
          break;
        case 8:
          flags |= 16;
          break;
        case 28:
          flags = def >> 18 & 511;
          break;
        case 39:
          fg = def >> 9 & 511;
          break;
        case 49:
          bg = def & 511;
          break;
        case 100:
          fg = def >> 9 & 511;
          bg = def & 511;
          break;
        default:
          if (c === 48 && +code[i + 1] === 5) {
            i += 2;
            bg = +code[i];
            break;
          } else if (c === 48 && +code[i + 1] === 2) {
            i += 2;
            bg = colors.match(+code[i], +code[i + 1], +code[i + 2]);
            if (bg === -1)
              bg = def & 511;
            i += 2;
            break;
          } else if (c === 38 && +code[i + 1] === 5) {
            i += 2;
            fg = +code[i];
            break;
          } else if (c === 38 && +code[i + 1] === 2) {
            i += 2;
            fg = colors.match(+code[i], +code[i + 1], +code[i + 2]);
            if (fg === -1)
              fg = def >> 9 & 511;
            i += 2;
            break;
          }
          if (c >= 40 && c <= 47) {
            bg = c - 40;
          } else if (c >= 100 && c <= 107) {
            bg = c - 100;
            bg += 8;
          } else if (c === 49) {
            bg = def & 511;
          } else if (c >= 30 && c <= 37) {
            fg = c - 30;
          } else if (c >= 90 && c <= 97) {
            fg = c - 90;
            fg += 8;
          } else if (c === 39) {
            fg = def >> 9 & 511;
          } else if (c === 100) {
            fg = def >> 9 & 511;
            bg = def & 511;
          }
          break;
      }
    }
    return flags << 18 | fg << 9 | bg;
  };
  Screen.prototype.codeAttr = function(code) {
    var flags = code >> 18 & 511, fg = code >> 9 & 511, bg = code & 511, out = "";
    if (flags & 1) {
      out += "1;";
    }
    if (flags & 2) {
      out += "4;";
    }
    if (flags & 4) {
      out += "5;";
    }
    if (flags & 8) {
      out += "7;";
    }
    if (flags & 16) {
      out += "8;";
    }
    if (bg !== 511) {
      bg = this._reduceColor(bg);
      if (bg < 16) {
        if (bg < 8) {
          bg += 40;
        } else if (bg < 16) {
          bg -= 8;
          bg += 100;
        }
        out += bg + ";";
      } else {
        out += "48;5;" + bg + ";";
      }
    }
    if (fg !== 511) {
      fg = this._reduceColor(fg);
      if (fg < 16) {
        if (fg < 8) {
          fg += 30;
        } else if (fg < 16) {
          fg -= 8;
          fg += 90;
        }
        out += fg + ";";
      } else {
        out += "38;5;" + fg + ";";
      }
    }
    if (out[out.length - 1] === ";")
      out = out.slice(0, -1);
    return "\x1B[" + out + "m";
  };
  Screen.prototype.focusOffset = function(offset) {
    var shown = this.keyable.filter(function(el) {
      return !el.detached && el.visible;
    }).length;
    if (!shown || !offset) {
      return;
    }
    var i = this.keyable.indexOf(this.focused);
    if (!~i)
      return;
    if (offset > 0) {
      while (offset--) {
        if (++i > this.keyable.length - 1)
          i = 0;
        if (this.keyable[i].detached || !this.keyable[i].visible)
          offset++;
      }
    } else {
      offset = -offset;
      while (offset--) {
        if (--i < 0)
          i = this.keyable.length - 1;
        if (this.keyable[i].detached || !this.keyable[i].visible)
          offset++;
      }
    }
    return this.keyable[i].focus();
  };
  Screen.prototype.focusPrev = Screen.prototype.focusPrevious = function() {
    return this.focusOffset(-1);
  };
  Screen.prototype.focusNext = function() {
    return this.focusOffset(1);
  };
  Screen.prototype.focusPush = function(el) {
    if (!el)
      return;
    var old = this.history[this.history.length - 1];
    if (this.history.length === 10) {
      this.history.shift();
    }
    this.history.push(el);
    this._focus(el, old);
  };
  Screen.prototype.focusPop = function() {
    var old = this.history.pop();
    if (this.history.length) {
      this._focus(this.history[this.history.length - 1], old);
    }
    return old;
  };
  Screen.prototype.saveFocus = function() {
    return this._savedFocus = this.focused;
  };
  Screen.prototype.restoreFocus = function() {
    if (!this._savedFocus)
      return;
    this._savedFocus.focus();
    delete this._savedFocus;
    return this.focused;
  };
  Screen.prototype.rewindFocus = function() {
    var old = this.history.pop(), el;
    while (this.history.length) {
      el = this.history.pop();
      if (!el.detached && el.visible) {
        this.history.push(el);
        this._focus(el, old);
        return el;
      }
    }
    if (old) {
      old.emit("blur");
    }
  };
  Screen.prototype._focus = function(self, old) {
    var el = self;
    while (el = el.parent) {
      if (el.scrollable)
        break;
    }
    if (el && !el.detached) {
      var visible = self.screen.height - el.atop - el.itop - el.abottom - el.ibottom;
      if (self.rtop < el.childBase) {
        el.scrollTo(self.rtop);
        self.screen.render();
      } else if (self.rtop + self.height - self.ibottom > el.childBase + visible) {
        el.scrollTo(self.rtop - (el.height - self.height) + el.itop, true);
        self.screen.render();
      }
    }
    if (old) {
      old.emit("blur", self);
    }
    self.emit("focus", old);
  };
  Screen.prototype.__defineGetter__("focused", function() {
    return this.history[this.history.length - 1];
  });
  Screen.prototype.__defineSetter__("focused", function(el) {
    return this.focusPush(el);
  });
  Screen.prototype.clearRegion = function(xi, xl, yi, yl, override) {
    return this.fillRegion(this.dattr, " ", xi, xl, yi, yl, override);
  };
  Screen.prototype.fillRegion = function(attr, ch, xi, xl, yi, yl, override) {
    var lines = this.lines, cell, xx;
    if (xi < 0)
      xi = 0;
    if (yi < 0)
      yi = 0;
    for (;yi < yl; yi++) {
      if (!lines[yi])
        break;
      for (xx = xi;xx < xl; xx++) {
        cell = lines[yi][xx];
        if (!cell)
          break;
        if (override || attr !== cell[0] || ch !== cell[1]) {
          lines[yi][xx][0] = attr;
          lines[yi][xx][1] = ch;
          lines[yi].dirty = true;
        }
      }
    }
  };
  Screen.prototype.key = function() {
    return this.program.key.apply(this, arguments);
  };
  Screen.prototype.onceKey = function() {
    return this.program.onceKey.apply(this, arguments);
  };
  Screen.prototype.unkey = Screen.prototype.removeKey = function() {
    return this.program.unkey.apply(this, arguments);
  };
  Screen.prototype.spawn = function(file, args, options) {
    if (!Array.isArray(args)) {
      options = args;
      args = [];
    }
    var screen = this, program2 = screen.program, spawn = __require("child_process").spawn, mouse = program2.mouseEnabled, ps;
    options = options || {};
    options.stdio = options.stdio || "inherit";
    program2.lsaveCursor("spawn");
    program2.normalBuffer();
    program2.showCursor();
    if (mouse)
      program2.disableMouse();
    var write = program2.output.write;
    program2.output.write = function() {};
    program2.input.pause();
    if (program2.input.setRawMode) {
      program2.input.setRawMode(false);
    }
    var resume = function() {
      if (resume.done)
        return;
      resume.done = true;
      if (program2.input.setRawMode) {
        program2.input.setRawMode(true);
      }
      program2.input.resume();
      program2.output.write = write;
      program2.alternateBuffer();
      if (mouse) {
        program2.enableMouse();
        if (screen.options.sendFocus) {
          screen.program.setMouse({ sendFocus: true }, true);
        }
      }
      screen.alloc();
      screen.render();
      screen.program.lrestoreCursor("spawn", true);
    };
    ps = spawn(file, args, options);
    ps.on("error", resume);
    ps.on("exit", resume);
    return ps;
  };
  Screen.prototype.exec = function(file, args, options, callback) {
    var ps = this.spawn(file, args, options);
    ps.on("error", function(err) {
      if (!callback)
        return;
      return callback(err, false);
    });
    ps.on("exit", function(code) {
      if (!callback)
        return;
      return callback(null, code === 0);
    });
    return ps;
  };
  Screen.prototype.readEditor = function(options, callback) {
    if (typeof options === "string") {
      options = { editor: options };
    }
    if (!callback) {
      callback = options;
      options = null;
    }
    if (!callback) {
      callback = function() {};
    }
    options = options || {};
    var self = this, editor = options.editor || process.env.EDITOR || "vi", name = options.name || process.title || "blessed", rnd = Math.random().toString(36).split(".").pop(), file = "/tmp/" + name + "." + rnd, args = [file], opt;
    opt = {
      stdio: "inherit",
      env: process.env,
      cwd: process.env.HOME
    };
    function writeFile(callback2) {
      if (!options.value)
        return callback2();
      return fs.writeFile(file, options.value, callback2);
    }
    return writeFile(function(err) {
      if (err)
        return callback(err);
      return self.exec(editor, args, opt, function(err2, success) {
        if (err2)
          return callback(err2);
        return fs.readFile(file, "utf8", function(err3, data) {
          return fs.unlink(file, function() {
            if (!success)
              return callback(new Error("Unsuccessful."));
            if (err3)
              return callback(err3);
            return callback(null, data);
          });
        });
      });
    });
  };
  Screen.prototype.displayImage = function(file, callback) {
    if (!file) {
      if (!callback)
        return;
      return callback(new Error("No image."));
    }
    file = path.resolve(process.cwd(), file);
    if (!~file.indexOf("://")) {
      file = "file://" + file;
    }
    var args = ["w3m", "-T", "text/html"];
    var input = "<title>press q to exit</title>" + '<img align="center" src="' + file + '">';
    var opt = {
      stdio: ["pipe", 1, 2],
      env: process.env,
      cwd: process.env.HOME
    };
    var ps = this.spawn(args[0], args.slice(1), opt);
    ps.on("error", function(err) {
      if (!callback)
        return;
      return callback(err);
    });
    ps.on("exit", function(code) {
      if (!callback)
        return;
      if (code !== 0)
        return callback(new Error("Exit Code: " + code));
      return callback(null, code === 0);
    });
    ps.stdin.write(input + `
`);
    ps.stdin.end();
  };
  Screen.prototype.setEffects = function(el, fel, over, out, effects, temp) {
    if (!effects)
      return;
    var tmp = {};
    if (temp)
      el[temp] = tmp;
    if (typeof el !== "function") {
      var _el = el;
      el = function() {
        return _el;
      };
    }
    fel.on(over, function() {
      var element = el();
      Object.keys(effects).forEach(function(key) {
        var val = effects[key];
        if (val !== null && typeof val === "object") {
          tmp[key] = tmp[key] || {};
          Object.keys(val).forEach(function(k) {
            var v = val[k];
            tmp[key][k] = element.style[key][k];
            element.style[key][k] = v;
          });
          return;
        }
        tmp[key] = element.style[key];
        element.style[key] = val;
      });
      element.screen.render();
    });
    fel.on(out, function() {
      var element = el();
      Object.keys(effects).forEach(function(key) {
        var val = effects[key];
        if (val !== null && typeof val === "object") {
          tmp[key] = tmp[key] || {};
          Object.keys(val).forEach(function(k) {
            if (tmp[key].hasOwnProperty(k)) {
              element.style[key][k] = tmp[key][k];
            }
          });
          return;
        }
        if (tmp.hasOwnProperty(key)) {
          element.style[key] = tmp[key];
        }
      });
      element.screen.render();
    });
  };
  Screen.prototype.sigtstp = function(callback) {
    var self = this;
    this.program.sigtstp(function() {
      self.alloc();
      self.render();
      self.program.lrestoreCursor("pause", true);
      if (callback)
        callback();
    });
  };
  Screen.prototype.copyToClipboard = function(text) {
    return this.program.copyToClipboard(text);
  };
  Screen.prototype.cursorShape = function(shape, blink) {
    var self = this;
    this.cursor.shape = shape || "block";
    this.cursor.blink = blink || false;
    this.cursor._set = true;
    if (this.cursor.artificial) {
      if (!this.program.hideCursor_old) {
        var hideCursor = this.program.hideCursor;
        this.program.hideCursor_old = this.program.hideCursor;
        this.program.hideCursor = function() {
          hideCursor.call(self.program);
          self.cursor._hidden = true;
          if (self.renders)
            self.render();
        };
      }
      if (!this.program.showCursor_old) {
        var showCursor = this.program.showCursor;
        this.program.showCursor_old = this.program.showCursor;
        this.program.showCursor = function() {
          self.cursor._hidden = false;
          if (self.program._exiting)
            showCursor.call(self.program);
          if (self.renders)
            self.render();
        };
      }
      if (!this._cursorBlink) {
        this._cursorBlink = setInterval(function() {
          if (!self.cursor.blink)
            return;
          self.cursor._state ^= 1;
          if (self.renders)
            self.render();
        }, 500);
        if (this._cursorBlink.unref) {
          this._cursorBlink.unref();
        }
      }
      return true;
    }
    return this.program.cursorShape(this.cursor.shape, this.cursor.blink);
  };
  Screen.prototype.cursorColor = function(color) {
    this.cursor.color = color != null ? colors.convert(color) : null;
    this.cursor._set = true;
    if (this.cursor.artificial) {
      return true;
    }
    return this.program.cursorColor(colors.ncolors[this.cursor.color]);
  };
  Screen.prototype.cursorReset = Screen.prototype.resetCursor = function() {
    this.cursor.shape = "block";
    this.cursor.blink = false;
    this.cursor.color = null;
    this.cursor._set = false;
    if (this.cursor.artificial) {
      this.cursor.artificial = false;
      if (this.program.hideCursor_old) {
        this.program.hideCursor = this.program.hideCursor_old;
        delete this.program.hideCursor_old;
      }
      if (this.program.showCursor_old) {
        this.program.showCursor = this.program.showCursor_old;
        delete this.program.showCursor_old;
      }
      if (this._cursorBlink) {
        clearInterval(this._cursorBlink);
        delete this._cursorBlink;
      }
      return true;
    }
    return this.program.cursorReset();
  };
  Screen.prototype._cursorAttr = function(cursor, dattr) {
    var attr = dattr || this.dattr, cattr, ch;
    if (cursor.shape === "line") {
      attr &= ~(511 << 9);
      attr |= 7 << 9;
      ch = "\u2502";
    } else if (cursor.shape === "underline") {
      attr &= ~(511 << 9);
      attr |= 7 << 9;
      attr |= 2 << 18;
    } else if (cursor.shape === "block") {
      attr &= ~(511 << 9);
      attr |= 7 << 9;
      attr |= 8 << 18;
    } else if (typeof cursor.shape === "object" && cursor.shape) {
      cattr = Element.prototype.sattr.call(cursor, cursor.shape);
      if (cursor.shape.bold || cursor.shape.underline || cursor.shape.blink || cursor.shape.inverse || cursor.shape.invisible) {
        attr &= ~(511 << 18);
        attr |= (cattr >> 18 & 511) << 18;
      }
      if (cursor.shape.fg) {
        attr &= ~(511 << 9);
        attr |= (cattr >> 9 & 511) << 9;
      }
      if (cursor.shape.bg) {
        attr &= ~(511 << 0);
        attr |= cattr & 511;
      }
      if (cursor.shape.ch) {
        ch = cursor.shape.ch;
      }
    }
    if (cursor.color != null) {
      attr &= ~(511 << 9);
      attr |= cursor.color << 9;
    }
    return {
      ch,
      attr
    };
  };
  Screen.prototype.screenshot = function(xi, xl, yi, yl, term) {
    if (xi == null)
      xi = 0;
    if (xl == null)
      xl = this.cols;
    if (yi == null)
      yi = 0;
    if (yl == null)
      yl = this.rows;
    if (xi < 0)
      xi = 0;
    if (yi < 0)
      yi = 0;
    var x, y, line, out, ch, data, attr;
    var sdattr = this.dattr;
    if (term) {
      this.dattr = term.defAttr;
    }
    var main = "";
    for (y = yi;y < yl; y++) {
      line = term ? term.lines[y] : this.lines[y];
      if (!line)
        break;
      out = "";
      attr = this.dattr;
      for (x = xi;x < xl; x++) {
        if (!line[x])
          break;
        data = line[x][0];
        ch = line[x][1];
        if (data !== attr) {
          if (attr !== this.dattr) {
            out += "\x1B[m";
          }
          if (data !== this.dattr) {
            var _data = data;
            if (term) {
              if ((_data >> 9 & 511) === 257)
                _data |= 511 << 9;
              if ((_data & 511) === 256)
                _data |= 511;
            }
            out += this.codeAttr(_data);
          }
        }
        if (this.fullUnicode) {
          if (unicode.charWidth(line[x][1]) === 2) {
            if (x === xl - 1) {
              ch = " ";
            } else {
              x++;
            }
          }
        }
        out += ch;
        attr = data;
      }
      if (attr !== this.dattr) {
        out += "\x1B[m";
      }
      if (out) {
        main += (y > 0 ? `
` : "") + out;
      }
    }
    main = main.replace(/(?:\s*\x1b\[40m\s*\x1b\[m\s*)*$/, "") + `
`;
    if (term) {
      this.dattr = sdattr;
    }
    return main;
  };
  Screen.prototype._getPos = function() {
    return this;
  };
  var angles = {
    "\u2518": true,
    "\u2510": true,
    "\u250C": true,
    "\u2514": true,
    "\u253C": true,
    "\u251C": true,
    "\u2524": true,
    "\u2534": true,
    "\u252C": true,
    "\u2502": true,
    "\u2500": true
  };
  var langles = {
    "\u250C": true,
    "\u2514": true,
    "\u253C": true,
    "\u251C": true,
    "\u2534": true,
    "\u252C": true,
    "\u2500": true
  };
  var uangles = {
    "\u2510": true,
    "\u250C": true,
    "\u253C": true,
    "\u251C": true,
    "\u2524": true,
    "\u252C": true,
    "\u2502": true
  };
  var rangles = {
    "\u2518": true,
    "\u2510": true,
    "\u253C": true,
    "\u2524": true,
    "\u2534": true,
    "\u252C": true,
    "\u2500": true
  };
  var dangles = {
    "\u2518": true,
    "\u2514": true,
    "\u253C": true,
    "\u251C": true,
    "\u2524": true,
    "\u2534": true,
    "\u2502": true
  };
  var angleTable = {
    "0000": "",
    "0001": "\u2502",
    "0010": "\u2500",
    "0011": "\u250C",
    "0100": "\u2502",
    "0101": "\u2502",
    "0110": "\u2514",
    "0111": "\u251C",
    "1000": "\u2500",
    "1001": "\u2510",
    "1010": "\u2500",
    "1011": "\u252C",
    "1100": "\u2518",
    "1101": "\u2524",
    "1110": "\u2534",
    "1111": "\u253C"
  };
  Object.keys(angleTable).forEach(function(key) {
    angleTable[parseInt(key, 2)] = angleTable[key];
    delete angleTable[key];
  });
  module.exports = Screen;
});

// node_modules/neo-blessed/lib/helpers.js
var require_helpers = __commonJS((exports) => {
  var fs = __require("fs");
  var unicode = require_unicode();
  var helpers = exports;
  helpers.merge = function(a, b) {
    Object.keys(b).forEach(function(key) {
      a[key] = b[key];
    });
    return a;
  };
  helpers.asort = function(obj) {
    return obj.sort(function(a, b) {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      if (a[0] === "." && b[0] === ".") {
        a = a[1];
        b = b[1];
      } else {
        a = a[0];
        b = b[0];
      }
      return a > b ? 1 : a < b ? -1 : 0;
    });
  };
  helpers.hsort = function(obj) {
    return obj.sort(function(a, b) {
      return b.index - a.index;
    });
  };
  helpers.findFile = function(start, target) {
    return function read(dir) {
      var files, file, stat, out;
      if (dir === "/dev" || dir === "/sys" || dir === "/proc" || dir === "/net") {
        return null;
      }
      try {
        files = fs.readdirSync(dir);
      } catch (e) {
        files = [];
      }
      for (var i = 0;i < files.length; i++) {
        file = files[i];
        if (file === target) {
          return (dir === "/" ? "" : dir) + "/" + file;
        }
        try {
          stat = fs.lstatSync((dir === "/" ? "" : dir) + "/" + file);
        } catch (e) {
          stat = null;
        }
        if (stat && stat.isDirectory() && !stat.isSymbolicLink()) {
          out = read((dir === "/" ? "" : dir) + "/" + file);
          if (out)
            return out;
        }
      }
      return null;
    }(start);
  };
  helpers.escape = function(text) {
    return text.replace(/[{}]/g, function(ch) {
      return ch === "{" ? "{open}" : "{close}";
    });
  };
  helpers.parseTags = function(text, screen) {
    return helpers.Element.prototype._parseTags.call({ parseTags: true, screen: screen || helpers.Screen.global }, text);
  };
  helpers.generateTags = function(style, text) {
    var open = "", close = "";
    Object.keys(style || {}).forEach(function(key) {
      var val = style[key];
      if (typeof val === "string") {
        val = val.replace(/^light(?!-)/, "light-");
        val = val.replace(/^bright(?!-)/, "bright-");
        open = "{" + val + "-" + key + "}" + open;
        close += "{/" + val + "-" + key + "}";
      } else {
        if (val === true) {
          open = "{" + key + "}" + open;
          close += "{/" + key + "}";
        }
      }
    });
    if (text != null) {
      return open + text + close;
    }
    return {
      open,
      close
    };
  };
  helpers.attrToBinary = function(style, element) {
    return helpers.Element.prototype.sattr.call(element || {}, style);
  };
  helpers.stripTags = function(text) {
    if (!text)
      return "";
    return text.replace(/{(\/?)([\w\-,;!#]*)}/g, "").replace(/\x1b\[[\d;]*m/g, "");
  };
  helpers.cleanTags = function(text) {
    return helpers.stripTags(text).trim();
  };
  helpers.dropUnicode = function(text) {
    if (!text)
      return "";
    return text.replace(unicode.chars.all, "??").replace(unicode.chars.combining, "").replace(unicode.chars.surrogate, "?");
  };
  helpers.__defineGetter__("Screen", function() {
    if (!helpers._screen) {
      helpers._screen = require_screen();
    }
    return helpers._screen;
  });
  helpers.__defineGetter__("Element", function() {
    if (!helpers._element) {
      helpers._element = require_element();
    }
    return helpers._element;
  });
});

// node_modules/neo-blessed/lib/blessed.js
var require_blessed = __commonJS((exports, module) => {
  function blessed() {
    return blessed.program.apply(null, arguments);
  }
  blessed.program = blessed.Program = require_program();
  blessed.tput = blessed.Tput = require_tput();
  blessed.widget = require_widget();
  blessed.colors = require_colors();
  blessed.unicode = require_unicode();
  blessed.helpers = require_helpers();
  blessed.helpers.sprintf = blessed.tput.sprintf;
  blessed.helpers.tryRead = blessed.tput.tryRead;
  blessed.helpers.merge(blessed, blessed.helpers);
  blessed.helpers.merge(blessed, blessed.widget);
  module.exports = blessed;
});

// node_modules/@xterm/headless/lib-headless/xterm-headless.js
var require_xterm_headless = __commonJS((exports) => {
  (() => {
    var e = { 5639: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.CircularList = undefined;
      const i2 = s2(7150), r2 = s2(802);

      class n2 extends i2.Disposable {
        constructor(e3) {
          super(), this._maxLength = e3, this.onDeleteEmitter = this._register(new r2.Emitter), this.onDelete = this.onDeleteEmitter.event, this.onInsertEmitter = this._register(new r2.Emitter), this.onInsert = this.onInsertEmitter.event, this.onTrimEmitter = this._register(new r2.Emitter), this.onTrim = this.onTrimEmitter.event, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
        }
        get maxLength() {
          return this._maxLength;
        }
        set maxLength(e3) {
          if (this._maxLength === e3)
            return;
          const t3 = new Array(e3);
          for (let s3 = 0;s3 < Math.min(e3, this.length); s3++)
            t3[s3] = this._array[this._getCyclicIndex(s3)];
          this._array = t3, this._maxLength = e3, this._startIndex = 0;
        }
        get length() {
          return this._length;
        }
        set length(e3) {
          if (e3 > this._length)
            for (let t3 = this._length;t3 < e3; t3++)
              this._array[t3] = undefined;
          this._length = e3;
        }
        get(e3) {
          return this._array[this._getCyclicIndex(e3)];
        }
        set(e3, t3) {
          this._array[this._getCyclicIndex(e3)] = t3;
        }
        push(e3) {
          this._array[this._getCyclicIndex(this._length)] = e3, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
        }
        recycle() {
          if (this._length !== this._maxLength)
            throw new Error("Can only recycle when the buffer is full");
          return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
        }
        get isFull() {
          return this._length === this._maxLength;
        }
        pop() {
          return this._array[this._getCyclicIndex(this._length-- - 1)];
        }
        splice(e3, t3, ...s3) {
          if (t3) {
            for (let s4 = e3;s4 < this._length - t3; s4++)
              this._array[this._getCyclicIndex(s4)] = this._array[this._getCyclicIndex(s4 + t3)];
            this._length -= t3, this.onDeleteEmitter.fire({ index: e3, amount: t3 });
          }
          for (let t4 = this._length - 1;t4 >= e3; t4--)
            this._array[this._getCyclicIndex(t4 + s3.length)] = this._array[this._getCyclicIndex(t4)];
          for (let t4 = 0;t4 < s3.length; t4++)
            this._array[this._getCyclicIndex(e3 + t4)] = s3[t4];
          if (s3.length && this.onInsertEmitter.fire({ index: e3, amount: s3.length }), this._length + s3.length > this._maxLength) {
            const e4 = this._length + s3.length - this._maxLength;
            this._startIndex += e4, this._length = this._maxLength, this.onTrimEmitter.fire(e4);
          } else
            this._length += s3.length;
        }
        trimStart(e3) {
          e3 > this._length && (e3 = this._length), this._startIndex += e3, this._length -= e3, this.onTrimEmitter.fire(e3);
        }
        shiftElements(e3, t3, s3) {
          if (!(t3 <= 0)) {
            if (e3 < 0 || e3 >= this._length)
              throw new Error("start argument out of range");
            if (e3 + s3 < 0)
              throw new Error("Cannot shift elements in list beyond index 0");
            if (s3 > 0) {
              for (let i4 = t3 - 1;i4 >= 0; i4--)
                this.set(e3 + i4 + s3, this.get(e3 + i4));
              const i3 = e3 + t3 + s3 - this._length;
              if (i3 > 0)
                for (this._length += i3;this._length > this._maxLength; )
                  this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
            } else
              for (let i3 = 0;i3 < t3; i3++)
                this.set(e3 + i3 + s3, this.get(e3 + i3));
          }
        }
        _getCyclicIndex(e3) {
          return (this._startIndex + e3) % this._maxLength;
        }
      }
      t2.CircularList = n2;
    }, 7453: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.clone = function e3(t3, s2 = 5) {
        if (typeof t3 != "object")
          return t3;
        const i2 = Array.isArray(t3) ? [] : {};
        for (const r2 in t3)
          i2[r2] = s2 <= 1 ? t3[r2] : t3[r2] && e3(t3[r2], s2 - 1);
        return i2;
      };
    }, 5777: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreTerminal = undefined;
      const i2 = s2(6501), r2 = s2(6025), n2 = s2(7276), o = s2(9640), a = s2(56), h = s2(4071), c = s2(7792), l = s2(6415), u = s2(5746), d = s2(5882), f = s2(2486), _ = s2(3562), p = s2(8811), g = s2(802), v = s2(7150);
      let m = false;

      class b extends v.Disposable {
        get onScroll() {
          return this._onScrollApi || (this._onScrollApi = this._register(new g.Emitter), this._onScroll.event((e3) => {
            this._onScrollApi?.fire(e3.position);
          })), this._onScrollApi.event;
        }
        get cols() {
          return this._bufferService.cols;
        }
        get rows() {
          return this._bufferService.rows;
        }
        get buffers() {
          return this._bufferService.buffers;
        }
        get options() {
          return this.optionsService.options;
        }
        set options(e3) {
          for (const t3 in e3)
            this.optionsService.options[t3] = e3[t3];
        }
        constructor(e3) {
          super(), this._windowsWrappingHeuristics = this._register(new v.MutableDisposable), this._onBinary = this._register(new g.Emitter), this.onBinary = this._onBinary.event, this._onData = this._register(new g.Emitter), this.onData = this._onData.event, this._onLineFeed = this._register(new g.Emitter), this.onLineFeed = this._onLineFeed.event, this._onResize = this._register(new g.Emitter), this.onResize = this._onResize.event, this._onWriteParsed = this._register(new g.Emitter), this.onWriteParsed = this._onWriteParsed.event, this._onScroll = this._register(new g.Emitter), this._instantiationService = new r2.InstantiationService, this.optionsService = this._register(new a.OptionsService(e3)), this._instantiationService.setService(i2.IOptionsService, this.optionsService), this._bufferService = this._register(this._instantiationService.createInstance(o.BufferService)), this._instantiationService.setService(i2.IBufferService, this._bufferService), this._logService = this._register(this._instantiationService.createInstance(n2.LogService)), this._instantiationService.setService(i2.ILogService, this._logService), this.coreService = this._register(this._instantiationService.createInstance(h.CoreService)), this._instantiationService.setService(i2.ICoreService, this.coreService), this.coreMouseService = this._register(this._instantiationService.createInstance(c.CoreMouseService)), this._instantiationService.setService(i2.ICoreMouseService, this.coreMouseService), this.unicodeService = this._register(this._instantiationService.createInstance(l.UnicodeService)), this._instantiationService.setService(i2.IUnicodeService, this.unicodeService), this._charsetService = this._instantiationService.createInstance(u.CharsetService), this._instantiationService.setService(i2.ICharsetService, this._charsetService), this._oscLinkService = this._instantiationService.createInstance(p.OscLinkService), this._instantiationService.setService(i2.IOscLinkService, this._oscLinkService), this._inputHandler = this._register(new f.InputHandler(this._bufferService, this._charsetService, this.coreService, this._logService, this.optionsService, this._oscLinkService, this.coreMouseService, this.unicodeService)), this._register(g.Event.forward(this._inputHandler.onLineFeed, this._onLineFeed)), this._register(this._inputHandler), this._register(g.Event.forward(this._bufferService.onResize, this._onResize)), this._register(g.Event.forward(this.coreService.onData, this._onData)), this._register(g.Event.forward(this.coreService.onBinary, this._onBinary)), this._register(this.coreService.onRequestScrollToBottom(() => this.scrollToBottom(true))), this._register(this.coreService.onUserInput(() => this._writeBuffer.handleUserInput())), this._register(this.optionsService.onMultipleOptionChange(["windowsMode", "windowsPty"], () => this._handleWindowsPtyOptionChange())), this._register(this._bufferService.onScroll(() => {
            this._onScroll.fire({ position: this._bufferService.buffer.ydisp }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
          })), this._writeBuffer = this._register(new _.WriteBuffer((e4, t3) => this._inputHandler.parse(e4, t3))), this._register(g.Event.forward(this._writeBuffer.onWriteParsed, this._onWriteParsed));
        }
        write(e3, t3) {
          this._writeBuffer.write(e3, t3);
        }
        writeSync(e3, t3) {
          this._logService.logLevel <= i2.LogLevelEnum.WARN && !m && (this._logService.warn("writeSync is unreliable and will be removed soon."), m = true), this._writeBuffer.writeSync(e3, t3);
        }
        input(e3, t3 = true) {
          this.coreService.triggerDataEvent(e3, t3);
        }
        resize(e3, t3) {
          isNaN(e3) || isNaN(t3) || (e3 = Math.max(e3, o.MINIMUM_COLS), t3 = Math.max(t3, o.MINIMUM_ROWS), this._bufferService.resize(e3, t3));
        }
        scroll(e3, t3 = false) {
          this._bufferService.scroll(e3, t3);
        }
        scrollLines(e3, t3) {
          this._bufferService.scrollLines(e3, t3);
        }
        scrollPages(e3) {
          this.scrollLines(e3 * (this.rows - 1));
        }
        scrollToTop() {
          this.scrollLines(-this._bufferService.buffer.ydisp);
        }
        scrollToBottom(e3) {
          this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
        }
        scrollToLine(e3) {
          const t3 = e3 - this._bufferService.buffer.ydisp;
          t3 !== 0 && this.scrollLines(t3);
        }
        registerEscHandler(e3, t3) {
          return this._inputHandler.registerEscHandler(e3, t3);
        }
        registerDcsHandler(e3, t3) {
          return this._inputHandler.registerDcsHandler(e3, t3);
        }
        registerCsiHandler(e3, t3) {
          return this._inputHandler.registerCsiHandler(e3, t3);
        }
        registerOscHandler(e3, t3) {
          return this._inputHandler.registerOscHandler(e3, t3);
        }
        _setup() {
          this._handleWindowsPtyOptionChange();
        }
        reset() {
          this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.coreMouseService.reset();
        }
        _handleWindowsPtyOptionChange() {
          let e3 = false;
          const t3 = this.optionsService.rawOptions.windowsPty;
          t3 && t3.buildNumber !== undefined && t3.buildNumber !== undefined ? e3 = !!(t3.backend === "conpty" && t3.buildNumber < 21376) : this.optionsService.rawOptions.windowsMode && (e3 = true), e3 ? this._enableWindowsWrappingHeuristics() : this._windowsWrappingHeuristics.clear();
        }
        _enableWindowsWrappingHeuristics() {
          if (!this._windowsWrappingHeuristics.value) {
            const e3 = [];
            e3.push(this.onLineFeed(d.updateWindowsModeWrappedState.bind(null, this._bufferService))), e3.push(this.registerCsiHandler({ final: "H" }, () => ((0, d.updateWindowsModeWrappedState)(this._bufferService), false))), this._windowsWrappingHeuristics.value = (0, v.toDisposable)(() => {
              for (const t3 of e3)
                t3.dispose();
            });
          }
        }
      }
      t2.CoreTerminal = b;
    }, 2486: function(e2, t2, s2) {
      var i2 = this && this.__decorate || function(e3, t3, s3, i3) {
        var r3, n3 = arguments.length, o2 = n3 < 3 ? t3 : i3 === null ? i3 = Object.getOwnPropertyDescriptor(t3, s3) : i3;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          o2 = Reflect.decorate(e3, t3, s3, i3);
        else
          for (var a2 = e3.length - 1;a2 >= 0; a2--)
            (r3 = e3[a2]) && (o2 = (n3 < 3 ? r3(o2) : n3 > 3 ? r3(t3, s3, o2) : r3(t3, s3)) || o2);
        return n3 > 3 && o2 && Object.defineProperty(t3, s3, o2), o2;
      }, r2 = this && this.__param || function(e3, t3) {
        return function(s3, i3) {
          t3(s3, i3, e3);
        };
      };
      Object.defineProperty(t2, "__esModule", { value: true }), t2.InputHandler = t2.WindowsOptionsReportType = undefined, t2.isValidColorIndex = k;
      const n2 = s2(3534), o = s2(6760), a = s2(6717), h = s2(7150), c = s2(726), l = s2(6107), u = s2(8938), d = s2(3055), f = s2(5451), _ = s2(6501), p = s2(6415), g = s2(1346), v = s2(9823), m = s2(8693), b = s2(802), S = { "(": 0, ")": 1, "*": 2, "+": 3, "-": 1, ".": 2 }, y = 131072;
      function C2(e3, t3) {
        if (e3 > 24)
          return t3.setWinLines || false;
        switch (e3) {
          case 1:
            return !!t3.restoreWin;
          case 2:
            return !!t3.minimizeWin;
          case 3:
            return !!t3.setWinPosition;
          case 4:
            return !!t3.setWinSizePixels;
          case 5:
            return !!t3.raiseWin;
          case 6:
            return !!t3.lowerWin;
          case 7:
            return !!t3.refreshWin;
          case 8:
            return !!t3.setWinSizeChars;
          case 9:
            return !!t3.maximizeWin;
          case 10:
            return !!t3.fullscreenWin;
          case 11:
            return !!t3.getWinState;
          case 13:
            return !!t3.getWinPosition;
          case 14:
            return !!t3.getWinSizePixels;
          case 15:
            return !!t3.getScreenSizePixels;
          case 16:
            return !!t3.getCellSizePixels;
          case 18:
            return !!t3.getWinSizeChars;
          case 19:
            return !!t3.getScreenSizeChars;
          case 20:
            return !!t3.getIconTitle;
          case 21:
            return !!t3.getWinTitle;
          case 22:
            return !!t3.pushTitle;
          case 23:
            return !!t3.popTitle;
          case 24:
            return !!t3.setWinLines;
        }
        return false;
      }
      var w;
      (function(e3) {
        e3[e3.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS", e3[e3.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS";
      })(w || (t2.WindowsOptionsReportType = w = {}));
      let E = 0;

      class A extends h.Disposable {
        getAttrData() {
          return this._curAttrData;
        }
        constructor(e3, t3, s3, i3, r3, h2, u2, d2, f2 = new a.EscapeSequenceParser) {
          super(), this._bufferService = e3, this._charsetService = t3, this._coreService = s3, this._logService = i3, this._optionsService = r3, this._oscLinkService = h2, this._coreMouseService = u2, this._unicodeService = d2, this._parser = f2, this._parseBuffer = new Uint32Array(4096), this._stringDecoder = new c.StringToUtf32, this._utf8Decoder = new c.Utf8ToUtf32, this._windowTitle = "", this._iconName = "", this._windowTitleStack = [], this._iconNameStack = [], this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = l.DEFAULT_ATTR_DATA.clone(), this._onRequestBell = this._register(new b.Emitter), this.onRequestBell = this._onRequestBell.event, this._onRequestRefreshRows = this._register(new b.Emitter), this.onRequestRefreshRows = this._onRequestRefreshRows.event, this._onRequestReset = this._register(new b.Emitter), this.onRequestReset = this._onRequestReset.event, this._onRequestSendFocus = this._register(new b.Emitter), this.onRequestSendFocus = this._onRequestSendFocus.event, this._onRequestSyncScrollBar = this._register(new b.Emitter), this.onRequestSyncScrollBar = this._onRequestSyncScrollBar.event, this._onRequestWindowsOptionsReport = this._register(new b.Emitter), this.onRequestWindowsOptionsReport = this._onRequestWindowsOptionsReport.event, this._onA11yChar = this._register(new b.Emitter), this.onA11yChar = this._onA11yChar.event, this._onA11yTab = this._register(new b.Emitter), this.onA11yTab = this._onA11yTab.event, this._onCursorMove = this._register(new b.Emitter), this.onCursorMove = this._onCursorMove.event, this._onLineFeed = this._register(new b.Emitter), this.onLineFeed = this._onLineFeed.event, this._onScroll = this._register(new b.Emitter), this.onScroll = this._onScroll.event, this._onTitleChange = this._register(new b.Emitter), this.onTitleChange = this._onTitleChange.event, this._onColor = this._register(new b.Emitter), this.onColor = this._onColor.event, this._parseStack = { paused: false, cursorStartX: 0, cursorStartY: 0, decodedLength: 0, position: 0 }, this._specialColors = [256, 257, 258], this._register(this._parser), this._dirtyRowTracker = new L(this._bufferService), this._activeBuffer = this._bufferService.buffer, this._register(this._bufferService.buffers.onBufferActivate((e4) => this._activeBuffer = e4.activeBuffer)), this._parser.setCsiHandlerFallback((e4, t4) => {
            this._logService.debug("Unknown CSI code: ", { identifier: this._parser.identToString(e4), params: t4.toArray() });
          }), this._parser.setEscHandlerFallback((e4) => {
            this._logService.debug("Unknown ESC code: ", { identifier: this._parser.identToString(e4) });
          }), this._parser.setExecuteHandlerFallback((e4) => {
            this._logService.debug("Unknown EXECUTE code: ", { code: e4 });
          }), this._parser.setOscHandlerFallback((e4, t4, s4) => {
            this._logService.debug("Unknown OSC code: ", { identifier: e4, action: t4, data: s4 });
          }), this._parser.setDcsHandlerFallback((e4, t4, s4) => {
            t4 === "HOOK" && (s4 = s4.toArray()), this._logService.debug("Unknown DCS code: ", { identifier: this._parser.identToString(e4), action: t4, payload: s4 });
          }), this._parser.setPrintHandler((e4, t4, s4) => this.print(e4, t4, s4)), this._parser.registerCsiHandler({ final: "@" }, (e4) => this.insertChars(e4)), this._parser.registerCsiHandler({ intermediates: " ", final: "@" }, (e4) => this.scrollLeft(e4)), this._parser.registerCsiHandler({ final: "A" }, (e4) => this.cursorUp(e4)), this._parser.registerCsiHandler({ intermediates: " ", final: "A" }, (e4) => this.scrollRight(e4)), this._parser.registerCsiHandler({ final: "B" }, (e4) => this.cursorDown(e4)), this._parser.registerCsiHandler({ final: "C" }, (e4) => this.cursorForward(e4)), this._parser.registerCsiHandler({ final: "D" }, (e4) => this.cursorBackward(e4)), this._parser.registerCsiHandler({ final: "E" }, (e4) => this.cursorNextLine(e4)), this._parser.registerCsiHandler({ final: "F" }, (e4) => this.cursorPrecedingLine(e4)), this._parser.registerCsiHandler({ final: "G" }, (e4) => this.cursorCharAbsolute(e4)), this._parser.registerCsiHandler({ final: "H" }, (e4) => this.cursorPosition(e4)), this._parser.registerCsiHandler({ final: "I" }, (e4) => this.cursorForwardTab(e4)), this._parser.registerCsiHandler({ final: "J" }, (e4) => this.eraseInDisplay(e4, false)), this._parser.registerCsiHandler({ prefix: "?", final: "J" }, (e4) => this.eraseInDisplay(e4, true)), this._parser.registerCsiHandler({ final: "K" }, (e4) => this.eraseInLine(e4, false)), this._parser.registerCsiHandler({ prefix: "?", final: "K" }, (e4) => this.eraseInLine(e4, true)), this._parser.registerCsiHandler({ final: "L" }, (e4) => this.insertLines(e4)), this._parser.registerCsiHandler({ final: "M" }, (e4) => this.deleteLines(e4)), this._parser.registerCsiHandler({ final: "P" }, (e4) => this.deleteChars(e4)), this._parser.registerCsiHandler({ final: "S" }, (e4) => this.scrollUp(e4)), this._parser.registerCsiHandler({ final: "T" }, (e4) => this.scrollDown(e4)), this._parser.registerCsiHandler({ final: "X" }, (e4) => this.eraseChars(e4)), this._parser.registerCsiHandler({ final: "Z" }, (e4) => this.cursorBackwardTab(e4)), this._parser.registerCsiHandler({ final: "`" }, (e4) => this.charPosAbsolute(e4)), this._parser.registerCsiHandler({ final: "a" }, (e4) => this.hPositionRelative(e4)), this._parser.registerCsiHandler({ final: "b" }, (e4) => this.repeatPrecedingCharacter(e4)), this._parser.registerCsiHandler({ final: "c" }, (e4) => this.sendDeviceAttributesPrimary(e4)), this._parser.registerCsiHandler({ prefix: ">", final: "c" }, (e4) => this.sendDeviceAttributesSecondary(e4)), this._parser.registerCsiHandler({ final: "d" }, (e4) => this.linePosAbsolute(e4)), this._parser.registerCsiHandler({ final: "e" }, (e4) => this.vPositionRelative(e4)), this._parser.registerCsiHandler({ final: "f" }, (e4) => this.hVPosition(e4)), this._parser.registerCsiHandler({ final: "g" }, (e4) => this.tabClear(e4)), this._parser.registerCsiHandler({ final: "h" }, (e4) => this.setMode(e4)), this._parser.registerCsiHandler({ prefix: "?", final: "h" }, (e4) => this.setModePrivate(e4)), this._parser.registerCsiHandler({ final: "l" }, (e4) => this.resetMode(e4)), this._parser.registerCsiHandler({ prefix: "?", final: "l" }, (e4) => this.resetModePrivate(e4)), this._parser.registerCsiHandler({ final: "m" }, (e4) => this.charAttributes(e4)), this._parser.registerCsiHandler({ final: "n" }, (e4) => this.deviceStatus(e4)), this._parser.registerCsiHandler({ prefix: "?", final: "n" }, (e4) => this.deviceStatusPrivate(e4)), this._parser.registerCsiHandler({ intermediates: "!", final: "p" }, (e4) => this.softReset(e4)), this._parser.registerCsiHandler({ intermediates: " ", final: "q" }, (e4) => this.setCursorStyle(e4)), this._parser.registerCsiHandler({ final: "r" }, (e4) => this.setScrollRegion(e4)), this._parser.registerCsiHandler({ final: "s" }, (e4) => this.saveCursor(e4)), this._parser.registerCsiHandler({ final: "t" }, (e4) => this.windowOptions(e4)), this._parser.registerCsiHandler({ final: "u" }, (e4) => this.restoreCursor(e4)), this._parser.registerCsiHandler({ intermediates: "'", final: "}" }, (e4) => this.insertColumns(e4)), this._parser.registerCsiHandler({ intermediates: "'", final: "~" }, (e4) => this.deleteColumns(e4)), this._parser.registerCsiHandler({ intermediates: '"', final: "q" }, (e4) => this.selectProtected(e4)), this._parser.registerCsiHandler({ intermediates: "$", final: "p" }, (e4) => this.requestMode(e4, true)), this._parser.registerCsiHandler({ prefix: "?", intermediates: "$", final: "p" }, (e4) => this.requestMode(e4, false)), this._parser.setExecuteHandler(n2.C0.BEL, () => this.bell()), this._parser.setExecuteHandler(n2.C0.LF, () => this.lineFeed()), this._parser.setExecuteHandler(n2.C0.VT, () => this.lineFeed()), this._parser.setExecuteHandler(n2.C0.FF, () => this.lineFeed()), this._parser.setExecuteHandler(n2.C0.CR, () => this.carriageReturn()), this._parser.setExecuteHandler(n2.C0.BS, () => this.backspace()), this._parser.setExecuteHandler(n2.C0.HT, () => this.tab()), this._parser.setExecuteHandler(n2.C0.SO, () => this.shiftOut()), this._parser.setExecuteHandler(n2.C0.SI, () => this.shiftIn()), this._parser.setExecuteHandler(n2.C1.IND, () => this.index()), this._parser.setExecuteHandler(n2.C1.NEL, () => this.nextLine()), this._parser.setExecuteHandler(n2.C1.HTS, () => this.tabSet()), this._parser.registerOscHandler(0, new g.OscHandler((e4) => (this.setTitle(e4), this.setIconName(e4), true))), this._parser.registerOscHandler(1, new g.OscHandler((e4) => this.setIconName(e4))), this._parser.registerOscHandler(2, new g.OscHandler((e4) => this.setTitle(e4))), this._parser.registerOscHandler(4, new g.OscHandler((e4) => this.setOrReportIndexedColor(e4))), this._parser.registerOscHandler(8, new g.OscHandler((e4) => this.setHyperlink(e4))), this._parser.registerOscHandler(10, new g.OscHandler((e4) => this.setOrReportFgColor(e4))), this._parser.registerOscHandler(11, new g.OscHandler((e4) => this.setOrReportBgColor(e4))), this._parser.registerOscHandler(12, new g.OscHandler((e4) => this.setOrReportCursorColor(e4))), this._parser.registerOscHandler(104, new g.OscHandler((e4) => this.restoreIndexedColor(e4))), this._parser.registerOscHandler(110, new g.OscHandler((e4) => this.restoreFgColor(e4))), this._parser.registerOscHandler(111, new g.OscHandler((e4) => this.restoreBgColor(e4))), this._parser.registerOscHandler(112, new g.OscHandler((e4) => this.restoreCursorColor(e4))), this._parser.registerEscHandler({ final: "7" }, () => this.saveCursor()), this._parser.registerEscHandler({ final: "8" }, () => this.restoreCursor()), this._parser.registerEscHandler({ final: "D" }, () => this.index()), this._parser.registerEscHandler({ final: "E" }, () => this.nextLine()), this._parser.registerEscHandler({ final: "H" }, () => this.tabSet()), this._parser.registerEscHandler({ final: "M" }, () => this.reverseIndex()), this._parser.registerEscHandler({ final: "=" }, () => this.keypadApplicationMode()), this._parser.registerEscHandler({ final: ">" }, () => this.keypadNumericMode()), this._parser.registerEscHandler({ final: "c" }, () => this.fullReset()), this._parser.registerEscHandler({ final: "n" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "o" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "|" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "}" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "~" }, () => this.setgLevel(1)), this._parser.registerEscHandler({ intermediates: "%", final: "@" }, () => this.selectDefaultCharset()), this._parser.registerEscHandler({ intermediates: "%", final: "G" }, () => this.selectDefaultCharset());
          for (const e4 in o.CHARSETS)
            this._parser.registerEscHandler({ intermediates: "(", final: e4 }, () => this.selectCharset("(" + e4)), this._parser.registerEscHandler({ intermediates: ")", final: e4 }, () => this.selectCharset(")" + e4)), this._parser.registerEscHandler({ intermediates: "*", final: e4 }, () => this.selectCharset("*" + e4)), this._parser.registerEscHandler({ intermediates: "+", final: e4 }, () => this.selectCharset("+" + e4)), this._parser.registerEscHandler({ intermediates: "-", final: e4 }, () => this.selectCharset("-" + e4)), this._parser.registerEscHandler({ intermediates: ".", final: e4 }, () => this.selectCharset("." + e4)), this._parser.registerEscHandler({ intermediates: "/", final: e4 }, () => this.selectCharset("/" + e4));
          this._parser.registerEscHandler({ intermediates: "#", final: "8" }, () => this.screenAlignmentPattern()), this._parser.setErrorHandler((e4) => (this._logService.error("Parsing error: ", e4), e4)), this._parser.registerDcsHandler({ intermediates: "$", final: "q" }, new v.DcsHandler((e4, t4) => this.requestStatusString(e4, t4)));
        }
        _preserveStack(e3, t3, s3, i3) {
          this._parseStack.paused = true, this._parseStack.cursorStartX = e3, this._parseStack.cursorStartY = t3, this._parseStack.decodedLength = s3, this._parseStack.position = i3;
        }
        _logSlowResolvingAsync(e3) {
          this._logService.logLevel <= _.LogLevelEnum.WARN && Promise.race([e3, new Promise((e4, t3) => setTimeout(() => t3("#SLOW_TIMEOUT"), 5000))]).catch((e4) => {
            if (e4 !== "#SLOW_TIMEOUT")
              throw e4;
            console.warn("async parser handler taking longer than 5000 ms");
          });
        }
        _getCurrentLinkId() {
          return this._curAttrData.extended.urlId;
        }
        parse(e3, t3) {
          let s3, i3 = this._activeBuffer.x, r3 = this._activeBuffer.y, n3 = 0;
          const o2 = this._parseStack.paused;
          if (o2) {
            if (s3 = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, t3))
              return this._logSlowResolvingAsync(s3), s3;
            i3 = this._parseStack.cursorStartX, r3 = this._parseStack.cursorStartY, this._parseStack.paused = false, e3.length > y && (n3 = this._parseStack.position + y);
          }
          if (this._logService.logLevel <= _.LogLevelEnum.DEBUG && this._logService.debug("parsing data " + (typeof e3 == "string" ? ` "${e3}"` : ` "${Array.prototype.map.call(e3, (e4) => String.fromCharCode(e4)).join("")}"`)), this._logService.logLevel === _.LogLevelEnum.TRACE && this._logService.trace("parsing data (codes)", typeof e3 == "string" ? e3.split("").map((e4) => e4.charCodeAt(0)) : e3), this._parseBuffer.length < e3.length && this._parseBuffer.length < y && (this._parseBuffer = new Uint32Array(Math.min(e3.length, y))), o2 || this._dirtyRowTracker.clearRange(), e3.length > y)
            for (let t4 = n3;t4 < e3.length; t4 += y) {
              const n4 = t4 + y < e3.length ? t4 + y : e3.length, o3 = typeof e3 == "string" ? this._stringDecoder.decode(e3.substring(t4, n4), this._parseBuffer) : this._utf8Decoder.decode(e3.subarray(t4, n4), this._parseBuffer);
              if (s3 = this._parser.parse(this._parseBuffer, o3))
                return this._preserveStack(i3, r3, o3, t4), this._logSlowResolvingAsync(s3), s3;
            }
          else if (!o2) {
            const t4 = typeof e3 == "string" ? this._stringDecoder.decode(e3, this._parseBuffer) : this._utf8Decoder.decode(e3, this._parseBuffer);
            if (s3 = this._parser.parse(this._parseBuffer, t4))
              return this._preserveStack(i3, r3, t4, 0), this._logSlowResolvingAsync(s3), s3;
          }
          this._activeBuffer.x === i3 && this._activeBuffer.y === r3 || this._onCursorMove.fire();
          const a2 = this._dirtyRowTracker.end + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp), h2 = this._dirtyRowTracker.start + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
          h2 < this._bufferService.rows && this._onRequestRefreshRows.fire({ start: Math.min(h2, this._bufferService.rows - 1), end: Math.min(a2, this._bufferService.rows - 1) });
        }
        print(e3, t3, s3) {
          let i3, r3;
          const n3 = this._charsetService.charset, o2 = this._optionsService.rawOptions.screenReaderMode, a2 = this._bufferService.cols, h2 = this._coreService.decPrivateModes.wraparound, d2 = this._coreService.modes.insertMode, f2 = this._curAttrData;
          let _2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
          this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._activeBuffer.x && s3 - t3 > 0 && _2.getWidth(this._activeBuffer.x - 1) === 2 && _2.setCellFromCodepoint(this._activeBuffer.x - 1, 0, 1, f2);
          let g2 = this._parser.precedingJoinState;
          for (let v2 = t3;v2 < s3; ++v2) {
            if (i3 = e3[v2], i3 < 127 && n3) {
              const e4 = n3[String.fromCharCode(i3)];
              e4 && (i3 = e4.charCodeAt(0));
            }
            const t4 = this._unicodeService.charProperties(i3, g2);
            r3 = p.UnicodeService.extractWidth(t4);
            const s4 = p.UnicodeService.extractShouldJoin(t4), m2 = s4 ? p.UnicodeService.extractWidth(g2) : 0;
            if (g2 = t4, o2 && this._onA11yChar.fire((0, c.stringFromCodePoint)(i3)), this._getCurrentLinkId() && this._oscLinkService.addLineToLink(this._getCurrentLinkId(), this._activeBuffer.ybase + this._activeBuffer.y), this._activeBuffer.x + r3 - m2 > a2) {
              if (h2) {
                const e4 = _2;
                let t5 = this._activeBuffer.x - m2;
                for (this._activeBuffer.x = m2, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), true)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = true), _2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y), m2 > 0 && _2 instanceof l.BufferLine && _2.copyCellsFrom(e4, t5, 0, m2, false);t5 < a2; )
                  e4.setCellFromCodepoint(t5++, 0, 1, f2);
              } else if (this._activeBuffer.x = a2 - 1, r3 === 2)
                continue;
            }
            if (s4 && this._activeBuffer.x) {
              const e4 = _2.getWidth(this._activeBuffer.x - 1) ? 1 : 2;
              _2.addCodepointToCell(this._activeBuffer.x - e4, i3, r3);
              for (let e5 = r3 - m2;--e5 >= 0; )
                _2.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, f2);
            } else if (d2 && (_2.insertCells(this._activeBuffer.x, r3 - m2, this._activeBuffer.getNullCell(f2)), _2.getWidth(a2 - 1) === 2 && _2.setCellFromCodepoint(a2 - 1, u.NULL_CELL_CODE, u.NULL_CELL_WIDTH, f2)), _2.setCellFromCodepoint(this._activeBuffer.x++, i3, r3, f2), r3 > 0)
              for (;--r3; )
                _2.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, f2);
          }
          this._parser.precedingJoinState = g2, this._activeBuffer.x < a2 && s3 - t3 > 0 && _2.getWidth(this._activeBuffer.x) === 0 && !_2.hasContent(this._activeBuffer.x) && _2.setCellFromCodepoint(this._activeBuffer.x, 0, 1, f2), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
        }
        registerCsiHandler(e3, t3) {
          return e3.final !== "t" || e3.prefix || e3.intermediates ? this._parser.registerCsiHandler(e3, t3) : this._parser.registerCsiHandler(e3, (e4) => !C2(e4.params[0], this._optionsService.rawOptions.windowOptions) || t3(e4));
        }
        registerDcsHandler(e3, t3) {
          return this._parser.registerDcsHandler(e3, new v.DcsHandler(t3));
        }
        registerEscHandler(e3, t3) {
          return this._parser.registerEscHandler(e3, t3);
        }
        registerOscHandler(e3, t3) {
          return this._parser.registerOscHandler(e3, new g.OscHandler(t3));
        }
        bell() {
          return this._onRequestBell.fire(), true;
        }
        lineFeed() {
          return this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows ? this._activeBuffer.y = this._bufferService.rows - 1 : this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), true;
        }
        carriageReturn() {
          return this._activeBuffer.x = 0, true;
        }
        backspace() {
          if (!this._coreService.decPrivateModes.reverseWraparound)
            return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, true;
          if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0)
            this._activeBuffer.x--;
          else if (this._activeBuffer.x === 0 && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)?.isWrapped) {
            this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
            const e3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            e3.hasWidth(this._activeBuffer.x) && !e3.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
          }
          return this._restrictCursor(), true;
        }
        tab() {
          if (this._activeBuffer.x >= this._bufferService.cols)
            return true;
          const e3 = this._activeBuffer.x;
          return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - e3), true;
        }
        shiftOut() {
          return this._charsetService.setgLevel(1), true;
        }
        shiftIn() {
          return this._charsetService.setgLevel(0), true;
        }
        _restrictCursor(e3 = this._bufferService.cols - 1) {
          this._activeBuffer.x = Math.min(e3, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
        }
        _setCursor(e3, t3) {
          this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = e3, this._activeBuffer.y = this._activeBuffer.scrollTop + t3) : (this._activeBuffer.x = e3, this._activeBuffer.y = t3), this._restrictCursor(), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
        }
        _moveCursor(e3, t3) {
          this._restrictCursor(), this._setCursor(this._activeBuffer.x + e3, this._activeBuffer.y + t3);
        }
        cursorUp(e3) {
          const t3 = this._activeBuffer.y - this._activeBuffer.scrollTop;
          return t3 >= 0 ? this._moveCursor(0, -Math.min(t3, e3.params[0] || 1)) : this._moveCursor(0, -(e3.params[0] || 1)), true;
        }
        cursorDown(e3) {
          const t3 = this._activeBuffer.scrollBottom - this._activeBuffer.y;
          return t3 >= 0 ? this._moveCursor(0, Math.min(t3, e3.params[0] || 1)) : this._moveCursor(0, e3.params[0] || 1), true;
        }
        cursorForward(e3) {
          return this._moveCursor(e3.params[0] || 1, 0), true;
        }
        cursorBackward(e3) {
          return this._moveCursor(-(e3.params[0] || 1), 0), true;
        }
        cursorNextLine(e3) {
          return this.cursorDown(e3), this._activeBuffer.x = 0, true;
        }
        cursorPrecedingLine(e3) {
          return this.cursorUp(e3), this._activeBuffer.x = 0, true;
        }
        cursorCharAbsolute(e3) {
          return this._setCursor((e3.params[0] || 1) - 1, this._activeBuffer.y), true;
        }
        cursorPosition(e3) {
          return this._setCursor(e3.length >= 2 ? (e3.params[1] || 1) - 1 : 0, (e3.params[0] || 1) - 1), true;
        }
        charPosAbsolute(e3) {
          return this._setCursor((e3.params[0] || 1) - 1, this._activeBuffer.y), true;
        }
        hPositionRelative(e3) {
          return this._moveCursor(e3.params[0] || 1, 0), true;
        }
        linePosAbsolute(e3) {
          return this._setCursor(this._activeBuffer.x, (e3.params[0] || 1) - 1), true;
        }
        vPositionRelative(e3) {
          return this._moveCursor(0, e3.params[0] || 1), true;
        }
        hVPosition(e3) {
          return this.cursorPosition(e3), true;
        }
        tabClear(e3) {
          const t3 = e3.params[0];
          return t3 === 0 ? delete this._activeBuffer.tabs[this._activeBuffer.x] : t3 === 3 && (this._activeBuffer.tabs = {}), true;
        }
        cursorForwardTab(e3) {
          if (this._activeBuffer.x >= this._bufferService.cols)
            return true;
          let t3 = e3.params[0] || 1;
          for (;t3--; )
            this._activeBuffer.x = this._activeBuffer.nextStop();
          return true;
        }
        cursorBackwardTab(e3) {
          if (this._activeBuffer.x >= this._bufferService.cols)
            return true;
          let t3 = e3.params[0] || 1;
          for (;t3--; )
            this._activeBuffer.x = this._activeBuffer.prevStop();
          return true;
        }
        selectProtected(e3) {
          const t3 = e3.params[0];
          return t3 === 1 && (this._curAttrData.bg |= 536870912), t3 !== 2 && t3 !== 0 || (this._curAttrData.bg &= -536870913), true;
        }
        _eraseInBufferLine(e3, t3, s3, i3 = false, r3 = false) {
          const n3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e3);
          n3.replaceCells(t3, s3, this._activeBuffer.getNullCell(this._eraseAttrData()), r3), i3 && (n3.isWrapped = false);
        }
        _resetBufferLine(e3, t3 = false) {
          const s3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e3);
          s3 && (s3.fill(this._activeBuffer.getNullCell(this._eraseAttrData()), t3), this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + e3), s3.isWrapped = false);
        }
        eraseInDisplay(e3, t3 = false) {
          let s3;
          switch (this._restrictCursor(this._bufferService.cols), e3.params[0]) {
            case 0:
              for (s3 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(s3), this._eraseInBufferLine(s3++, this._activeBuffer.x, this._bufferService.cols, this._activeBuffer.x === 0, t3);s3 < this._bufferService.rows; s3++)
                this._resetBufferLine(s3, t3);
              this._dirtyRowTracker.markDirty(s3);
              break;
            case 1:
              for (s3 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(s3), this._eraseInBufferLine(s3, 0, this._activeBuffer.x + 1, true, t3), this._activeBuffer.x + 1 >= this._bufferService.cols && (this._activeBuffer.lines.get(s3 + 1).isWrapped = false);s3--; )
                this._resetBufferLine(s3, t3);
              this._dirtyRowTracker.markDirty(0);
              break;
            case 2:
              if (this._optionsService.rawOptions.scrollOnEraseInDisplay) {
                for (s3 = this._bufferService.rows, this._dirtyRowTracker.markRangeDirty(0, s3 - 1);s3--; ) {
                  const e5 = this._activeBuffer.lines.get(this._activeBuffer.ybase + s3);
                  if (e5?.getTrimmedLength())
                    break;
                }
                for (;s3 >= 0; s3--)
                  this._bufferService.scroll(this._eraseAttrData());
              } else {
                for (s3 = this._bufferService.rows, this._dirtyRowTracker.markDirty(s3 - 1);s3--; )
                  this._resetBufferLine(s3, t3);
                this._dirtyRowTracker.markDirty(0);
              }
              break;
            case 3:
              const e4 = this._activeBuffer.lines.length - this._bufferService.rows;
              e4 > 0 && (this._activeBuffer.lines.trimStart(e4), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - e4, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - e4, 0), this._onScroll.fire(0));
          }
          return true;
        }
        eraseInLine(e3, t3 = false) {
          switch (this._restrictCursor(this._bufferService.cols), e3.params[0]) {
            case 0:
              this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, this._activeBuffer.x === 0, t3);
              break;
            case 1:
              this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, false, t3);
              break;
            case 2:
              this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, true, t3);
          }
          return this._dirtyRowTracker.markDirty(this._activeBuffer.y), true;
        }
        insertLines(e3) {
          this._restrictCursor();
          let t3 = e3.params[0] || 1;
          if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
            return true;
          const s3 = this._activeBuffer.ybase + this._activeBuffer.y, i3 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, r3 = this._bufferService.rows - 1 + this._activeBuffer.ybase - i3 + 1;
          for (;t3--; )
            this._activeBuffer.lines.splice(r3 - 1, 1), this._activeBuffer.lines.splice(s3, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
        }
        deleteLines(e3) {
          this._restrictCursor();
          let t3 = e3.params[0] || 1;
          if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
            return true;
          const s3 = this._activeBuffer.ybase + this._activeBuffer.y;
          let i3;
          for (i3 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, i3 = this._bufferService.rows - 1 + this._activeBuffer.ybase - i3;t3--; )
            this._activeBuffer.lines.splice(s3, 1), this._activeBuffer.lines.splice(i3, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
        }
        insertChars(e3) {
          this._restrictCursor();
          const t3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
          return t3 && (t3.insertCells(this._activeBuffer.x, e3.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
        }
        deleteChars(e3) {
          this._restrictCursor();
          const t3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
          return t3 && (t3.deleteCells(this._activeBuffer.x, e3.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
        }
        scrollUp(e3) {
          let t3 = e3.params[0] || 1;
          for (;t3--; )
            this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
        }
        scrollDown(e3) {
          let t3 = e3.params[0] || 1;
          for (;t3--; )
            this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(l.DEFAULT_ATTR_DATA));
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
        }
        scrollLeft(e3) {
          if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
            return true;
          const t3 = e3.params[0] || 1;
          for (let e4 = this._activeBuffer.scrollTop;e4 <= this._activeBuffer.scrollBottom; ++e4) {
            const s3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
            s3.deleteCells(0, t3, this._activeBuffer.getNullCell(this._eraseAttrData())), s3.isWrapped = false;
          }
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
        }
        scrollRight(e3) {
          if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
            return true;
          const t3 = e3.params[0] || 1;
          for (let e4 = this._activeBuffer.scrollTop;e4 <= this._activeBuffer.scrollBottom; ++e4) {
            const s3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
            s3.insertCells(0, t3, this._activeBuffer.getNullCell(this._eraseAttrData())), s3.isWrapped = false;
          }
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
        }
        insertColumns(e3) {
          if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
            return true;
          const t3 = e3.params[0] || 1;
          for (let e4 = this._activeBuffer.scrollTop;e4 <= this._activeBuffer.scrollBottom; ++e4) {
            const s3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
            s3.insertCells(this._activeBuffer.x, t3, this._activeBuffer.getNullCell(this._eraseAttrData())), s3.isWrapped = false;
          }
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
        }
        deleteColumns(e3) {
          if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
            return true;
          const t3 = e3.params[0] || 1;
          for (let e4 = this._activeBuffer.scrollTop;e4 <= this._activeBuffer.scrollBottom; ++e4) {
            const s3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
            s3.deleteCells(this._activeBuffer.x, t3, this._activeBuffer.getNullCell(this._eraseAttrData())), s3.isWrapped = false;
          }
          return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
        }
        eraseChars(e3) {
          this._restrictCursor();
          const t3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
          return t3 && (t3.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e3.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
        }
        repeatPrecedingCharacter(e3) {
          const t3 = this._parser.precedingJoinState;
          if (!t3)
            return true;
          const s3 = e3.params[0] || 1, i3 = p.UnicodeService.extractWidth(t3), r3 = this._activeBuffer.x - i3, n3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).getString(r3), o2 = new Uint32Array(n3.length * s3);
          let a2 = 0;
          for (let e4 = 0;e4 < n3.length; ) {
            const t4 = n3.codePointAt(e4) || 0;
            o2[a2++] = t4, e4 += t4 > 65535 ? 2 : 1;
          }
          let h2 = a2;
          for (let e4 = 1;e4 < s3; ++e4)
            o2.copyWithin(h2, 0, a2), h2 += a2;
          return this.print(o2, 0, h2), true;
        }
        sendDeviceAttributesPrimary(e3) {
          return e3.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(n2.C0.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(n2.C0.ESC + "[?6c")), true;
        }
        sendDeviceAttributesSecondary(e3) {
          return e3.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(n2.C0.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(n2.C0.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e3.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(n2.C0.ESC + "[>83;40003;0c")), true;
        }
        _is(e3) {
          return (this._optionsService.rawOptions.termName + "").indexOf(e3) === 0;
        }
        setMode(e3) {
          for (let t3 = 0;t3 < e3.length; t3++)
            switch (e3.params[t3]) {
              case 4:
                this._coreService.modes.insertMode = true;
                break;
              case 20:
                this._optionsService.options.convertEol = true;
            }
          return true;
        }
        setModePrivate(e3) {
          for (let t3 = 0;t3 < e3.length; t3++)
            switch (e3.params[t3]) {
              case 1:
                this._coreService.decPrivateModes.applicationCursorKeys = true;
                break;
              case 2:
                this._charsetService.setgCharset(0, o.DEFAULT_CHARSET), this._charsetService.setgCharset(1, o.DEFAULT_CHARSET), this._charsetService.setgCharset(2, o.DEFAULT_CHARSET), this._charsetService.setgCharset(3, o.DEFAULT_CHARSET);
                break;
              case 3:
                this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                break;
              case 6:
                this._coreService.decPrivateModes.origin = true, this._setCursor(0, 0);
                break;
              case 7:
                this._coreService.decPrivateModes.wraparound = true;
                break;
              case 12:
                this._optionsService.options.cursorBlink = true;
                break;
              case 45:
                this._coreService.decPrivateModes.reverseWraparound = true;
                break;
              case 66:
                this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire();
                break;
              case 9:
                this._coreMouseService.activeProtocol = "X10";
                break;
              case 1000:
                this._coreMouseService.activeProtocol = "VT200";
                break;
              case 1002:
                this._coreMouseService.activeProtocol = "DRAG";
                break;
              case 1003:
                this._coreMouseService.activeProtocol = "ANY";
                break;
              case 1004:
                this._coreService.decPrivateModes.sendFocus = true, this._onRequestSendFocus.fire();
                break;
              case 1005:
                this._logService.debug("DECSET 1005 not supported (see #2507)");
                break;
              case 1006:
                this._coreMouseService.activeEncoding = "SGR";
                break;
              case 1015:
                this._logService.debug("DECSET 1015 not supported (see #2507)");
                break;
              case 1016:
                this._coreMouseService.activeEncoding = "SGR_PIXELS";
                break;
              case 25:
                this._coreService.isCursorHidden = false;
                break;
              case 1048:
                this.saveCursor();
                break;
              case 1049:
                this.saveCursor();
              case 47:
              case 1047:
                this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(undefined), this._onRequestSyncScrollBar.fire();
                break;
              case 2004:
                this._coreService.decPrivateModes.bracketedPasteMode = true;
                break;
              case 2026:
                this._coreService.decPrivateModes.synchronizedOutput = true;
            }
          return true;
        }
        resetMode(e3) {
          for (let t3 = 0;t3 < e3.length; t3++)
            switch (e3.params[t3]) {
              case 4:
                this._coreService.modes.insertMode = false;
                break;
              case 20:
                this._optionsService.options.convertEol = false;
            }
          return true;
        }
        resetModePrivate(e3) {
          for (let t3 = 0;t3 < e3.length; t3++)
            switch (e3.params[t3]) {
              case 1:
                this._coreService.decPrivateModes.applicationCursorKeys = false;
                break;
              case 3:
                this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                break;
              case 6:
                this._coreService.decPrivateModes.origin = false, this._setCursor(0, 0);
                break;
              case 7:
                this._coreService.decPrivateModes.wraparound = false;
                break;
              case 12:
                this._optionsService.options.cursorBlink = false;
                break;
              case 45:
                this._coreService.decPrivateModes.reverseWraparound = false;
                break;
              case 66:
                this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire();
                break;
              case 9:
              case 1000:
              case 1002:
              case 1003:
                this._coreMouseService.activeProtocol = "NONE";
                break;
              case 1004:
                this._coreService.decPrivateModes.sendFocus = false;
                break;
              case 1005:
                this._logService.debug("DECRST 1005 not supported (see #2507)");
                break;
              case 1006:
              case 1016:
                this._coreMouseService.activeEncoding = "DEFAULT";
                break;
              case 1015:
                this._logService.debug("DECRST 1015 not supported (see #2507)");
                break;
              case 25:
                this._coreService.isCursorHidden = true;
                break;
              case 1048:
                this.restoreCursor();
                break;
              case 1049:
              case 47:
              case 1047:
                this._bufferService.buffers.activateNormalBuffer(), e3.params[t3] === 1049 && this.restoreCursor(), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(undefined), this._onRequestSyncScrollBar.fire();
                break;
              case 2004:
                this._coreService.decPrivateModes.bracketedPasteMode = false;
                break;
              case 2026:
                this._coreService.decPrivateModes.synchronizedOutput = false, this._onRequestRefreshRows.fire(undefined);
            }
          return true;
        }
        requestMode(e3, t3) {
          const s3 = this._coreService.decPrivateModes, { activeProtocol: i3, activeEncoding: r3 } = this._coreMouseService, o2 = this._coreService, { buffers: a2, cols: h2 } = this._bufferService, { active: c2, alt: l2 } = a2, u2 = this._optionsService.rawOptions, d2 = (e4) => e4 ? 1 : 2, f2 = e3.params[0];
          return _2 = f2, p2 = t3 ? f2 === 2 ? 4 : f2 === 4 ? d2(o2.modes.insertMode) : f2 === 12 ? 3 : f2 === 20 ? d2(u2.convertEol) : 0 : f2 === 1 ? d2(s3.applicationCursorKeys) : f2 === 3 ? u2.windowOptions.setWinLines ? h2 === 80 ? 2 : h2 === 132 ? 1 : 0 : 0 : f2 === 6 ? d2(s3.origin) : f2 === 7 ? d2(s3.wraparound) : f2 === 8 ? 3 : f2 === 9 ? d2(i3 === "X10") : f2 === 12 ? d2(u2.cursorBlink) : f2 === 25 ? d2(!o2.isCursorHidden) : f2 === 45 ? d2(s3.reverseWraparound) : f2 === 66 ? d2(s3.applicationKeypad) : f2 === 67 ? 4 : f2 === 1000 ? d2(i3 === "VT200") : f2 === 1002 ? d2(i3 === "DRAG") : f2 === 1003 ? d2(i3 === "ANY") : f2 === 1004 ? d2(s3.sendFocus) : f2 === 1005 ? 4 : f2 === 1006 ? d2(r3 === "SGR") : f2 === 1015 ? 4 : f2 === 1016 ? d2(r3 === "SGR_PIXELS") : f2 === 1048 ? 1 : f2 === 47 || f2 === 1047 || f2 === 1049 ? d2(c2 === l2) : f2 === 2004 ? d2(s3.bracketedPasteMode) : f2 === 2026 ? d2(s3.synchronizedOutput) : 0, o2.triggerDataEvent(`${n2.C0.ESC}[${t3 ? "" : "?"}${_2};${p2}$y`), true;
          var _2, p2;
        }
        _updateAttrColor(e3, t3, s3, i3, r3) {
          return t3 === 2 ? (e3 |= 50331648, e3 &= -16777216, e3 |= f.AttributeData.fromColorRGB([s3, i3, r3])) : t3 === 5 && (e3 &= -50331904, e3 |= 33554432 | 255 & s3), e3;
        }
        _extractColor(e3, t3, s3) {
          const i3 = [0, 0, -1, 0, 0, 0];
          let r3 = 0, n3 = 0;
          do {
            if (i3[n3 + r3] = e3.params[t3 + n3], e3.hasSubParams(t3 + n3)) {
              const s4 = e3.getSubParams(t3 + n3);
              let o2 = 0;
              do {
                i3[1] === 5 && (r3 = 1), i3[n3 + o2 + 1 + r3] = s4[o2];
              } while (++o2 < s4.length && o2 + n3 + 1 + r3 < i3.length);
              break;
            }
            if (i3[1] === 5 && n3 + r3 >= 2 || i3[1] === 2 && n3 + r3 >= 5)
              break;
            i3[1] && (r3 = 1);
          } while (++n3 + t3 < e3.length && n3 + r3 < i3.length);
          for (let e4 = 2;e4 < i3.length; ++e4)
            i3[e4] === -1 && (i3[e4] = 0);
          switch (i3[0]) {
            case 38:
              s3.fg = this._updateAttrColor(s3.fg, i3[1], i3[3], i3[4], i3[5]);
              break;
            case 48:
              s3.bg = this._updateAttrColor(s3.bg, i3[1], i3[3], i3[4], i3[5]);
              break;
            case 58:
              s3.extended = s3.extended.clone(), s3.extended.underlineColor = this._updateAttrColor(s3.extended.underlineColor, i3[1], i3[3], i3[4], i3[5]);
          }
          return n3;
        }
        _processUnderline(e3, t3) {
          t3.extended = t3.extended.clone(), (!~e3 || e3 > 5) && (e3 = 1), t3.extended.underlineStyle = e3, t3.fg |= 268435456, e3 === 0 && (t3.fg &= -268435457), t3.updateExtended();
        }
        _processSGR0(e3) {
          e3.fg = l.DEFAULT_ATTR_DATA.fg, e3.bg = l.DEFAULT_ATTR_DATA.bg, e3.extended = e3.extended.clone(), e3.extended.underlineStyle = 0, e3.extended.underlineColor &= -67108864, e3.updateExtended();
        }
        charAttributes(e3) {
          if (e3.length === 1 && e3.params[0] === 0)
            return this._processSGR0(this._curAttrData), true;
          const t3 = e3.length;
          let s3;
          const i3 = this._curAttrData;
          for (let r3 = 0;r3 < t3; r3++)
            s3 = e3.params[r3], s3 >= 30 && s3 <= 37 ? (i3.fg &= -50331904, i3.fg |= 16777216 | s3 - 30) : s3 >= 40 && s3 <= 47 ? (i3.bg &= -50331904, i3.bg |= 16777216 | s3 - 40) : s3 >= 90 && s3 <= 97 ? (i3.fg &= -50331904, i3.fg |= 16777224 | s3 - 90) : s3 >= 100 && s3 <= 107 ? (i3.bg &= -50331904, i3.bg |= 16777224 | s3 - 100) : s3 === 0 ? this._processSGR0(i3) : s3 === 1 ? i3.fg |= 134217728 : s3 === 3 ? i3.bg |= 67108864 : s3 === 4 ? (i3.fg |= 268435456, this._processUnderline(e3.hasSubParams(r3) ? e3.getSubParams(r3)[0] : 1, i3)) : s3 === 5 ? i3.fg |= 536870912 : s3 === 7 ? i3.fg |= 67108864 : s3 === 8 ? i3.fg |= 1073741824 : s3 === 9 ? i3.fg |= 2147483648 : s3 === 2 ? i3.bg |= 134217728 : s3 === 21 ? this._processUnderline(2, i3) : s3 === 22 ? (i3.fg &= -134217729, i3.bg &= -134217729) : s3 === 23 ? i3.bg &= -67108865 : s3 === 24 ? (i3.fg &= -268435457, this._processUnderline(0, i3)) : s3 === 25 ? i3.fg &= -536870913 : s3 === 27 ? i3.fg &= -67108865 : s3 === 28 ? i3.fg &= -1073741825 : s3 === 29 ? i3.fg &= 2147483647 : s3 === 39 ? (i3.fg &= -67108864, i3.fg |= 16777215 & l.DEFAULT_ATTR_DATA.fg) : s3 === 49 ? (i3.bg &= -67108864, i3.bg |= 16777215 & l.DEFAULT_ATTR_DATA.bg) : s3 === 38 || s3 === 48 || s3 === 58 ? r3 += this._extractColor(e3, r3, i3) : s3 === 53 ? i3.bg |= 1073741824 : s3 === 55 ? i3.bg &= -1073741825 : s3 === 59 ? (i3.extended = i3.extended.clone(), i3.extended.underlineColor = -1, i3.updateExtended()) : s3 === 100 ? (i3.fg &= -67108864, i3.fg |= 16777215 & l.DEFAULT_ATTR_DATA.fg, i3.bg &= -67108864, i3.bg |= 16777215 & l.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", s3);
          return true;
        }
        deviceStatus(e3) {
          switch (e3.params[0]) {
            case 5:
              this._coreService.triggerDataEvent(`${n2.C0.ESC}[0n`);
              break;
            case 6:
              const e4 = this._activeBuffer.y + 1, t3 = this._activeBuffer.x + 1;
              this._coreService.triggerDataEvent(`${n2.C0.ESC}[${e4};${t3}R`);
          }
          return true;
        }
        deviceStatusPrivate(e3) {
          if (e3.params[0] === 6) {
            const e4 = this._activeBuffer.y + 1, t3 = this._activeBuffer.x + 1;
            this._coreService.triggerDataEvent(`${n2.C0.ESC}[?${e4};${t3}R`);
          }
          return true;
        }
        softReset(e3) {
          return this._coreService.isCursorHidden = false, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = false, true;
        }
        setCursorStyle(e3) {
          const t3 = e3.length === 0 ? 1 : e3.params[0];
          if (t3 === 0)
            this._coreService.decPrivateModes.cursorStyle = undefined, this._coreService.decPrivateModes.cursorBlink = undefined;
          else {
            switch (t3) {
              case 1:
              case 2:
                this._coreService.decPrivateModes.cursorStyle = "block";
                break;
              case 3:
              case 4:
                this._coreService.decPrivateModes.cursorStyle = "underline";
                break;
              case 5:
              case 6:
                this._coreService.decPrivateModes.cursorStyle = "bar";
            }
            const e4 = t3 % 2 == 1;
            this._coreService.decPrivateModes.cursorBlink = e4;
          }
          return true;
        }
        setScrollRegion(e3) {
          const t3 = e3.params[0] || 1;
          let s3;
          return (e3.length < 2 || (s3 = e3.params[1]) > this._bufferService.rows || s3 === 0) && (s3 = this._bufferService.rows), s3 > t3 && (this._activeBuffer.scrollTop = t3 - 1, this._activeBuffer.scrollBottom = s3 - 1, this._setCursor(0, 0)), true;
        }
        windowOptions(e3) {
          if (!C2(e3.params[0], this._optionsService.rawOptions.windowOptions))
            return true;
          const t3 = e3.length > 1 ? e3.params[1] : 0;
          switch (e3.params[0]) {
            case 14:
              t3 !== 2 && this._onRequestWindowsOptionsReport.fire(w.GET_WIN_SIZE_PIXELS);
              break;
            case 16:
              this._onRequestWindowsOptionsReport.fire(w.GET_CELL_SIZE_PIXELS);
              break;
            case 18:
              this._bufferService && this._coreService.triggerDataEvent(`${n2.C0.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`);
              break;
            case 22:
              t3 !== 0 && t3 !== 2 || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), t3 !== 0 && t3 !== 1 || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
              break;
            case 23:
              t3 !== 0 && t3 !== 2 || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), t3 !== 0 && t3 !== 1 || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
          }
          return true;
        }
        saveCursor(e3) {
          return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, true;
        }
        restoreCursor(e3) {
          return this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset), this._restrictCursor(), true;
        }
        setTitle(e3) {
          return this._windowTitle = e3, this._onTitleChange.fire(e3), true;
        }
        setIconName(e3) {
          return this._iconName = e3, true;
        }
        setOrReportIndexedColor(e3) {
          const t3 = [], s3 = e3.split(";");
          for (;s3.length > 1; ) {
            const e4 = s3.shift(), i3 = s3.shift();
            if (/^\d+$/.exec(e4)) {
              const s4 = parseInt(e4);
              if (k(s4))
                if (i3 === "?")
                  t3.push({ type: 0, index: s4 });
                else {
                  const e5 = (0, m.parseColor)(i3);
                  e5 && t3.push({ type: 1, index: s4, color: e5 });
                }
            }
          }
          return t3.length && this._onColor.fire(t3), true;
        }
        setHyperlink(e3) {
          const t3 = e3.indexOf(";");
          if (t3 === -1)
            return true;
          const s3 = e3.slice(0, t3).trim(), i3 = e3.slice(t3 + 1);
          return i3 ? this._createHyperlink(s3, i3) : !s3.trim() && this._finishHyperlink();
        }
        _createHyperlink(e3, t3) {
          this._getCurrentLinkId() && this._finishHyperlink();
          const s3 = e3.split(":");
          let i3;
          const r3 = s3.findIndex((e4) => e4.startsWith("id="));
          return r3 !== -1 && (i3 = s3[r3].slice(3) || undefined), this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = this._oscLinkService.registerLink({ id: i3, uri: t3 }), this._curAttrData.updateExtended(), true;
        }
        _finishHyperlink() {
          return this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = 0, this._curAttrData.updateExtended(), true;
        }
        _setOrReportSpecialColor(e3, t3) {
          const s3 = e3.split(";");
          for (let e4 = 0;e4 < s3.length && !(t3 >= this._specialColors.length); ++e4, ++t3)
            if (s3[e4] === "?")
              this._onColor.fire([{ type: 0, index: this._specialColors[t3] }]);
            else {
              const i3 = (0, m.parseColor)(s3[e4]);
              i3 && this._onColor.fire([{ type: 1, index: this._specialColors[t3], color: i3 }]);
            }
          return true;
        }
        setOrReportFgColor(e3) {
          return this._setOrReportSpecialColor(e3, 0);
        }
        setOrReportBgColor(e3) {
          return this._setOrReportSpecialColor(e3, 1);
        }
        setOrReportCursorColor(e3) {
          return this._setOrReportSpecialColor(e3, 2);
        }
        restoreIndexedColor(e3) {
          if (!e3)
            return this._onColor.fire([{ type: 2 }]), true;
          const t3 = [], s3 = e3.split(";");
          for (let e4 = 0;e4 < s3.length; ++e4)
            if (/^\d+$/.exec(s3[e4])) {
              const i3 = parseInt(s3[e4]);
              k(i3) && t3.push({ type: 2, index: i3 });
            }
          return t3.length && this._onColor.fire(t3), true;
        }
        restoreFgColor(e3) {
          return this._onColor.fire([{ type: 2, index: 256 }]), true;
        }
        restoreBgColor(e3) {
          return this._onColor.fire([{ type: 2, index: 257 }]), true;
        }
        restoreCursorColor(e3) {
          return this._onColor.fire([{ type: 2, index: 258 }]), true;
        }
        nextLine() {
          return this._activeBuffer.x = 0, this.index(), true;
        }
        keypadApplicationMode() {
          return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire(), true;
        }
        keypadNumericMode() {
          return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire(), true;
        }
        selectDefaultCharset() {
          return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, o.DEFAULT_CHARSET), true;
        }
        selectCharset(e3) {
          return e3.length !== 2 ? (this.selectDefaultCharset(), true) : (e3[0] === "/" || this._charsetService.setgCharset(S[e3[0]], o.CHARSETS[e3[1]] || o.DEFAULT_CHARSET), true);
        }
        index() {
          return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), true;
        }
        tabSet() {
          return this._activeBuffer.tabs[this._activeBuffer.x] = true, true;
        }
        reverseIndex() {
          if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
            const e3 = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
            this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e3, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
          } else
            this._activeBuffer.y--, this._restrictCursor();
          return true;
        }
        fullReset() {
          return this._parser.reset(), this._onRequestReset.fire(), true;
        }
        reset() {
          this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = l.DEFAULT_ATTR_DATA.clone();
        }
        _eraseAttrData() {
          return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal;
        }
        setgLevel(e3) {
          return this._charsetService.setgLevel(e3), true;
        }
        screenAlignmentPattern() {
          const e3 = new d.CellData;
          e3.content = 1 << 22 | 69, e3.fg = this._curAttrData.fg, e3.bg = this._curAttrData.bg, this._setCursor(0, 0);
          for (let t3 = 0;t3 < this._bufferService.rows; ++t3) {
            const s3 = this._activeBuffer.ybase + this._activeBuffer.y + t3, i3 = this._activeBuffer.lines.get(s3);
            i3 && (i3.fill(e3), i3.isWrapped = false);
          }
          return this._dirtyRowTracker.markAllDirty(), this._setCursor(0, 0), true;
        }
        requestStatusString(e3, t3) {
          const s3 = this._bufferService.buffer, i3 = this._optionsService.rawOptions;
          return ((e4) => (this._coreService.triggerDataEvent(`${n2.C0.ESC}${e4}${n2.C0.ESC}\\`), true))(e3 === '"q' ? `P1$r${this._curAttrData.isProtected() ? 1 : 0}"q` : e3 === '"p' ? 'P1$r61;1"p' : e3 === "r" ? `P1$r${s3.scrollTop + 1};${s3.scrollBottom + 1}r` : e3 === "m" ? "P1$r0m" : e3 === " q" ? `P1$r${{ block: 2, underline: 4, bar: 6 }[i3.cursorStyle] - (i3.cursorBlink ? 1 : 0)} q` : "P0$r");
        }
        markRangeDirty(e3, t3) {
          this._dirtyRowTracker.markRangeDirty(e3, t3);
        }
      }
      t2.InputHandler = A;
      let L = class {
        constructor(e3) {
          this._bufferService = e3, this.clearRange();
        }
        clearRange() {
          this.start = this._bufferService.buffer.y, this.end = this._bufferService.buffer.y;
        }
        markDirty(e3) {
          e3 < this.start ? this.start = e3 : e3 > this.end && (this.end = e3);
        }
        markRangeDirty(e3, t3) {
          e3 > t3 && (E = e3, e3 = t3, t3 = E), e3 < this.start && (this.start = e3), t3 > this.end && (this.end = t3);
        }
        markAllDirty() {
          this.markRangeDirty(0, this._bufferService.rows - 1);
        }
      };
      function k(e3) {
        return 0 <= e3 && e3 < 256;
      }
      L = i2([r2(0, _.IBufferService)], L);
    }, 701: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.isChromeOS = t2.isLinux = t2.isWindows = t2.isIphone = t2.isIpad = t2.isMac = t2.isSafari = t2.isLegacyEdge = t2.isFirefox = t2.isNode = undefined, t2.getSafariVersion = function() {
        if (!t2.isSafari)
          return 0;
        const e3 = s2.match(/Version\/(\d+)/);
        return e3 === null || e3.length < 2 ? 0 : parseInt(e3[1]);
      }, t2.isNode = typeof process != "undefined" && "title" in process;
      const s2 = t2.isNode ? "node" : navigator.userAgent, i2 = t2.isNode ? "node" : navigator.platform;
      t2.isFirefox = s2.includes("Firefox"), t2.isLegacyEdge = s2.includes("Edge"), t2.isSafari = /^((?!chrome|android).)*safari/i.test(s2), t2.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(i2), t2.isIpad = i2 === "iPad", t2.isIphone = i2 === "iPhone", t2.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(i2), t2.isLinux = i2.indexOf("Linux") >= 0, t2.isChromeOS = /\bCrOS\b/.test(s2);
    }, 6168: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.DebouncedIdleTask = t2.IdleTaskQueue = t2.PriorityTaskQueue = undefined;
      const i2 = s2(701);

      class r2 {
        constructor() {
          this._tasks = [], this._i = 0;
        }
        enqueue(e3) {
          this._tasks.push(e3), this._start();
        }
        flush() {
          for (;this._i < this._tasks.length; )
            this._tasks[this._i]() || this._i++;
          this.clear();
        }
        clear() {
          this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = undefined), this._i = 0, this._tasks.length = 0;
        }
        _start() {
          this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
        }
        _process(e3) {
          this._idleCallback = undefined;
          let t3 = 0, s3 = 0, i3 = e3.timeRemaining(), r3 = 0;
          for (;this._i < this._tasks.length; ) {
            if (t3 = performance.now(), this._tasks[this._i]() || this._i++, t3 = Math.max(1, performance.now() - t3), s3 = Math.max(t3, s3), r3 = e3.timeRemaining(), 1.5 * s3 > r3)
              return i3 - t3 < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(i3 - t3))}ms`), void this._start();
            i3 = r3;
          }
          this.clear();
        }
      }

      class n2 extends r2 {
        _requestCallback(e3) {
          return setTimeout(() => e3(this._createDeadline(16)));
        }
        _cancelCallback(e3) {
          clearTimeout(e3);
        }
        _createDeadline(e3) {
          const t3 = performance.now() + e3;
          return { timeRemaining: () => Math.max(0, t3 - performance.now()) };
        }
      }
      t2.PriorityTaskQueue = n2, t2.IdleTaskQueue = !i2.isNode && "requestIdleCallback" in window ? class extends r2 {
        _requestCallback(e3) {
          return requestIdleCallback(e3);
        }
        _cancelCallback(e3) {
          cancelIdleCallback(e3);
        }
      } : n2, t2.DebouncedIdleTask = class {
        constructor() {
          this._queue = new t2.IdleTaskQueue;
        }
        set(e3) {
          this._queue.clear(), this._queue.enqueue(e3);
        }
        flush() {
          this._queue.flush();
        }
      };
    }, 5882: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.updateWindowsModeWrappedState = function(e3) {
        const t3 = e3.buffer.lines.get(e3.buffer.ybase + e3.buffer.y - 1), s3 = t3?.get(e3.cols - 1), r2 = e3.buffer.lines.get(e3.buffer.ybase + e3.buffer.y);
        r2 && s3 && (r2.isWrapped = s3[i2.CHAR_DATA_CODE_INDEX] !== i2.NULL_CELL_CODE && s3[i2.CHAR_DATA_CODE_INDEX] !== i2.WHITESPACE_CELL_CODE);
      };
      const i2 = s2(8938);
    }, 5451: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.ExtendedAttrs = t2.AttributeData = undefined;

      class s2 {
        constructor() {
          this.fg = 0, this.bg = 0, this.extended = new i2;
        }
        static toColorRGB(e3) {
          return [e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3];
        }
        static fromColorRGB(e3) {
          return (255 & e3[0]) << 16 | (255 & e3[1]) << 8 | 255 & e3[2];
        }
        clone() {
          const e3 = new s2;
          return e3.fg = this.fg, e3.bg = this.bg, e3.extended = this.extended.clone(), e3;
        }
        isInverse() {
          return 67108864 & this.fg;
        }
        isBold() {
          return 134217728 & this.fg;
        }
        isUnderline() {
          return this.hasExtendedAttrs() && this.extended.underlineStyle !== 0 ? 1 : 268435456 & this.fg;
        }
        isBlink() {
          return 536870912 & this.fg;
        }
        isInvisible() {
          return 1073741824 & this.fg;
        }
        isItalic() {
          return 67108864 & this.bg;
        }
        isDim() {
          return 134217728 & this.bg;
        }
        isStrikethrough() {
          return 2147483648 & this.fg;
        }
        isProtected() {
          return 536870912 & this.bg;
        }
        isOverline() {
          return 1073741824 & this.bg;
        }
        getFgColorMode() {
          return 50331648 & this.fg;
        }
        getBgColorMode() {
          return 50331648 & this.bg;
        }
        isFgRGB() {
          return !(50331648 & ~this.fg);
        }
        isBgRGB() {
          return !(50331648 & ~this.bg);
        }
        isFgPalette() {
          return (50331648 & this.fg) == 16777216 || (50331648 & this.fg) == 33554432;
        }
        isBgPalette() {
          return (50331648 & this.bg) == 16777216 || (50331648 & this.bg) == 33554432;
        }
        isFgDefault() {
          return !(50331648 & this.fg);
        }
        isBgDefault() {
          return !(50331648 & this.bg);
        }
        isAttributeDefault() {
          return this.fg === 0 && this.bg === 0;
        }
        getFgColor() {
          switch (50331648 & this.fg) {
            case 16777216:
            case 33554432:
              return 255 & this.fg;
            case 50331648:
              return 16777215 & this.fg;
            default:
              return -1;
          }
        }
        getBgColor() {
          switch (50331648 & this.bg) {
            case 16777216:
            case 33554432:
              return 255 & this.bg;
            case 50331648:
              return 16777215 & this.bg;
            default:
              return -1;
          }
        }
        hasExtendedAttrs() {
          return 268435456 & this.bg;
        }
        updateExtended() {
          this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
        }
        getUnderlineColor() {
          if (268435456 & this.bg && ~this.extended.underlineColor)
            switch (50331648 & this.extended.underlineColor) {
              case 16777216:
              case 33554432:
                return 255 & this.extended.underlineColor;
              case 50331648:
                return 16777215 & this.extended.underlineColor;
              default:
                return this.getFgColor();
            }
          return this.getFgColor();
        }
        getUnderlineColorMode() {
          return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
        }
        isUnderlineColorRGB() {
          return 268435456 & this.bg && ~this.extended.underlineColor ? !(50331648 & ~this.extended.underlineColor) : this.isFgRGB();
        }
        isUnderlineColorPalette() {
          return 268435456 & this.bg && ~this.extended.underlineColor ? (50331648 & this.extended.underlineColor) == 16777216 || (50331648 & this.extended.underlineColor) == 33554432 : this.isFgPalette();
        }
        isUnderlineColorDefault() {
          return 268435456 & this.bg && ~this.extended.underlineColor ? !(50331648 & this.extended.underlineColor) : this.isFgDefault();
        }
        getUnderlineStyle() {
          return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
        }
        getUnderlineVariantOffset() {
          return this.extended.underlineVariantOffset;
        }
      }
      t2.AttributeData = s2;

      class i2 {
        get ext() {
          return this._urlId ? -469762049 & this._ext | this.underlineStyle << 26 : this._ext;
        }
        set ext(e3) {
          this._ext = e3;
        }
        get underlineStyle() {
          return this._urlId ? 5 : (469762048 & this._ext) >> 26;
        }
        set underlineStyle(e3) {
          this._ext &= -469762049, this._ext |= e3 << 26 & 469762048;
        }
        get underlineColor() {
          return 67108863 & this._ext;
        }
        set underlineColor(e3) {
          this._ext &= -67108864, this._ext |= 67108863 & e3;
        }
        get urlId() {
          return this._urlId;
        }
        set urlId(e3) {
          this._urlId = e3;
        }
        get underlineVariantOffset() {
          const e3 = (3758096384 & this._ext) >> 29;
          return e3 < 0 ? 4294967288 ^ e3 : e3;
        }
        set underlineVariantOffset(e3) {
          this._ext &= 536870911, this._ext |= e3 << 29 & 3758096384;
        }
        constructor(e3 = 0, t3 = 0) {
          this._ext = 0, this._urlId = 0, this._ext = e3, this._urlId = t3;
        }
        clone() {
          return new i2(this._ext, this._urlId);
        }
        isEmpty() {
          return this.underlineStyle === 0 && this._urlId === 0;
        }
      }
      t2.ExtendedAttrs = i2;
    }, 1073: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.Buffer = t2.MAX_BUFFER_SIZE = undefined;
      const i2 = s2(5639), r2 = s2(6168), n2 = s2(5451), o = s2(6107), a = s2(732), h = s2(3055), c = s2(8938), l = s2(8158), u = s2(6760);
      t2.MAX_BUFFER_SIZE = 4294967295, t2.Buffer = class {
        constructor(e3, t3, s3) {
          this._hasScrollback = e3, this._optionsService = t3, this._bufferService = s3, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.tabs = {}, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = o.DEFAULT_ATTR_DATA.clone(), this.savedCharset = u.DEFAULT_CHARSET, this.markers = [], this._nullCell = h.CellData.fromCharData([0, c.NULL_CELL_CHAR, c.NULL_CELL_WIDTH, c.NULL_CELL_CODE]), this._whitespaceCell = h.CellData.fromCharData([0, c.WHITESPACE_CELL_CHAR, c.WHITESPACE_CELL_WIDTH, c.WHITESPACE_CELL_CODE]), this._isClearing = false, this._memoryCleanupQueue = new r2.IdleTaskQueue, this._memoryCleanupPosition = 0, this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new i2.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
        }
        getNullCell(e3) {
          return e3 ? (this._nullCell.fg = e3.fg, this._nullCell.bg = e3.bg, this._nullCell.extended = e3.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new n2.ExtendedAttrs), this._nullCell;
        }
        getWhitespaceCell(e3) {
          return e3 ? (this._whitespaceCell.fg = e3.fg, this._whitespaceCell.bg = e3.bg, this._whitespaceCell.extended = e3.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new n2.ExtendedAttrs), this._whitespaceCell;
        }
        getBlankLine(e3, t3) {
          return new o.BufferLine(this._bufferService.cols, this.getNullCell(e3), t3);
        }
        get hasScrollback() {
          return this._hasScrollback && this.lines.maxLength > this._rows;
        }
        get isCursorInViewport() {
          const e3 = this.ybase + this.y - this.ydisp;
          return e3 >= 0 && e3 < this._rows;
        }
        _getCorrectBufferLength(e3) {
          if (!this._hasScrollback)
            return e3;
          const s3 = e3 + this._optionsService.rawOptions.scrollback;
          return s3 > t2.MAX_BUFFER_SIZE ? t2.MAX_BUFFER_SIZE : s3;
        }
        fillViewportRows(e3) {
          if (this.lines.length === 0) {
            e3 === undefined && (e3 = o.DEFAULT_ATTR_DATA);
            let t3 = this._rows;
            for (;t3--; )
              this.lines.push(this.getBlankLine(e3));
          }
        }
        clear() {
          this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new i2.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
        }
        resize(e3, t3) {
          const s3 = this.getNullCell(o.DEFAULT_ATTR_DATA);
          let i3 = 0;
          const r3 = this._getCorrectBufferLength(t3);
          if (r3 > this.lines.maxLength && (this.lines.maxLength = r3), this.lines.length > 0) {
            if (this._cols < e3)
              for (let t4 = 0;t4 < this.lines.length; t4++)
                i3 += +this.lines.get(t4).resize(e3, s3);
            let n3 = 0;
            if (this._rows < t3)
              for (let i4 = this._rows;i4 < t3; i4++)
                this.lines.length < t3 + this.ybase && (this._optionsService.rawOptions.windowsMode || this._optionsService.rawOptions.windowsPty.backend !== undefined || this._optionsService.rawOptions.windowsPty.buildNumber !== undefined ? this.lines.push(new o.BufferLine(e3, s3)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + n3 + 1 ? (this.ybase--, n3++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new o.BufferLine(e3, s3)));
            else
              for (let e4 = this._rows;e4 > t3; e4--)
                this.lines.length > t3 + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
            if (r3 < this.lines.maxLength) {
              const e4 = this.lines.length - r3;
              e4 > 0 && (this.lines.trimStart(e4), this.ybase = Math.max(this.ybase - e4, 0), this.ydisp = Math.max(this.ydisp - e4, 0), this.savedY = Math.max(this.savedY - e4, 0)), this.lines.maxLength = r3;
            }
            this.x = Math.min(this.x, e3 - 1), this.y = Math.min(this.y, t3 - 1), n3 && (this.y += n3), this.savedX = Math.min(this.savedX, e3 - 1), this.scrollTop = 0;
          }
          if (this.scrollBottom = t3 - 1, this._isReflowEnabled && (this._reflow(e3, t3), this._cols > e3))
            for (let t4 = 0;t4 < this.lines.length; t4++)
              i3 += +this.lines.get(t4).resize(e3, s3);
          this._cols = e3, this._rows = t3, this._memoryCleanupQueue.clear(), i3 > 0.1 * this.lines.length && (this._memoryCleanupPosition = 0, this._memoryCleanupQueue.enqueue(() => this._batchedMemoryCleanup()));
        }
        _batchedMemoryCleanup() {
          let e3 = true;
          this._memoryCleanupPosition >= this.lines.length && (this._memoryCleanupPosition = 0, e3 = false);
          let t3 = 0;
          for (;this._memoryCleanupPosition < this.lines.length; )
            if (t3 += this.lines.get(this._memoryCleanupPosition++).cleanupMemory(), t3 > 100)
              return true;
          return e3;
        }
        get _isReflowEnabled() {
          const e3 = this._optionsService.rawOptions.windowsPty;
          return e3 && e3.buildNumber ? this._hasScrollback && e3.backend === "conpty" && e3.buildNumber >= 21376 : this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
        }
        _reflow(e3, t3) {
          this._cols !== e3 && (e3 > this._cols ? this._reflowLarger(e3, t3) : this._reflowSmaller(e3, t3));
        }
        _reflowLarger(e3, t3) {
          const s3 = this._optionsService.rawOptions.reflowCursorLine, i3 = (0, a.reflowLargerGetLinesToRemove)(this.lines, this._cols, e3, this.ybase + this.y, this.getNullCell(o.DEFAULT_ATTR_DATA), s3);
          if (i3.length > 0) {
            const s4 = (0, a.reflowLargerCreateNewLayout)(this.lines, i3);
            (0, a.reflowLargerApplyNewLayout)(this.lines, s4.layout), this._reflowLargerAdjustViewport(e3, t3, s4.countRemoved);
          }
        }
        _reflowLargerAdjustViewport(e3, t3, s3) {
          const i3 = this.getNullCell(o.DEFAULT_ATTR_DATA);
          let r3 = s3;
          for (;r3-- > 0; )
            this.ybase === 0 ? (this.y > 0 && this.y--, this.lines.length < t3 && this.lines.push(new o.BufferLine(e3, i3))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
          this.savedY = Math.max(this.savedY - s3, 0);
        }
        _reflowSmaller(e3, t3) {
          const s3 = this._optionsService.rawOptions.reflowCursorLine, i3 = this.getNullCell(o.DEFAULT_ATTR_DATA), r3 = [];
          let n3 = 0;
          for (let h2 = this.lines.length - 1;h2 >= 0; h2--) {
            let c2 = this.lines.get(h2);
            if (!c2 || !c2.isWrapped && c2.getTrimmedLength() <= e3)
              continue;
            const l2 = [c2];
            for (;c2.isWrapped && h2 > 0; )
              c2 = this.lines.get(--h2), l2.unshift(c2);
            if (!s3) {
              const e4 = this.ybase + this.y;
              if (e4 >= h2 && e4 < h2 + l2.length)
                continue;
            }
            const u2 = l2[l2.length - 1].getTrimmedLength(), d = (0, a.reflowSmallerGetNewLineLengths)(l2, this._cols, e3), f = d.length - l2.length;
            let _;
            _ = this.ybase === 0 && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + f) : Math.max(0, this.lines.length - this.lines.maxLength + f);
            const p = [];
            for (let e4 = 0;e4 < f; e4++) {
              const e5 = this.getBlankLine(o.DEFAULT_ATTR_DATA, true);
              p.push(e5);
            }
            p.length > 0 && (r3.push({ start: h2 + l2.length + n3, newLines: p }), n3 += p.length), l2.push(...p);
            let g = d.length - 1, v = d[g];
            v === 0 && (g--, v = d[g]);
            let m = l2.length - f - 1, b = u2;
            for (;m >= 0; ) {
              const e4 = Math.min(b, v);
              if (l2[g] === undefined)
                break;
              if (l2[g].copyCellsFrom(l2[m], b - e4, v - e4, e4, true), v -= e4, v === 0 && (g--, v = d[g]), b -= e4, b === 0) {
                m--;
                const e5 = Math.max(m, 0);
                b = (0, a.getWrappedLineTrimmedLength)(l2, e5, this._cols);
              }
            }
            for (let t4 = 0;t4 < l2.length; t4++)
              d[t4] < e3 && l2[t4].setCell(d[t4], i3);
            let S = f - _;
            for (;S-- > 0; )
              this.ybase === 0 ? this.y < t3 - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + n3) - t3 && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
            this.savedY = Math.min(this.savedY + f, this.ybase + t3 - 1);
          }
          if (r3.length > 0) {
            const e4 = [], t4 = [];
            for (let e5 = 0;e5 < this.lines.length; e5++)
              t4.push(this.lines.get(e5));
            const s4 = this.lines.length;
            let i4 = s4 - 1, o2 = 0, a2 = r3[o2];
            this.lines.length = Math.min(this.lines.maxLength, this.lines.length + n3);
            let h2 = 0;
            for (let c3 = Math.min(this.lines.maxLength - 1, s4 + n3 - 1);c3 >= 0; c3--)
              if (a2 && a2.start > i4 + h2) {
                for (let e5 = a2.newLines.length - 1;e5 >= 0; e5--)
                  this.lines.set(c3--, a2.newLines[e5]);
                c3++, e4.push({ index: i4 + 1, amount: a2.newLines.length }), h2 += a2.newLines.length, a2 = r3[++o2];
              } else
                this.lines.set(c3, t4[i4--]);
            let c2 = 0;
            for (let t5 = e4.length - 1;t5 >= 0; t5--)
              e4[t5].index += c2, this.lines.onInsertEmitter.fire(e4[t5]), c2 += e4[t5].amount;
            const l2 = Math.max(0, s4 + n3 - this.lines.maxLength);
            l2 > 0 && this.lines.onTrimEmitter.fire(l2);
          }
        }
        translateBufferLineToString(e3, t3, s3 = 0, i3) {
          const r3 = this.lines.get(e3);
          return r3 ? r3.translateToString(t3, s3, i3) : "";
        }
        getWrappedRangeForLine(e3) {
          let t3 = e3, s3 = e3;
          for (;t3 > 0 && this.lines.get(t3).isWrapped; )
            t3--;
          for (;s3 + 1 < this.lines.length && this.lines.get(s3 + 1).isWrapped; )
            s3++;
          return { first: t3, last: s3 };
        }
        setupTabStops(e3) {
          for (e3 != null ? this.tabs[e3] || (e3 = this.prevStop(e3)) : (this.tabs = {}, e3 = 0);e3 < this._cols; e3 += this._optionsService.rawOptions.tabStopWidth)
            this.tabs[e3] = true;
        }
        prevStop(e3) {
          for (e3 == null && (e3 = this.x);!this.tabs[--e3] && e3 > 0; )
            ;
          return e3 >= this._cols ? this._cols - 1 : e3 < 0 ? 0 : e3;
        }
        nextStop(e3) {
          for (e3 == null && (e3 = this.x);!this.tabs[++e3] && e3 < this._cols; )
            ;
          return e3 >= this._cols ? this._cols - 1 : e3 < 0 ? 0 : e3;
        }
        clearMarkers(e3) {
          this._isClearing = true;
          for (let t3 = 0;t3 < this.markers.length; t3++)
            this.markers[t3].line === e3 && (this.markers[t3].dispose(), this.markers.splice(t3--, 1));
          this._isClearing = false;
        }
        clearAllMarkers() {
          this._isClearing = true;
          for (let e3 = 0;e3 < this.markers.length; e3++)
            this.markers[e3].dispose();
          this.markers.length = 0, this._isClearing = false;
        }
        addMarker(e3) {
          const t3 = new l.Marker(e3);
          return this.markers.push(t3), t3.register(this.lines.onTrim((e4) => {
            t3.line -= e4, t3.line < 0 && t3.dispose();
          })), t3.register(this.lines.onInsert((e4) => {
            t3.line >= e4.index && (t3.line += e4.amount);
          })), t3.register(this.lines.onDelete((e4) => {
            t3.line >= e4.index && t3.line < e4.index + e4.amount && t3.dispose(), t3.line > e4.index && (t3.line -= e4.amount);
          })), t3.register(t3.onDispose(() => this._removeMarker(t3))), t3;
        }
        _removeMarker(e3) {
          this._isClearing || this.markers.splice(this.markers.indexOf(e3), 1);
        }
      };
    }, 6107: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferLine = t2.DEFAULT_ATTR_DATA = undefined;
      const i2 = s2(5451), r2 = s2(3055), n2 = s2(8938), o = s2(726);
      t2.DEFAULT_ATTR_DATA = Object.freeze(new i2.AttributeData);
      let a = 0;

      class h {
        constructor(e3, t3, s3 = false) {
          this.isWrapped = s3, this._combined = {}, this._extendedAttrs = {}, this._data = new Uint32Array(3 * e3);
          const i3 = t3 || r2.CellData.fromCharData([0, n2.NULL_CELL_CHAR, n2.NULL_CELL_WIDTH, n2.NULL_CELL_CODE]);
          for (let t4 = 0;t4 < e3; ++t4)
            this.setCell(t4, i3);
          this.length = e3;
        }
        get(e3) {
          const t3 = this._data[3 * e3 + 0], s3 = 2097151 & t3;
          return [this._data[3 * e3 + 1], 2097152 & t3 ? this._combined[e3] : s3 ? (0, o.stringFromCodePoint)(s3) : "", t3 >> 22, 2097152 & t3 ? this._combined[e3].charCodeAt(this._combined[e3].length - 1) : s3];
        }
        set(e3, t3) {
          this._data[3 * e3 + 1] = t3[n2.CHAR_DATA_ATTR_INDEX], t3[n2.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e3] = t3[1], this._data[3 * e3 + 0] = 2097152 | e3 | t3[n2.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[3 * e3 + 0] = t3[n2.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t3[n2.CHAR_DATA_WIDTH_INDEX] << 22;
        }
        getWidth(e3) {
          return this._data[3 * e3 + 0] >> 22;
        }
        hasWidth(e3) {
          return 12582912 & this._data[3 * e3 + 0];
        }
        getFg(e3) {
          return this._data[3 * e3 + 1];
        }
        getBg(e3) {
          return this._data[3 * e3 + 2];
        }
        hasContent(e3) {
          return 4194303 & this._data[3 * e3 + 0];
        }
        getCodePoint(e3) {
          const t3 = this._data[3 * e3 + 0];
          return 2097152 & t3 ? this._combined[e3].charCodeAt(this._combined[e3].length - 1) : 2097151 & t3;
        }
        isCombined(e3) {
          return 2097152 & this._data[3 * e3 + 0];
        }
        getString(e3) {
          const t3 = this._data[3 * e3 + 0];
          return 2097152 & t3 ? this._combined[e3] : 2097151 & t3 ? (0, o.stringFromCodePoint)(2097151 & t3) : "";
        }
        isProtected(e3) {
          return 536870912 & this._data[3 * e3 + 2];
        }
        loadCell(e3, t3) {
          return a = 3 * e3, t3.content = this._data[a + 0], t3.fg = this._data[a + 1], t3.bg = this._data[a + 2], 2097152 & t3.content && (t3.combinedData = this._combined[e3]), 268435456 & t3.bg && (t3.extended = this._extendedAttrs[e3]), t3;
        }
        setCell(e3, t3) {
          2097152 & t3.content && (this._combined[e3] = t3.combinedData), 268435456 & t3.bg && (this._extendedAttrs[e3] = t3.extended), this._data[3 * e3 + 0] = t3.content, this._data[3 * e3 + 1] = t3.fg, this._data[3 * e3 + 2] = t3.bg;
        }
        setCellFromCodepoint(e3, t3, s3, i3) {
          268435456 & i3.bg && (this._extendedAttrs[e3] = i3.extended), this._data[3 * e3 + 0] = t3 | s3 << 22, this._data[3 * e3 + 1] = i3.fg, this._data[3 * e3 + 2] = i3.bg;
        }
        addCodepointToCell(e3, t3, s3) {
          let i3 = this._data[3 * e3 + 0];
          2097152 & i3 ? this._combined[e3] += (0, o.stringFromCodePoint)(t3) : 2097151 & i3 ? (this._combined[e3] = (0, o.stringFromCodePoint)(2097151 & i3) + (0, o.stringFromCodePoint)(t3), i3 &= -2097152, i3 |= 2097152) : i3 = t3 | 1 << 22, s3 && (i3 &= -12582913, i3 |= s3 << 22), this._data[3 * e3 + 0] = i3;
        }
        insertCells(e3, t3, s3) {
          if ((e3 %= this.length) && this.getWidth(e3 - 1) === 2 && this.setCellFromCodepoint(e3 - 1, 0, 1, s3), t3 < this.length - e3) {
            const i3 = new r2.CellData;
            for (let s4 = this.length - e3 - t3 - 1;s4 >= 0; --s4)
              this.setCell(e3 + t3 + s4, this.loadCell(e3 + s4, i3));
            for (let i4 = 0;i4 < t3; ++i4)
              this.setCell(e3 + i4, s3);
          } else
            for (let t4 = e3;t4 < this.length; ++t4)
              this.setCell(t4, s3);
          this.getWidth(this.length - 1) === 2 && this.setCellFromCodepoint(this.length - 1, 0, 1, s3);
        }
        deleteCells(e3, t3, s3) {
          if (e3 %= this.length, t3 < this.length - e3) {
            const i3 = new r2.CellData;
            for (let s4 = 0;s4 < this.length - e3 - t3; ++s4)
              this.setCell(e3 + s4, this.loadCell(e3 + t3 + s4, i3));
            for (let e4 = this.length - t3;e4 < this.length; ++e4)
              this.setCell(e4, s3);
          } else
            for (let t4 = e3;t4 < this.length; ++t4)
              this.setCell(t4, s3);
          e3 && this.getWidth(e3 - 1) === 2 && this.setCellFromCodepoint(e3 - 1, 0, 1, s3), this.getWidth(e3) !== 0 || this.hasContent(e3) || this.setCellFromCodepoint(e3, 0, 1, s3);
        }
        replaceCells(e3, t3, s3, i3 = false) {
          if (i3)
            for (e3 && this.getWidth(e3 - 1) === 2 && !this.isProtected(e3 - 1) && this.setCellFromCodepoint(e3 - 1, 0, 1, s3), t3 < this.length && this.getWidth(t3 - 1) === 2 && !this.isProtected(t3) && this.setCellFromCodepoint(t3, 0, 1, s3);e3 < t3 && e3 < this.length; )
              this.isProtected(e3) || this.setCell(e3, s3), e3++;
          else
            for (e3 && this.getWidth(e3 - 1) === 2 && this.setCellFromCodepoint(e3 - 1, 0, 1, s3), t3 < this.length && this.getWidth(t3 - 1) === 2 && this.setCellFromCodepoint(t3, 0, 1, s3);e3 < t3 && e3 < this.length; )
              this.setCell(e3++, s3);
        }
        resize(e3, t3) {
          if (e3 === this.length)
            return 4 * this._data.length * 2 < this._data.buffer.byteLength;
          const s3 = 3 * e3;
          if (e3 > this.length) {
            if (this._data.buffer.byteLength >= 4 * s3)
              this._data = new Uint32Array(this._data.buffer, 0, s3);
            else {
              const e4 = new Uint32Array(s3);
              e4.set(this._data), this._data = e4;
            }
            for (let s4 = this.length;s4 < e3; ++s4)
              this.setCell(s4, t3);
          } else {
            this._data = this._data.subarray(0, s3);
            const t4 = Object.keys(this._combined);
            for (let s4 = 0;s4 < t4.length; s4++) {
              const i4 = parseInt(t4[s4], 10);
              i4 >= e3 && delete this._combined[i4];
            }
            const i3 = Object.keys(this._extendedAttrs);
            for (let t5 = 0;t5 < i3.length; t5++) {
              const s4 = parseInt(i3[t5], 10);
              s4 >= e3 && delete this._extendedAttrs[s4];
            }
          }
          return this.length = e3, 4 * s3 * 2 < this._data.buffer.byteLength;
        }
        cleanupMemory() {
          if (4 * this._data.length * 2 < this._data.buffer.byteLength) {
            const e3 = new Uint32Array(this._data.length);
            return e3.set(this._data), this._data = e3, 1;
          }
          return 0;
        }
        fill(e3, t3 = false) {
          if (t3)
            for (let t4 = 0;t4 < this.length; ++t4)
              this.isProtected(t4) || this.setCell(t4, e3);
          else {
            this._combined = {}, this._extendedAttrs = {};
            for (let t4 = 0;t4 < this.length; ++t4)
              this.setCell(t4, e3);
          }
        }
        copyFrom(e3) {
          this.length !== e3.length ? this._data = new Uint32Array(e3._data) : this._data.set(e3._data), this.length = e3.length, this._combined = {};
          for (const t3 in e3._combined)
            this._combined[t3] = e3._combined[t3];
          this._extendedAttrs = {};
          for (const t3 in e3._extendedAttrs)
            this._extendedAttrs[t3] = e3._extendedAttrs[t3];
          this.isWrapped = e3.isWrapped;
        }
        clone() {
          const e3 = new h(0);
          e3._data = new Uint32Array(this._data), e3.length = this.length;
          for (const t3 in this._combined)
            e3._combined[t3] = this._combined[t3];
          for (const t3 in this._extendedAttrs)
            e3._extendedAttrs[t3] = this._extendedAttrs[t3];
          return e3.isWrapped = this.isWrapped, e3;
        }
        getTrimmedLength() {
          for (let e3 = this.length - 1;e3 >= 0; --e3)
            if (4194303 & this._data[3 * e3 + 0])
              return e3 + (this._data[3 * e3 + 0] >> 22);
          return 0;
        }
        getNoBgTrimmedLength() {
          for (let e3 = this.length - 1;e3 >= 0; --e3)
            if (4194303 & this._data[3 * e3 + 0] || 50331648 & this._data[3 * e3 + 2])
              return e3 + (this._data[3 * e3 + 0] >> 22);
          return 0;
        }
        copyCellsFrom(e3, t3, s3, i3, r3) {
          const n3 = e3._data;
          if (r3)
            for (let r4 = i3 - 1;r4 >= 0; r4--) {
              for (let e4 = 0;e4 < 3; e4++)
                this._data[3 * (s3 + r4) + e4] = n3[3 * (t3 + r4) + e4];
              268435456 & n3[3 * (t3 + r4) + 2] && (this._extendedAttrs[s3 + r4] = e3._extendedAttrs[t3 + r4]);
            }
          else
            for (let r4 = 0;r4 < i3; r4++) {
              for (let e4 = 0;e4 < 3; e4++)
                this._data[3 * (s3 + r4) + e4] = n3[3 * (t3 + r4) + e4];
              268435456 & n3[3 * (t3 + r4) + 2] && (this._extendedAttrs[s3 + r4] = e3._extendedAttrs[t3 + r4]);
            }
          const o2 = Object.keys(e3._combined);
          for (let i4 = 0;i4 < o2.length; i4++) {
            const r4 = parseInt(o2[i4], 10);
            r4 >= t3 && (this._combined[r4 - t3 + s3] = e3._combined[r4]);
          }
        }
        translateToString(e3, t3, s3, i3) {
          t3 = t3 ?? 0, s3 = s3 ?? this.length, e3 && (s3 = Math.min(s3, this.getTrimmedLength())), i3 && (i3.length = 0);
          let r3 = "";
          for (;t3 < s3; ) {
            const e4 = this._data[3 * t3 + 0], s4 = 2097151 & e4, a2 = 2097152 & e4 ? this._combined[t3] : s4 ? (0, o.stringFromCodePoint)(s4) : n2.WHITESPACE_CELL_CHAR;
            if (r3 += a2, i3)
              for (let e5 = 0;e5 < a2.length; ++e5)
                i3.push(t3);
            t3 += e4 >> 22 || 1;
          }
          return i3 && i3.push(t3), r3;
        }
      }
      t2.BufferLine = h;
    }, 732: (e2, t2) => {
      function s2(e3, t3, s3) {
        if (t3 === e3.length - 1)
          return e3[t3].getTrimmedLength();
        const i2 = !e3[t3].hasContent(s3 - 1) && e3[t3].getWidth(s3 - 1) === 1, r2 = e3[t3 + 1].getWidth(0) === 2;
        return i2 && r2 ? s3 - 1 : s3;
      }
      Object.defineProperty(t2, "__esModule", { value: true }), t2.reflowLargerGetLinesToRemove = function(e3, t3, i2, r2, n2, o) {
        const a = [];
        for (let h = 0;h < e3.length - 1; h++) {
          let c = h, l = e3.get(++c);
          if (!l.isWrapped)
            continue;
          const u = [e3.get(h)];
          for (;c < e3.length && l.isWrapped; )
            u.push(l), l = e3.get(++c);
          if (!o && r2 >= h && r2 < c) {
            h += u.length - 1;
            continue;
          }
          let d = 0, f = s2(u, d, t3), _ = 1, p = 0;
          for (;_ < u.length; ) {
            const e4 = s2(u, _, t3), r3 = e4 - p, o2 = i2 - f, a2 = Math.min(r3, o2);
            u[d].copyCellsFrom(u[_], p, f, a2, false), f += a2, f === i2 && (d++, f = 0), p += a2, p === e4 && (_++, p = 0), f === 0 && d !== 0 && u[d - 1].getWidth(i2 - 1) === 2 && (u[d].copyCellsFrom(u[d - 1], i2 - 1, f++, 1, false), u[d - 1].setCell(i2 - 1, n2));
          }
          u[d].replaceCells(f, i2, n2);
          let g = 0;
          for (let e4 = u.length - 1;e4 > 0 && (e4 > d || u[e4].getTrimmedLength() === 0); e4--)
            g++;
          g > 0 && (a.push(h + u.length - g), a.push(g)), h += u.length - 1;
        }
        return a;
      }, t2.reflowLargerCreateNewLayout = function(e3, t3) {
        const s3 = [];
        let i2 = 0, r2 = t3[i2], n2 = 0;
        for (let o = 0;o < e3.length; o++)
          if (r2 === o) {
            const s4 = t3[++i2];
            e3.onDeleteEmitter.fire({ index: o - n2, amount: s4 }), o += s4 - 1, n2 += s4, r2 = t3[++i2];
          } else
            s3.push(o);
        return { layout: s3, countRemoved: n2 };
      }, t2.reflowLargerApplyNewLayout = function(e3, t3) {
        const s3 = [];
        for (let i2 = 0;i2 < t3.length; i2++)
          s3.push(e3.get(t3[i2]));
        for (let t4 = 0;t4 < s3.length; t4++)
          e3.set(t4, s3[t4]);
        e3.length = t3.length;
      }, t2.reflowSmallerGetNewLineLengths = function(e3, t3, i2) {
        const r2 = [], n2 = e3.map((i3, r3) => s2(e3, r3, t3)).reduce((e4, t4) => e4 + t4);
        let o = 0, a = 0, h = 0;
        for (;h < n2; ) {
          if (n2 - h < i2) {
            r2.push(n2 - h);
            break;
          }
          o += i2;
          const c = s2(e3, a, t3);
          o > c && (o -= c, a++);
          const l = e3[a].getWidth(o - 1) === 2;
          l && o--;
          const u = l ? i2 - 1 : i2;
          r2.push(u), h += u;
        }
        return r2;
      }, t2.getWrappedLineTrimmedLength = s2;
    }, 4097: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferSet = undefined;
      const i2 = s2(7150), r2 = s2(1073), n2 = s2(802);

      class o extends i2.Disposable {
        constructor(e3, t3) {
          super(), this._optionsService = e3, this._bufferService = t3, this._onBufferActivate = this._register(new n2.Emitter), this.onBufferActivate = this._onBufferActivate.event, this.reset(), this._register(this._optionsService.onSpecificOptionChange("scrollback", () => this.resize(this._bufferService.cols, this._bufferService.rows))), this._register(this._optionsService.onSpecificOptionChange("tabStopWidth", () => this.setupTabStops()));
        }
        reset() {
          this._normal = new r2.Buffer(true, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new r2.Buffer(false, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }), this.setupTabStops();
        }
        get alt() {
          return this._alt;
        }
        get active() {
          return this._activeBuffer;
        }
        get normal() {
          return this._normal;
        }
        activateNormalBuffer() {
          this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clearAllMarkers(), this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }));
        }
        activateAltBuffer(e3) {
          this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e3), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({ activeBuffer: this._alt, inactiveBuffer: this._normal }));
        }
        resize(e3, t3) {
          this._normal.resize(e3, t3), this._alt.resize(e3, t3), this.setupTabStops(e3);
        }
        setupTabStops(e3) {
          this._normal.setupTabStops(e3), this._alt.setupTabStops(e3);
        }
      }
      t2.BufferSet = o;
    }, 3055: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.CellData = undefined;
      const i2 = s2(726), r2 = s2(8938), n2 = s2(5451);

      class o extends n2.AttributeData {
        constructor() {
          super(...arguments), this.content = 0, this.fg = 0, this.bg = 0, this.extended = new n2.ExtendedAttrs, this.combinedData = "";
        }
        static fromCharData(e3) {
          const t3 = new o;
          return t3.setFromCharData(e3), t3;
        }
        isCombined() {
          return 2097152 & this.content;
        }
        getWidth() {
          return this.content >> 22;
        }
        getChars() {
          return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, i2.stringFromCodePoint)(2097151 & this.content) : "";
        }
        getCode() {
          return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
        }
        setFromCharData(e3) {
          this.fg = e3[r2.CHAR_DATA_ATTR_INDEX], this.bg = 0;
          let t3 = false;
          if (e3[r2.CHAR_DATA_CHAR_INDEX].length > 2)
            t3 = true;
          else if (e3[r2.CHAR_DATA_CHAR_INDEX].length === 2) {
            const s3 = e3[r2.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
            if (55296 <= s3 && s3 <= 56319) {
              const i3 = e3[r2.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
              56320 <= i3 && i3 <= 57343 ? this.content = 1024 * (s3 - 55296) + i3 - 56320 + 65536 | e3[r2.CHAR_DATA_WIDTH_INDEX] << 22 : t3 = true;
            } else
              t3 = true;
          } else
            this.content = e3[r2.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e3[r2.CHAR_DATA_WIDTH_INDEX] << 22;
          t3 && (this.combinedData = e3[r2.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e3[r2.CHAR_DATA_WIDTH_INDEX] << 22);
        }
        getAsCharData() {
          return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
        }
      }
      t2.CellData = o;
    }, 8938: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.WHITESPACE_CELL_CODE = t2.WHITESPACE_CELL_WIDTH = t2.WHITESPACE_CELL_CHAR = t2.NULL_CELL_CODE = t2.NULL_CELL_WIDTH = t2.NULL_CELL_CHAR = t2.CHAR_DATA_CODE_INDEX = t2.CHAR_DATA_WIDTH_INDEX = t2.CHAR_DATA_CHAR_INDEX = t2.CHAR_DATA_ATTR_INDEX = t2.DEFAULT_EXT = t2.DEFAULT_ATTR = t2.DEFAULT_COLOR = undefined, t2.DEFAULT_COLOR = 0, t2.DEFAULT_ATTR = t2.DEFAULT_COLOR << 9 | 256, t2.DEFAULT_EXT = 0, t2.CHAR_DATA_ATTR_INDEX = 0, t2.CHAR_DATA_CHAR_INDEX = 1, t2.CHAR_DATA_WIDTH_INDEX = 2, t2.CHAR_DATA_CODE_INDEX = 3, t2.NULL_CELL_CHAR = "", t2.NULL_CELL_WIDTH = 1, t2.NULL_CELL_CODE = 0, t2.WHITESPACE_CELL_CHAR = " ", t2.WHITESPACE_CELL_WIDTH = 1, t2.WHITESPACE_CELL_CODE = 32;
    }, 8158: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.Marker = undefined;
      const i2 = s2(802), r2 = s2(7150);

      class n2 {
        get id() {
          return this._id;
        }
        constructor(e3) {
          this.line = e3, this.isDisposed = false, this._disposables = [], this._id = n2._nextId++, this._onDispose = this.register(new i2.Emitter), this.onDispose = this._onDispose.event;
        }
        dispose() {
          this.isDisposed || (this.isDisposed = true, this.line = -1, this._onDispose.fire(), (0, r2.dispose)(this._disposables), this._disposables.length = 0);
        }
        register(e3) {
          return this._disposables.push(e3), e3;
        }
      }
      t2.Marker = n2, n2._nextId = 1;
    }, 6760: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.DEFAULT_CHARSET = t2.CHARSETS = undefined, t2.CHARSETS = {}, t2.DEFAULT_CHARSET = t2.CHARSETS.B, t2.CHARSETS[0] = { "`": "\u25C6", a: "\u2592", b: "\u2409", c: "\u240C", d: "\u240D", e: "\u240A", f: "\xB0", g: "\xB1", h: "\u2424", i: "\u240B", j: "\u2518", k: "\u2510", l: "\u250C", m: "\u2514", n: "\u253C", o: "\u23BA", p: "\u23BB", q: "\u2500", r: "\u23BC", s: "\u23BD", t: "\u251C", u: "\u2524", v: "\u2534", w: "\u252C", x: "\u2502", y: "\u2264", z: "\u2265", "{": "\u03C0", "|": "\u2260", "}": "\xA3", "~": "\xB7" }, t2.CHARSETS.A = { "#": "\xA3" }, t2.CHARSETS.B = undefined, t2.CHARSETS[4] = { "#": "\xA3", "@": "\xBE", "[": "ij", "\\": "\xBD", "]": "|", "{": "\xA8", "|": "f", "}": "\xBC", "~": "\xB4" }, t2.CHARSETS.C = t2.CHARSETS[5] = { "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS.R = { "#": "\xA3", "@": "\xE0", "[": "\xB0", "\\": "\xE7", "]": "\xA7", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xA8" }, t2.CHARSETS.Q = { "@": "\xE0", "[": "\xE2", "\\": "\xE7", "]": "\xEA", "^": "\xEE", "`": "\xF4", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xFB" }, t2.CHARSETS.K = { "@": "\xA7", "[": "\xC4", "\\": "\xD6", "]": "\xDC", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xDF" }, t2.CHARSETS.Y = { "#": "\xA3", "@": "\xA7", "[": "\xB0", "\\": "\xE7", "]": "\xE9", "`": "\xF9", "{": "\xE0", "|": "\xF2", "}": "\xE8", "~": "\xEC" }, t2.CHARSETS.E = t2.CHARSETS[6] = { "@": "\xC4", "[": "\xC6", "\\": "\xD8", "]": "\xC5", "^": "\xDC", "`": "\xE4", "{": "\xE6", "|": "\xF8", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS.Z = { "#": "\xA3", "@": "\xA7", "[": "\xA1", "\\": "\xD1", "]": "\xBF", "{": "\xB0", "|": "\xF1", "}": "\xE7" }, t2.CHARSETS.H = t2.CHARSETS[7] = { "@": "\xC9", "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS["="] = { "#": "\xF9", "@": "\xE0", "[": "\xE9", "\\": "\xE7", "]": "\xEA", "^": "\xEE", _: "\xE8", "`": "\xF4", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xFB" };
    }, 3534: (e2, t2) => {
      var s2, i2, r2;
      Object.defineProperty(t2, "__esModule", { value: true }), t2.C1_ESCAPED = t2.C1 = t2.C0 = undefined, function(e3) {
        e3.NUL = "\x00", e3.SOH = "\x01", e3.STX = "\x02", e3.ETX = "\x03", e3.EOT = "\x04", e3.ENQ = "\x05", e3.ACK = "\x06", e3.BEL = "\x07", e3.BS = "\b", e3.HT = "\t", e3.LF = `
`, e3.VT = "\v", e3.FF = "\f", e3.CR = "\r", e3.SO = "\x0E", e3.SI = "\x0F", e3.DLE = "\x10", e3.DC1 = "\x11", e3.DC2 = "\x12", e3.DC3 = "\x13", e3.DC4 = "\x14", e3.NAK = "\x15", e3.SYN = "\x16", e3.ETB = "\x17", e3.CAN = "\x18", e3.EM = "\x19", e3.SUB = "\x1A", e3.ESC = "\x1B", e3.FS = "\x1C", e3.GS = "\x1D", e3.RS = "\x1E", e3.US = "\x1F", e3.SP = " ", e3.DEL = "\x7F";
      }(s2 || (t2.C0 = s2 = {})), function(e3) {
        e3.PAD = "\x80", e3.HOP = "\x81", e3.BPH = "\x82", e3.NBH = "\x83", e3.IND = "\x84", e3.NEL = "\x85", e3.SSA = "\x86", e3.ESA = "\x87", e3.HTS = "\x88", e3.HTJ = "\x89", e3.VTS = "\x8A", e3.PLD = "\x8B", e3.PLU = "\x8C", e3.RI = "\x8D", e3.SS2 = "\x8E", e3.SS3 = "\x8F", e3.DCS = "\x90", e3.PU1 = "\x91", e3.PU2 = "\x92", e3.STS = "\x93", e3.CCH = "\x94", e3.MW = "\x95", e3.SPA = "\x96", e3.EPA = "\x97", e3.SOS = "\x98", e3.SGCI = "\x99", e3.SCI = "\x9A", e3.CSI = "\x9B", e3.ST = "\x9C", e3.OSC = "\x9D", e3.PM = "\x9E", e3.APC = "\x9F";
      }(i2 || (t2.C1 = i2 = {})), function(e3) {
        e3.ST = `${s2.ESC}\\`;
      }(r2 || (t2.C1_ESCAPED = r2 = {}));
    }, 726: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.Utf8ToUtf32 = t2.StringToUtf32 = undefined, t2.stringFromCodePoint = function(e3) {
        return e3 > 65535 ? (e3 -= 65536, String.fromCharCode(55296 + (e3 >> 10)) + String.fromCharCode(e3 % 1024 + 56320)) : String.fromCharCode(e3);
      }, t2.utf32ToString = function(e3, t3 = 0, s2 = e3.length) {
        let i2 = "";
        for (let r2 = t3;r2 < s2; ++r2) {
          let t4 = e3[r2];
          t4 > 65535 ? (t4 -= 65536, i2 += String.fromCharCode(55296 + (t4 >> 10)) + String.fromCharCode(t4 % 1024 + 56320)) : i2 += String.fromCharCode(t4);
        }
        return i2;
      }, t2.StringToUtf32 = class {
        constructor() {
          this._interim = 0;
        }
        clear() {
          this._interim = 0;
        }
        decode(e3, t3) {
          const s2 = e3.length;
          if (!s2)
            return 0;
          let i2 = 0, r2 = 0;
          if (this._interim) {
            const s3 = e3.charCodeAt(r2++);
            56320 <= s3 && s3 <= 57343 ? t3[i2++] = 1024 * (this._interim - 55296) + s3 - 56320 + 65536 : (t3[i2++] = this._interim, t3[i2++] = s3), this._interim = 0;
          }
          for (let n2 = r2;n2 < s2; ++n2) {
            const r3 = e3.charCodeAt(n2);
            if (55296 <= r3 && r3 <= 56319) {
              if (++n2 >= s2)
                return this._interim = r3, i2;
              const o = e3.charCodeAt(n2);
              56320 <= o && o <= 57343 ? t3[i2++] = 1024 * (r3 - 55296) + o - 56320 + 65536 : (t3[i2++] = r3, t3[i2++] = o);
            } else
              r3 !== 65279 && (t3[i2++] = r3);
          }
          return i2;
        }
      }, t2.Utf8ToUtf32 = class {
        constructor() {
          this.interim = new Uint8Array(3);
        }
        clear() {
          this.interim.fill(0);
        }
        decode(e3, t3) {
          const s2 = e3.length;
          if (!s2)
            return 0;
          let i2, r2, n2, o, a = 0, h = 0, c = 0;
          if (this.interim[0]) {
            let i3 = false, r3 = this.interim[0];
            r3 &= (224 & r3) == 192 ? 31 : (240 & r3) == 224 ? 15 : 7;
            let n3, o2 = 0;
            for (;(n3 = 63 & this.interim[++o2]) && o2 < 4; )
              r3 <<= 6, r3 |= n3;
            const h2 = (224 & this.interim[0]) == 192 ? 2 : (240 & this.interim[0]) == 224 ? 3 : 4, l2 = h2 - o2;
            for (;c < l2; ) {
              if (c >= s2)
                return 0;
              if (n3 = e3[c++], (192 & n3) != 128) {
                c--, i3 = true;
                break;
              }
              this.interim[o2++] = n3, r3 <<= 6, r3 |= 63 & n3;
            }
            i3 || (h2 === 2 ? r3 < 128 ? c-- : t3[a++] = r3 : h2 === 3 ? r3 < 2048 || r3 >= 55296 && r3 <= 57343 || r3 === 65279 || (t3[a++] = r3) : r3 < 65536 || r3 > 1114111 || (t3[a++] = r3)), this.interim.fill(0);
          }
          const l = s2 - 4;
          let u = c;
          for (;u < s2; ) {
            for (;!(!(u < l) || 128 & (i2 = e3[u]) || 128 & (r2 = e3[u + 1]) || 128 & (n2 = e3[u + 2]) || 128 & (o = e3[u + 3])); )
              t3[a++] = i2, t3[a++] = r2, t3[a++] = n2, t3[a++] = o, u += 4;
            if (i2 = e3[u++], i2 < 128)
              t3[a++] = i2;
            else if ((224 & i2) == 192) {
              if (u >= s2)
                return this.interim[0] = i2, a;
              if (r2 = e3[u++], (192 & r2) != 128) {
                u--;
                continue;
              }
              if (h = (31 & i2) << 6 | 63 & r2, h < 128) {
                u--;
                continue;
              }
              t3[a++] = h;
            } else if ((240 & i2) == 224) {
              if (u >= s2)
                return this.interim[0] = i2, a;
              if (r2 = e3[u++], (192 & r2) != 128) {
                u--;
                continue;
              }
              if (u >= s2)
                return this.interim[0] = i2, this.interim[1] = r2, a;
              if (n2 = e3[u++], (192 & n2) != 128) {
                u--;
                continue;
              }
              if (h = (15 & i2) << 12 | (63 & r2) << 6 | 63 & n2, h < 2048 || h >= 55296 && h <= 57343 || h === 65279)
                continue;
              t3[a++] = h;
            } else if ((248 & i2) == 240) {
              if (u >= s2)
                return this.interim[0] = i2, a;
              if (r2 = e3[u++], (192 & r2) != 128) {
                u--;
                continue;
              }
              if (u >= s2)
                return this.interim[0] = i2, this.interim[1] = r2, a;
              if (n2 = e3[u++], (192 & n2) != 128) {
                u--;
                continue;
              }
              if (u >= s2)
                return this.interim[0] = i2, this.interim[1] = r2, this.interim[2] = n2, a;
              if (o = e3[u++], (192 & o) != 128) {
                u--;
                continue;
              }
              if (h = (7 & i2) << 18 | (63 & r2) << 12 | (63 & n2) << 6 | 63 & o, h < 65536 || h > 1114111)
                continue;
              t3[a++] = h;
            }
          }
          return a;
        }
      };
    }, 7428: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeV6 = undefined;
      const i2 = s2(6415), r2 = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]], n2 = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]];
      let o;
      t2.UnicodeV6 = class {
        constructor() {
          if (this.version = "6", !o) {
            o = new Uint8Array(65536), o.fill(1), o[0] = 0, o.fill(0, 1, 32), o.fill(0, 127, 160), o.fill(2, 4352, 4448), o[9001] = 2, o[9002] = 2, o.fill(2, 11904, 42192), o[12351] = 1, o.fill(2, 44032, 55204), o.fill(2, 63744, 64256), o.fill(2, 65040, 65050), o.fill(2, 65072, 65136), o.fill(2, 65280, 65377), o.fill(2, 65504, 65511);
            for (let e3 = 0;e3 < r2.length; ++e3)
              o.fill(0, r2[e3][0], r2[e3][1] + 1);
          }
        }
        wcwidth(e3) {
          return e3 < 32 ? 0 : e3 < 127 ? 1 : e3 < 65536 ? o[e3] : function(e4, t3) {
            let s3, i3 = 0, r3 = t3.length - 1;
            if (e4 < t3[0][0] || e4 > t3[r3][1])
              return false;
            for (;r3 >= i3; )
              if (s3 = i3 + r3 >> 1, e4 > t3[s3][1])
                i3 = s3 + 1;
              else {
                if (!(e4 < t3[s3][0]))
                  return true;
                r3 = s3 - 1;
              }
            return false;
          }(e3, n2) ? 0 : e3 >= 131072 && e3 <= 196605 || e3 >= 196608 && e3 <= 262141 ? 2 : 1;
        }
        charProperties(e3, t3) {
          let s3 = this.wcwidth(e3), r3 = s3 === 0 && t3 !== 0;
          if (r3) {
            const e4 = i2.UnicodeService.extractWidth(t3);
            e4 === 0 ? r3 = false : e4 > s3 && (s3 = e4);
          }
          return i2.UnicodeService.createPropertyValue(0, s3, r3);
        }
      };
    }, 3562: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.WriteBuffer = undefined;
      const i2 = s2(7150), r2 = s2(802);

      class n2 extends i2.Disposable {
        constructor(e3) {
          super(), this._action = e3, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0, this._isSyncWriting = false, this._syncCalls = 0, this._didUserInput = false, this._onWriteParsed = this._register(new r2.Emitter), this.onWriteParsed = this._onWriteParsed.event;
        }
        handleUserInput() {
          this._didUserInput = true;
        }
        writeSync(e3, t3) {
          if (t3 !== undefined && this._syncCalls > t3)
            return void (this._syncCalls = 0);
          if (this._pendingData += e3.length, this._writeBuffer.push(e3), this._callbacks.push(undefined), this._syncCalls++, this._isSyncWriting)
            return;
          let s3;
          for (this._isSyncWriting = true;s3 = this._writeBuffer.shift(); ) {
            this._action(s3);
            const e4 = this._callbacks.shift();
            e4 && e4();
          }
          this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = false, this._syncCalls = 0;
        }
        write(e3, t3) {
          if (this._pendingData > 50000000)
            throw new Error("write data discarded, use flow control to avoid losing data");
          if (!this._writeBuffer.length) {
            if (this._bufferOffset = 0, this._didUserInput)
              return this._didUserInput = false, this._pendingData += e3.length, this._writeBuffer.push(e3), this._callbacks.push(t3), void this._innerWrite();
            setTimeout(() => this._innerWrite());
          }
          this._pendingData += e3.length, this._writeBuffer.push(e3), this._callbacks.push(t3);
        }
        _innerWrite(e3 = 0, t3 = true) {
          const s3 = e3 || performance.now();
          for (;this._writeBuffer.length > this._bufferOffset; ) {
            const e4 = this._writeBuffer[this._bufferOffset], i3 = this._action(e4, t3);
            if (i3) {
              const e5 = (e6) => performance.now() - s3 >= 12 ? setTimeout(() => this._innerWrite(0, e6)) : this._innerWrite(s3, e6);
              return void i3.catch((e6) => (queueMicrotask(() => {
                throw e6;
              }), Promise.resolve(false))).then(e5);
            }
            const r3 = this._callbacks[this._bufferOffset];
            if (r3 && r3(), this._bufferOffset++, this._pendingData -= e4.length, performance.now() - s3 >= 12)
              break;
          }
          this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(() => this._innerWrite())) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0), this._onWriteParsed.fire();
        }
      }
      t2.WriteBuffer = n2;
    }, 8693: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseColor = function(e3) {
        if (!e3)
          return;
        let t3 = e3.toLowerCase();
        if (t3.indexOf("rgb:") === 0) {
          t3 = t3.slice(4);
          const e4 = s2.exec(t3);
          if (e4) {
            const t4 = e4[1] ? 15 : e4[4] ? 255 : e4[7] ? 4095 : 65535;
            return [Math.round(parseInt(e4[1] || e4[4] || e4[7] || e4[10], 16) / t4 * 255), Math.round(parseInt(e4[2] || e4[5] || e4[8] || e4[11], 16) / t4 * 255), Math.round(parseInt(e4[3] || e4[6] || e4[9] || e4[12], 16) / t4 * 255)];
          }
        } else if (t3.indexOf("#") === 0 && (t3 = t3.slice(1), i2.exec(t3) && [3, 6, 9, 12].includes(t3.length))) {
          const e4 = t3.length / 3, s3 = [0, 0, 0];
          for (let i3 = 0;i3 < 3; ++i3) {
            const r3 = parseInt(t3.slice(e4 * i3, e4 * i3 + e4), 16);
            s3[i3] = e4 === 1 ? r3 << 4 : e4 === 2 ? r3 : e4 === 3 ? r3 >> 4 : r3 >> 8;
          }
          return s3;
        }
      }, t2.toRgbString = function(e3, t3 = 16) {
        const [s3, i3, n2] = e3;
        return `rgb:${r2(s3, t3)}/${r2(i3, t3)}/${r2(n2, t3)}`;
      };
      const s2 = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/, i2 = /^[\da-f]+$/;
      function r2(e3, t3) {
        const s3 = e3.toString(16), i3 = s3.length < 2 ? "0" + s3 : s3;
        switch (t3) {
          case 4:
            return s3[0];
          case 8:
            return i3;
          case 12:
            return (i3 + i3).slice(0, 3);
          default:
            return i3 + i3;
        }
      }
    }, 1263: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.PAYLOAD_LIMIT = undefined, t2.PAYLOAD_LIMIT = 1e7;
    }, 9823: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.DcsHandler = t2.DcsParser = undefined;
      const i2 = s2(726), r2 = s2(7262), n2 = s2(1263), o = [];
      t2.DcsParser = class {
        constructor() {
          this._handlers = Object.create(null), this._active = o, this._ident = 0, this._handlerFb = () => {}, this._stack = { paused: false, loopPosition: 0, fallThrough: false };
        }
        dispose() {
          this._handlers = Object.create(null), this._handlerFb = () => {}, this._active = o;
        }
        registerHandler(e3, t3) {
          this._handlers[e3] === undefined && (this._handlers[e3] = []);
          const s3 = this._handlers[e3];
          return s3.push(t3), { dispose: () => {
            const e4 = s3.indexOf(t3);
            e4 !== -1 && s3.splice(e4, 1);
          } };
        }
        clearHandler(e3) {
          this._handlers[e3] && delete this._handlers[e3];
        }
        setHandlerFallback(e3) {
          this._handlerFb = e3;
        }
        reset() {
          if (this._active.length)
            for (let e3 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1;e3 >= 0; --e3)
              this._active[e3].unhook(false);
          this._stack.paused = false, this._active = o, this._ident = 0;
        }
        hook(e3, t3) {
          if (this.reset(), this._ident = e3, this._active = this._handlers[e3] || o, this._active.length)
            for (let e4 = this._active.length - 1;e4 >= 0; e4--)
              this._active[e4].hook(t3);
          else
            this._handlerFb(this._ident, "HOOK", t3);
        }
        put(e3, t3, s3) {
          if (this._active.length)
            for (let i3 = this._active.length - 1;i3 >= 0; i3--)
              this._active[i3].put(e3, t3, s3);
          else
            this._handlerFb(this._ident, "PUT", (0, i2.utf32ToString)(e3, t3, s3));
        }
        unhook(e3, t3 = true) {
          if (this._active.length) {
            let s3 = false, i3 = this._active.length - 1, r3 = false;
            if (this._stack.paused && (i3 = this._stack.loopPosition - 1, s3 = t3, r3 = this._stack.fallThrough, this._stack.paused = false), !r3 && s3 === false) {
              for (;i3 >= 0 && (s3 = this._active[i3].unhook(e3), s3 !== true); i3--)
                if (s3 instanceof Promise)
                  return this._stack.paused = true, this._stack.loopPosition = i3, this._stack.fallThrough = false, s3;
              i3--;
            }
            for (;i3 >= 0; i3--)
              if (s3 = this._active[i3].unhook(false), s3 instanceof Promise)
                return this._stack.paused = true, this._stack.loopPosition = i3, this._stack.fallThrough = true, s3;
          } else
            this._handlerFb(this._ident, "UNHOOK", e3);
          this._active = o, this._ident = 0;
        }
      };
      const a = new r2.Params;
      a.addParam(0), t2.DcsHandler = class {
        constructor(e3) {
          this._handler = e3, this._data = "", this._params = a, this._hitLimit = false;
        }
        hook(e3) {
          this._params = e3.length > 1 || e3.params[0] ? e3.clone() : a, this._data = "", this._hitLimit = false;
        }
        put(e3, t3, s3) {
          this._hitLimit || (this._data += (0, i2.utf32ToString)(e3, t3, s3), this._data.length > n2.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
        }
        unhook(e3) {
          let t3 = false;
          if (this._hitLimit)
            t3 = false;
          else if (e3 && (t3 = this._handler(this._data, this._params), t3 instanceof Promise))
            return t3.then((e4) => (this._params = a, this._data = "", this._hitLimit = false, e4));
          return this._params = a, this._data = "", this._hitLimit = false, t3;
        }
      };
    }, 6717: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.EscapeSequenceParser = t2.VT500_TRANSITION_TABLE = t2.TransitionTable = undefined;
      const i2 = s2(7150), r2 = s2(7262), n2 = s2(1346), o = s2(9823);

      class a {
        constructor(e3) {
          this.table = new Uint8Array(e3);
        }
        setDefault(e3, t3) {
          this.table.fill(e3 << 4 | t3);
        }
        add(e3, t3, s3, i3) {
          this.table[t3 << 8 | e3] = s3 << 4 | i3;
        }
        addMany(e3, t3, s3, i3) {
          for (let r3 = 0;r3 < e3.length; r3++)
            this.table[t3 << 8 | e3[r3]] = s3 << 4 | i3;
        }
      }
      t2.TransitionTable = a;
      const h = 160;
      t2.VT500_TRANSITION_TABLE = function() {
        const e3 = new a(4095), t3 = Array.apply(null, Array(256)).map((e4, t4) => t4), s3 = (e4, s4) => t3.slice(e4, s4), i3 = s3(32, 127), r3 = s3(0, 24);
        r3.push(25), r3.push.apply(r3, s3(28, 32));
        const n3 = s3(0, 14);
        let o2;
        for (o2 in e3.setDefault(1, 0), e3.addMany(i3, 0, 2, 0), n3)
          e3.addMany([24, 26, 153, 154], o2, 3, 0), e3.addMany(s3(128, 144), o2, 3, 0), e3.addMany(s3(144, 152), o2, 3, 0), e3.add(156, o2, 0, 0), e3.add(27, o2, 11, 1), e3.add(157, o2, 4, 8), e3.addMany([152, 158, 159], o2, 0, 7), e3.add(155, o2, 11, 3), e3.add(144, o2, 11, 9);
        return e3.addMany(r3, 0, 3, 0), e3.addMany(r3, 1, 3, 1), e3.add(127, 1, 0, 1), e3.addMany(r3, 8, 0, 8), e3.addMany(r3, 3, 3, 3), e3.add(127, 3, 0, 3), e3.addMany(r3, 4, 3, 4), e3.add(127, 4, 0, 4), e3.addMany(r3, 6, 3, 6), e3.addMany(r3, 5, 3, 5), e3.add(127, 5, 0, 5), e3.addMany(r3, 2, 3, 2), e3.add(127, 2, 0, 2), e3.add(93, 1, 4, 8), e3.addMany(i3, 8, 5, 8), e3.add(127, 8, 5, 8), e3.addMany([156, 27, 24, 26, 7], 8, 6, 0), e3.addMany(s3(28, 32), 8, 0, 8), e3.addMany([88, 94, 95], 1, 0, 7), e3.addMany(i3, 7, 0, 7), e3.addMany(r3, 7, 0, 7), e3.add(156, 7, 0, 0), e3.add(127, 7, 0, 7), e3.add(91, 1, 11, 3), e3.addMany(s3(64, 127), 3, 7, 0), e3.addMany(s3(48, 60), 3, 8, 4), e3.addMany([60, 61, 62, 63], 3, 9, 4), e3.addMany(s3(48, 60), 4, 8, 4), e3.addMany(s3(64, 127), 4, 7, 0), e3.addMany([60, 61, 62, 63], 4, 0, 6), e3.addMany(s3(32, 64), 6, 0, 6), e3.add(127, 6, 0, 6), e3.addMany(s3(64, 127), 6, 0, 0), e3.addMany(s3(32, 48), 3, 9, 5), e3.addMany(s3(32, 48), 5, 9, 5), e3.addMany(s3(48, 64), 5, 0, 6), e3.addMany(s3(64, 127), 5, 7, 0), e3.addMany(s3(32, 48), 4, 9, 5), e3.addMany(s3(32, 48), 1, 9, 2), e3.addMany(s3(32, 48), 2, 9, 2), e3.addMany(s3(48, 127), 2, 10, 0), e3.addMany(s3(48, 80), 1, 10, 0), e3.addMany(s3(81, 88), 1, 10, 0), e3.addMany([89, 90, 92], 1, 10, 0), e3.addMany(s3(96, 127), 1, 10, 0), e3.add(80, 1, 11, 9), e3.addMany(r3, 9, 0, 9), e3.add(127, 9, 0, 9), e3.addMany(s3(28, 32), 9, 0, 9), e3.addMany(s3(32, 48), 9, 9, 12), e3.addMany(s3(48, 60), 9, 8, 10), e3.addMany([60, 61, 62, 63], 9, 9, 10), e3.addMany(r3, 11, 0, 11), e3.addMany(s3(32, 128), 11, 0, 11), e3.addMany(s3(28, 32), 11, 0, 11), e3.addMany(r3, 10, 0, 10), e3.add(127, 10, 0, 10), e3.addMany(s3(28, 32), 10, 0, 10), e3.addMany(s3(48, 60), 10, 8, 10), e3.addMany([60, 61, 62, 63], 10, 0, 11), e3.addMany(s3(32, 48), 10, 9, 12), e3.addMany(r3, 12, 0, 12), e3.add(127, 12, 0, 12), e3.addMany(s3(28, 32), 12, 0, 12), e3.addMany(s3(32, 48), 12, 9, 12), e3.addMany(s3(48, 64), 12, 0, 11), e3.addMany(s3(64, 127), 12, 12, 13), e3.addMany(s3(64, 127), 10, 12, 13), e3.addMany(s3(64, 127), 9, 12, 13), e3.addMany(r3, 13, 13, 13), e3.addMany(i3, 13, 13, 13), e3.add(127, 13, 0, 13), e3.addMany([27, 156, 24, 26], 13, 14, 0), e3.add(h, 0, 2, 0), e3.add(h, 8, 5, 8), e3.add(h, 6, 0, 6), e3.add(h, 11, 0, 11), e3.add(h, 13, 13, 13), e3;
      }();

      class c extends i2.Disposable {
        constructor(e3 = t2.VT500_TRANSITION_TABLE) {
          super(), this._transitions = e3, this._parseStack = { state: 0, handlers: [], handlerPos: 0, transition: 0, chunkPos: 0 }, this.initialState = 0, this.currentState = this.initialState, this._params = new r2.Params, this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._printHandlerFb = (e4, t3, s3) => {}, this._executeHandlerFb = (e4) => {}, this._csiHandlerFb = (e4, t3) => {}, this._escHandlerFb = (e4) => {}, this._errorHandlerFb = (e4) => e4, this._printHandler = this._printHandlerFb, this._executeHandlers = Object.create(null), this._csiHandlers = Object.create(null), this._escHandlers = Object.create(null), this._register((0, i2.toDisposable)(() => {
            this._csiHandlers = Object.create(null), this._executeHandlers = Object.create(null), this._escHandlers = Object.create(null);
          })), this._oscParser = this._register(new n2.OscParser), this._dcsParser = this._register(new o.DcsParser), this._errorHandler = this._errorHandlerFb, this.registerEscHandler({ final: "\\" }, () => true);
        }
        _identifier(e3, t3 = [64, 126]) {
          let s3 = 0;
          if (e3.prefix) {
            if (e3.prefix.length > 1)
              throw new Error("only one byte as prefix supported");
            if (s3 = e3.prefix.charCodeAt(0), s3 && 60 > s3 || s3 > 63)
              throw new Error("prefix must be in range 0x3c .. 0x3f");
          }
          if (e3.intermediates) {
            if (e3.intermediates.length > 2)
              throw new Error("only two bytes as intermediates are supported");
            for (let t4 = 0;t4 < e3.intermediates.length; ++t4) {
              const i4 = e3.intermediates.charCodeAt(t4);
              if (32 > i4 || i4 > 47)
                throw new Error("intermediate must be in range 0x20 .. 0x2f");
              s3 <<= 8, s3 |= i4;
            }
          }
          if (e3.final.length !== 1)
            throw new Error("final must be a single byte");
          const i3 = e3.final.charCodeAt(0);
          if (t3[0] > i3 || i3 > t3[1])
            throw new Error(`final must be in range ${t3[0]} .. ${t3[1]}`);
          return s3 <<= 8, s3 |= i3, s3;
        }
        identToString(e3) {
          const t3 = [];
          for (;e3; )
            t3.push(String.fromCharCode(255 & e3)), e3 >>= 8;
          return t3.reverse().join("");
        }
        setPrintHandler(e3) {
          this._printHandler = e3;
        }
        clearPrintHandler() {
          this._printHandler = this._printHandlerFb;
        }
        registerEscHandler(e3, t3) {
          const s3 = this._identifier(e3, [48, 126]);
          this._escHandlers[s3] === undefined && (this._escHandlers[s3] = []);
          const i3 = this._escHandlers[s3];
          return i3.push(t3), { dispose: () => {
            const e4 = i3.indexOf(t3);
            e4 !== -1 && i3.splice(e4, 1);
          } };
        }
        clearEscHandler(e3) {
          this._escHandlers[this._identifier(e3, [48, 126])] && delete this._escHandlers[this._identifier(e3, [48, 126])];
        }
        setEscHandlerFallback(e3) {
          this._escHandlerFb = e3;
        }
        setExecuteHandler(e3, t3) {
          this._executeHandlers[e3.charCodeAt(0)] = t3;
        }
        clearExecuteHandler(e3) {
          this._executeHandlers[e3.charCodeAt(0)] && delete this._executeHandlers[e3.charCodeAt(0)];
        }
        setExecuteHandlerFallback(e3) {
          this._executeHandlerFb = e3;
        }
        registerCsiHandler(e3, t3) {
          const s3 = this._identifier(e3);
          this._csiHandlers[s3] === undefined && (this._csiHandlers[s3] = []);
          const i3 = this._csiHandlers[s3];
          return i3.push(t3), { dispose: () => {
            const e4 = i3.indexOf(t3);
            e4 !== -1 && i3.splice(e4, 1);
          } };
        }
        clearCsiHandler(e3) {
          this._csiHandlers[this._identifier(e3)] && delete this._csiHandlers[this._identifier(e3)];
        }
        setCsiHandlerFallback(e3) {
          this._csiHandlerFb = e3;
        }
        registerDcsHandler(e3, t3) {
          return this._dcsParser.registerHandler(this._identifier(e3), t3);
        }
        clearDcsHandler(e3) {
          this._dcsParser.clearHandler(this._identifier(e3));
        }
        setDcsHandlerFallback(e3) {
          this._dcsParser.setHandlerFallback(e3);
        }
        registerOscHandler(e3, t3) {
          return this._oscParser.registerHandler(e3, t3);
        }
        clearOscHandler(e3) {
          this._oscParser.clearHandler(e3);
        }
        setOscHandlerFallback(e3) {
          this._oscParser.setHandlerFallback(e3);
        }
        setErrorHandler(e3) {
          this._errorHandler = e3;
        }
        clearErrorHandler() {
          this._errorHandler = this._errorHandlerFb;
        }
        reset() {
          this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._parseStack.state !== 0 && (this._parseStack.state = 2, this._parseStack.handlers = []);
        }
        _preserveStack(e3, t3, s3, i3, r3) {
          this._parseStack.state = e3, this._parseStack.handlers = t3, this._parseStack.handlerPos = s3, this._parseStack.transition = i3, this._parseStack.chunkPos = r3;
        }
        parse(e3, t3, s3) {
          let i3, r3 = 0, n3 = 0, o2 = 0;
          if (this._parseStack.state)
            if (this._parseStack.state === 2)
              this._parseStack.state = 0, o2 = this._parseStack.chunkPos + 1;
            else {
              if (s3 === undefined || this._parseStack.state === 1)
                throw this._parseStack.state = 1, new Error("improper continuation due to previous async handler, giving up parsing");
              const t4 = this._parseStack.handlers;
              let n4 = this._parseStack.handlerPos - 1;
              switch (this._parseStack.state) {
                case 3:
                  if (s3 === false && n4 > -1) {
                    for (;n4 >= 0 && (i3 = t4[n4](this._params), i3 !== true); n4--)
                      if (i3 instanceof Promise)
                        return this._parseStack.handlerPos = n4, i3;
                  }
                  this._parseStack.handlers = [];
                  break;
                case 4:
                  if (s3 === false && n4 > -1) {
                    for (;n4 >= 0 && (i3 = t4[n4](), i3 !== true); n4--)
                      if (i3 instanceof Promise)
                        return this._parseStack.handlerPos = n4, i3;
                  }
                  this._parseStack.handlers = [];
                  break;
                case 6:
                  if (r3 = e3[this._parseStack.chunkPos], i3 = this._dcsParser.unhook(r3 !== 24 && r3 !== 26, s3), i3)
                    return i3;
                  r3 === 27 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                  break;
                case 5:
                  if (r3 = e3[this._parseStack.chunkPos], i3 = this._oscParser.end(r3 !== 24 && r3 !== 26, s3), i3)
                    return i3;
                  r3 === 27 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
              }
              this._parseStack.state = 0, o2 = this._parseStack.chunkPos + 1, this.precedingJoinState = 0, this.currentState = 15 & this._parseStack.transition;
            }
          for (let s4 = o2;s4 < t3; ++s4) {
            switch (r3 = e3[s4], n3 = this._transitions.table[this.currentState << 8 | (r3 < 160 ? r3 : h)], n3 >> 4) {
              case 2:
                for (let i4 = s4 + 1;; ++i4) {
                  if (i4 >= t3 || (r3 = e3[i4]) < 32 || r3 > 126 && r3 < h) {
                    this._printHandler(e3, s4, i4), s4 = i4 - 1;
                    break;
                  }
                  if (++i4 >= t3 || (r3 = e3[i4]) < 32 || r3 > 126 && r3 < h) {
                    this._printHandler(e3, s4, i4), s4 = i4 - 1;
                    break;
                  }
                  if (++i4 >= t3 || (r3 = e3[i4]) < 32 || r3 > 126 && r3 < h) {
                    this._printHandler(e3, s4, i4), s4 = i4 - 1;
                    break;
                  }
                  if (++i4 >= t3 || (r3 = e3[i4]) < 32 || r3 > 126 && r3 < h) {
                    this._printHandler(e3, s4, i4), s4 = i4 - 1;
                    break;
                  }
                }
                break;
              case 3:
                this._executeHandlers[r3] ? this._executeHandlers[r3]() : this._executeHandlerFb(r3), this.precedingJoinState = 0;
                break;
              case 0:
                break;
              case 1:
                if (this._errorHandler({ position: s4, code: r3, currentState: this.currentState, collect: this._collect, params: this._params, abort: false }).abort)
                  return;
                break;
              case 7:
                const o3 = this._csiHandlers[this._collect << 8 | r3];
                let a2 = o3 ? o3.length - 1 : -1;
                for (;a2 >= 0 && (i3 = o3[a2](this._params), i3 !== true); a2--)
                  if (i3 instanceof Promise)
                    return this._preserveStack(3, o3, a2, n3, s4), i3;
                a2 < 0 && this._csiHandlerFb(this._collect << 8 | r3, this._params), this.precedingJoinState = 0;
                break;
              case 8:
                do {
                  switch (r3) {
                    case 59:
                      this._params.addParam(0);
                      break;
                    case 58:
                      this._params.addSubParam(-1);
                      break;
                    default:
                      this._params.addDigit(r3 - 48);
                  }
                } while (++s4 < t3 && (r3 = e3[s4]) > 47 && r3 < 60);
                s4--;
                break;
              case 9:
                this._collect <<= 8, this._collect |= r3;
                break;
              case 10:
                const c2 = this._escHandlers[this._collect << 8 | r3];
                let l = c2 ? c2.length - 1 : -1;
                for (;l >= 0 && (i3 = c2[l](), i3 !== true); l--)
                  if (i3 instanceof Promise)
                    return this._preserveStack(4, c2, l, n3, s4), i3;
                l < 0 && this._escHandlerFb(this._collect << 8 | r3), this.precedingJoinState = 0;
                break;
              case 11:
                this._params.reset(), this._params.addParam(0), this._collect = 0;
                break;
              case 12:
                this._dcsParser.hook(this._collect << 8 | r3, this._params);
                break;
              case 13:
                for (let i4 = s4 + 1;; ++i4)
                  if (i4 >= t3 || (r3 = e3[i4]) === 24 || r3 === 26 || r3 === 27 || r3 > 127 && r3 < h) {
                    this._dcsParser.put(e3, s4, i4), s4 = i4 - 1;
                    break;
                  }
                break;
              case 14:
                if (i3 = this._dcsParser.unhook(r3 !== 24 && r3 !== 26), i3)
                  return this._preserveStack(6, [], 0, n3, s4), i3;
                r3 === 27 && (n3 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
                break;
              case 4:
                this._oscParser.start();
                break;
              case 5:
                for (let i4 = s4 + 1;; i4++)
                  if (i4 >= t3 || (r3 = e3[i4]) < 32 || r3 > 127 && r3 < h) {
                    this._oscParser.put(e3, s4, i4), s4 = i4 - 1;
                    break;
                  }
                break;
              case 6:
                if (i3 = this._oscParser.end(r3 !== 24 && r3 !== 26), i3)
                  return this._preserveStack(5, [], 0, n3, s4), i3;
                r3 === 27 && (n3 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
            }
            this.currentState = 15 & n3;
          }
        }
      }
      t2.EscapeSequenceParser = c;
    }, 1346: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.OscHandler = t2.OscParser = undefined;
      const i2 = s2(1263), r2 = s2(726), n2 = [];
      t2.OscParser = class {
        constructor() {
          this._state = 0, this._active = n2, this._id = -1, this._handlers = Object.create(null), this._handlerFb = () => {}, this._stack = { paused: false, loopPosition: 0, fallThrough: false };
        }
        registerHandler(e3, t3) {
          this._handlers[e3] === undefined && (this._handlers[e3] = []);
          const s3 = this._handlers[e3];
          return s3.push(t3), { dispose: () => {
            const e4 = s3.indexOf(t3);
            e4 !== -1 && s3.splice(e4, 1);
          } };
        }
        clearHandler(e3) {
          this._handlers[e3] && delete this._handlers[e3];
        }
        setHandlerFallback(e3) {
          this._handlerFb = e3;
        }
        dispose() {
          this._handlers = Object.create(null), this._handlerFb = () => {}, this._active = n2;
        }
        reset() {
          if (this._state === 2)
            for (let e3 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1;e3 >= 0; --e3)
              this._active[e3].end(false);
          this._stack.paused = false, this._active = n2, this._id = -1, this._state = 0;
        }
        _start() {
          if (this._active = this._handlers[this._id] || n2, this._active.length)
            for (let e3 = this._active.length - 1;e3 >= 0; e3--)
              this._active[e3].start();
          else
            this._handlerFb(this._id, "START");
        }
        _put(e3, t3, s3) {
          if (this._active.length)
            for (let i3 = this._active.length - 1;i3 >= 0; i3--)
              this._active[i3].put(e3, t3, s3);
          else
            this._handlerFb(this._id, "PUT", (0, r2.utf32ToString)(e3, t3, s3));
        }
        start() {
          this.reset(), this._state = 1;
        }
        put(e3, t3, s3) {
          if (this._state !== 3) {
            if (this._state === 1)
              for (;t3 < s3; ) {
                const s4 = e3[t3++];
                if (s4 === 59) {
                  this._state = 2, this._start();
                  break;
                }
                if (s4 < 48 || 57 < s4)
                  return void (this._state = 3);
                this._id === -1 && (this._id = 0), this._id = 10 * this._id + s4 - 48;
              }
            this._state === 2 && s3 - t3 > 0 && this._put(e3, t3, s3);
          }
        }
        end(e3, t3 = true) {
          if (this._state !== 0) {
            if (this._state !== 3)
              if (this._state === 1 && this._start(), this._active.length) {
                let s3 = false, i3 = this._active.length - 1, r3 = false;
                if (this._stack.paused && (i3 = this._stack.loopPosition - 1, s3 = t3, r3 = this._stack.fallThrough, this._stack.paused = false), !r3 && s3 === false) {
                  for (;i3 >= 0 && (s3 = this._active[i3].end(e3), s3 !== true); i3--)
                    if (s3 instanceof Promise)
                      return this._stack.paused = true, this._stack.loopPosition = i3, this._stack.fallThrough = false, s3;
                  i3--;
                }
                for (;i3 >= 0; i3--)
                  if (s3 = this._active[i3].end(false), s3 instanceof Promise)
                    return this._stack.paused = true, this._stack.loopPosition = i3, this._stack.fallThrough = true, s3;
              } else
                this._handlerFb(this._id, "END", e3);
            this._active = n2, this._id = -1, this._state = 0;
          }
        }
      }, t2.OscHandler = class {
        constructor(e3) {
          this._handler = e3, this._data = "", this._hitLimit = false;
        }
        start() {
          this._data = "", this._hitLimit = false;
        }
        put(e3, t3, s3) {
          this._hitLimit || (this._data += (0, r2.utf32ToString)(e3, t3, s3), this._data.length > i2.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
        }
        end(e3) {
          let t3 = false;
          if (this._hitLimit)
            t3 = false;
          else if (e3 && (t3 = this._handler(this._data), t3 instanceof Promise))
            return t3.then((e4) => (this._data = "", this._hitLimit = false, e4));
          return this._data = "", this._hitLimit = false, t3;
        }
      };
    }, 7262: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.Params = undefined;
      const s2 = 2147483647;

      class i2 {
        static fromArray(e3) {
          const t3 = new i2;
          if (!e3.length)
            return t3;
          for (let s3 = Array.isArray(e3[0]) ? 1 : 0;s3 < e3.length; ++s3) {
            const i3 = e3[s3];
            if (Array.isArray(i3))
              for (let e4 = 0;e4 < i3.length; ++e4)
                t3.addSubParam(i3[e4]);
            else
              t3.addParam(i3);
          }
          return t3;
        }
        constructor(e3 = 32, t3 = 32) {
          if (this.maxLength = e3, this.maxSubParamsLength = t3, t3 > 256)
            throw new Error("maxSubParamsLength must not be greater than 256");
          this.params = new Int32Array(e3), this.length = 0, this._subParams = new Int32Array(t3), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e3), this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
        }
        clone() {
          const e3 = new i2(this.maxLength, this.maxSubParamsLength);
          return e3.params.set(this.params), e3.length = this.length, e3._subParams.set(this._subParams), e3._subParamsLength = this._subParamsLength, e3._subParamsIdx.set(this._subParamsIdx), e3._rejectDigits = this._rejectDigits, e3._rejectSubDigits = this._rejectSubDigits, e3._digitIsSub = this._digitIsSub, e3;
        }
        toArray() {
          const e3 = [];
          for (let t3 = 0;t3 < this.length; ++t3) {
            e3.push(this.params[t3]);
            const s3 = this._subParamsIdx[t3] >> 8, i3 = 255 & this._subParamsIdx[t3];
            i3 - s3 > 0 && e3.push(Array.prototype.slice.call(this._subParams, s3, i3));
          }
          return e3;
        }
        reset() {
          this.length = 0, this._subParamsLength = 0, this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
        }
        addParam(e3) {
          if (this._digitIsSub = false, this.length >= this.maxLength)
            this._rejectDigits = true;
          else {
            if (e3 < -1)
              throw new Error("values lesser than -1 are not allowed");
            this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e3 > s2 ? s2 : e3;
          }
        }
        addSubParam(e3) {
          if (this._digitIsSub = true, this.length)
            if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength)
              this._rejectSubDigits = true;
            else {
              if (e3 < -1)
                throw new Error("values lesser than -1 are not allowed");
              this._subParams[this._subParamsLength++] = e3 > s2 ? s2 : e3, this._subParamsIdx[this.length - 1]++;
            }
        }
        hasSubParams(e3) {
          return (255 & this._subParamsIdx[e3]) - (this._subParamsIdx[e3] >> 8) > 0;
        }
        getSubParams(e3) {
          const t3 = this._subParamsIdx[e3] >> 8, s3 = 255 & this._subParamsIdx[e3];
          return s3 - t3 > 0 ? this._subParams.subarray(t3, s3) : null;
        }
        getSubParamsAll() {
          const e3 = {};
          for (let t3 = 0;t3 < this.length; ++t3) {
            const s3 = this._subParamsIdx[t3] >> 8, i3 = 255 & this._subParamsIdx[t3];
            i3 - s3 > 0 && (e3[t3] = this._subParams.slice(s3, i3));
          }
          return e3;
        }
        addDigit(e3) {
          let t3;
          if (this._rejectDigits || !(t3 = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)
            return;
          const i3 = this._digitIsSub ? this._subParams : this.params, r2 = i3[t3 - 1];
          i3[t3 - 1] = ~r2 ? Math.min(10 * r2 + e3, s2) : e3;
        }
      }
      t2.Params = i2;
    }, 3027: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.AddonManager = undefined, t2.AddonManager = class {
        constructor() {
          this._addons = [];
        }
        dispose() {
          for (let e3 = this._addons.length - 1;e3 >= 0; e3--)
            this._addons[e3].instance.dispose();
        }
        loadAddon(e3, t3) {
          const s2 = { instance: t3, dispose: t3.dispose, isDisposed: false };
          this._addons.push(s2), t3.dispose = () => this._wrappedAddonDispose(s2), t3.activate(e3);
        }
        _wrappedAddonDispose(e3) {
          if (e3.isDisposed)
            return;
          let t3 = -1;
          for (let s2 = 0;s2 < this._addons.length; s2++)
            if (this._addons[s2] === e3) {
              t3 = s2;
              break;
            }
          if (t3 === -1)
            throw new Error("Could not dispose an addon that has not been loaded");
          e3.isDisposed = true, e3.dispose.apply(e3.instance), this._addons.splice(t3, 1);
        }
      };
    }, 3235: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferApiView = undefined;
      const i2 = s2(793), r2 = s2(3055);
      t2.BufferApiView = class {
        constructor(e3, t3) {
          this._buffer = e3, this.type = t3;
        }
        init(e3) {
          return this._buffer = e3, this;
        }
        get cursorY() {
          return this._buffer.y;
        }
        get cursorX() {
          return this._buffer.x;
        }
        get viewportY() {
          return this._buffer.ydisp;
        }
        get baseY() {
          return this._buffer.ybase;
        }
        get length() {
          return this._buffer.lines.length;
        }
        getLine(e3) {
          const t3 = this._buffer.lines.get(e3);
          if (t3)
            return new i2.BufferLineApiView(t3);
        }
        getNullCell() {
          return new r2.CellData;
        }
      };
    }, 793: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferLineApiView = undefined;
      const i2 = s2(3055);
      t2.BufferLineApiView = class {
        constructor(e3) {
          this._line = e3;
        }
        get isWrapped() {
          return this._line.isWrapped;
        }
        get length() {
          return this._line.length;
        }
        getCell(e3, t3) {
          if (!(e3 < 0 || e3 >= this._line.length))
            return t3 ? (this._line.loadCell(e3, t3), t3) : this._line.loadCell(e3, new i2.CellData);
        }
        translateToString(e3, t3, s3) {
          return this._line.translateToString(e3, t3, s3);
        }
      };
    }, 5101: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferNamespaceApi = undefined;
      const i2 = s2(3235), r2 = s2(7150), n2 = s2(802);

      class o extends r2.Disposable {
        constructor(e3) {
          super(), this._core = e3, this._onBufferChange = this._register(new n2.Emitter), this.onBufferChange = this._onBufferChange.event, this._normal = new i2.BufferApiView(this._core.buffers.normal, "normal"), this._alternate = new i2.BufferApiView(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(() => this._onBufferChange.fire(this.active));
        }
        get active() {
          if (this._core.buffers.active === this._core.buffers.normal)
            return this.normal;
          if (this._core.buffers.active === this._core.buffers.alt)
            return this.alternate;
          throw new Error("Active buffer is neither normal nor alternate");
        }
        get normal() {
          return this._normal.init(this._core.buffers.normal);
        }
        get alternate() {
          return this._alternate.init(this._core.buffers.alt);
        }
      }
      t2.BufferNamespaceApi = o;
    }, 6097: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.ParserApi = undefined, t2.ParserApi = class {
        constructor(e3) {
          this._core = e3;
        }
        registerCsiHandler(e3, t3) {
          return this._core.registerCsiHandler(e3, (e4) => t3(e4.toArray()));
        }
        addCsiHandler(e3, t3) {
          return this.registerCsiHandler(e3, t3);
        }
        registerDcsHandler(e3, t3) {
          return this._core.registerDcsHandler(e3, (e4, s2) => t3(e4, s2.toArray()));
        }
        addDcsHandler(e3, t3) {
          return this.registerDcsHandler(e3, t3);
        }
        registerEscHandler(e3, t3) {
          return this._core.registerEscHandler(e3, t3);
        }
        addEscHandler(e3, t3) {
          return this.registerEscHandler(e3, t3);
        }
        registerOscHandler(e3, t3) {
          return this._core.registerOscHandler(e3, t3);
        }
        addOscHandler(e3, t3) {
          return this.registerOscHandler(e3, t3);
        }
      };
    }, 4335: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeApi = undefined, t2.UnicodeApi = class {
        constructor(e3) {
          this._core = e3;
        }
        register(e3) {
          this._core.unicodeService.register(e3);
        }
        get versions() {
          return this._core.unicodeService.versions;
        }
        get activeVersion() {
          return this._core.unicodeService.activeVersion;
        }
        set activeVersion(e3) {
          this._core.unicodeService.activeVersion = e3;
        }
      };
    }, 9640: function(e2, t2, s2) {
      var i2 = this && this.__decorate || function(e3, t3, s3, i3) {
        var r3, n3 = arguments.length, o2 = n3 < 3 ? t3 : i3 === null ? i3 = Object.getOwnPropertyDescriptor(t3, s3) : i3;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          o2 = Reflect.decorate(e3, t3, s3, i3);
        else
          for (var a2 = e3.length - 1;a2 >= 0; a2--)
            (r3 = e3[a2]) && (o2 = (n3 < 3 ? r3(o2) : n3 > 3 ? r3(t3, s3, o2) : r3(t3, s3)) || o2);
        return n3 > 3 && o2 && Object.defineProperty(t3, s3, o2), o2;
      }, r2 = this && this.__param || function(e3, t3) {
        return function(s3, i3) {
          t3(s3, i3, e3);
        };
      };
      Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferService = t2.MINIMUM_ROWS = t2.MINIMUM_COLS = undefined;
      const n2 = s2(7150), o = s2(4097), a = s2(6501), h = s2(802);
      t2.MINIMUM_COLS = 2, t2.MINIMUM_ROWS = 1;
      let c = class extends n2.Disposable {
        get buffer() {
          return this.buffers.active;
        }
        constructor(e3) {
          super(), this.isUserScrolling = false, this._onResize = this._register(new h.Emitter), this.onResize = this._onResize.event, this._onScroll = this._register(new h.Emitter), this.onScroll = this._onScroll.event, this.cols = Math.max(e3.rawOptions.cols || 0, t2.MINIMUM_COLS), this.rows = Math.max(e3.rawOptions.rows || 0, t2.MINIMUM_ROWS), this.buffers = this._register(new o.BufferSet(e3, this)), this._register(this.buffers.onBufferActivate((e4) => {
            this._onScroll.fire(e4.activeBuffer.ydisp);
          }));
        }
        resize(e3, t3) {
          const s3 = this.cols !== e3, i3 = this.rows !== t3;
          this.cols = e3, this.rows = t3, this.buffers.resize(e3, t3), this._onResize.fire({ cols: e3, rows: t3, colsChanged: s3, rowsChanged: i3 });
        }
        reset() {
          this.buffers.reset(), this.isUserScrolling = false;
        }
        scroll(e3, t3 = false) {
          const s3 = this.buffer;
          let i3;
          i3 = this._cachedBlankLine, i3 && i3.length === this.cols && i3.getFg(0) === e3.fg && i3.getBg(0) === e3.bg || (i3 = s3.getBlankLine(e3, t3), this._cachedBlankLine = i3), i3.isWrapped = t3;
          const r3 = s3.ybase + s3.scrollTop, n3 = s3.ybase + s3.scrollBottom;
          if (s3.scrollTop === 0) {
            const e4 = s3.lines.isFull;
            n3 === s3.lines.length - 1 ? e4 ? s3.lines.recycle().copyFrom(i3) : s3.lines.push(i3.clone()) : s3.lines.splice(n3 + 1, 0, i3.clone()), e4 ? this.isUserScrolling && (s3.ydisp = Math.max(s3.ydisp - 1, 0)) : (s3.ybase++, this.isUserScrolling || s3.ydisp++);
          } else {
            const e4 = n3 - r3 + 1;
            s3.lines.shiftElements(r3 + 1, e4 - 1, -1), s3.lines.set(n3, i3.clone());
          }
          this.isUserScrolling || (s3.ydisp = s3.ybase), this._onScroll.fire(s3.ydisp);
        }
        scrollLines(e3, t3) {
          const s3 = this.buffer;
          if (e3 < 0) {
            if (s3.ydisp === 0)
              return;
            this.isUserScrolling = true;
          } else
            e3 + s3.ydisp >= s3.ybase && (this.isUserScrolling = false);
          const i3 = s3.ydisp;
          s3.ydisp = Math.max(Math.min(s3.ydisp + e3, s3.ybase), 0), i3 !== s3.ydisp && (t3 || this._onScroll.fire(s3.ydisp));
        }
      };
      t2.BufferService = c, t2.BufferService = c = i2([r2(0, a.IOptionsService)], c);
    }, 5746: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.CharsetService = undefined, t2.CharsetService = class {
        constructor() {
          this.glevel = 0, this._charsets = [];
        }
        reset() {
          this.charset = undefined, this._charsets = [], this.glevel = 0;
        }
        setgLevel(e3) {
          this.glevel = e3, this.charset = this._charsets[e3];
        }
        setgCharset(e3, t3) {
          this._charsets[e3] = t3, this.glevel === e3 && (this.charset = t3);
        }
      };
    }, 7792: function(e2, t2, s2) {
      var i2 = this && this.__decorate || function(e3, t3, s3, i3) {
        var r3, n3 = arguments.length, o2 = n3 < 3 ? t3 : i3 === null ? i3 = Object.getOwnPropertyDescriptor(t3, s3) : i3;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          o2 = Reflect.decorate(e3, t3, s3, i3);
        else
          for (var a2 = e3.length - 1;a2 >= 0; a2--)
            (r3 = e3[a2]) && (o2 = (n3 < 3 ? r3(o2) : n3 > 3 ? r3(t3, s3, o2) : r3(t3, s3)) || o2);
        return n3 > 3 && o2 && Object.defineProperty(t3, s3, o2), o2;
      }, r2 = this && this.__param || function(e3, t3) {
        return function(s3, i3) {
          t3(s3, i3, e3);
        };
      };
      Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreMouseService = undefined;
      const n2 = s2(6501), o = s2(7150), a = s2(802), h = { NONE: { events: 0, restrict: () => false }, X10: { events: 1, restrict: (e3) => e3.button !== 4 && e3.action === 1 && (e3.ctrl = false, e3.alt = false, e3.shift = false, true) }, VT200: { events: 19, restrict: (e3) => e3.action !== 32 }, DRAG: { events: 23, restrict: (e3) => e3.action !== 32 || e3.button !== 3 }, ANY: { events: 31, restrict: (e3) => true } };
      function c(e3, t3) {
        let s3 = (e3.ctrl ? 16 : 0) | (e3.shift ? 4 : 0) | (e3.alt ? 8 : 0);
        return e3.button === 4 ? (s3 |= 64, s3 |= e3.action) : (s3 |= 3 & e3.button, 4 & e3.button && (s3 |= 64), 8 & e3.button && (s3 |= 128), e3.action === 32 ? s3 |= 32 : e3.action !== 0 || t3 || (s3 |= 3)), s3;
      }
      const l = String.fromCharCode, u = { DEFAULT: (e3) => {
        const t3 = [c(e3, false) + 32, e3.col + 32, e3.row + 32];
        return t3[0] > 255 || t3[1] > 255 || t3[2] > 255 ? "" : `\x1B[M${l(t3[0])}${l(t3[1])}${l(t3[2])}`;
      }, SGR: (e3) => {
        const t3 = e3.action === 0 && e3.button !== 4 ? "m" : "M";
        return `\x1B[<${c(e3, true)};${e3.col};${e3.row}${t3}`;
      }, SGR_PIXELS: (e3) => {
        const t3 = e3.action === 0 && e3.button !== 4 ? "m" : "M";
        return `\x1B[<${c(e3, true)};${e3.x};${e3.y}${t3}`;
      } };
      let d = class extends o.Disposable {
        constructor(e3, t3, s3) {
          super(), this._bufferService = e3, this._coreService = t3, this._optionsService = s3, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._lastEvent = null, this._wheelPartialScroll = 0, this._onProtocolChange = this._register(new a.Emitter), this.onProtocolChange = this._onProtocolChange.event;
          for (const e4 of Object.keys(h))
            this.addProtocol(e4, h[e4]);
          for (const e4 of Object.keys(u))
            this.addEncoding(e4, u[e4]);
          this.reset();
        }
        addProtocol(e3, t3) {
          this._protocols[e3] = t3;
        }
        addEncoding(e3, t3) {
          this._encodings[e3] = t3;
        }
        get activeProtocol() {
          return this._activeProtocol;
        }
        get areMouseEventsActive() {
          return this._protocols[this._activeProtocol].events !== 0;
        }
        set activeProtocol(e3) {
          if (!this._protocols[e3])
            throw new Error(`unknown protocol "${e3}"`);
          this._activeProtocol = e3, this._onProtocolChange.fire(this._protocols[e3].events);
        }
        get activeEncoding() {
          return this._activeEncoding;
        }
        set activeEncoding(e3) {
          if (!this._encodings[e3])
            throw new Error(`unknown encoding "${e3}"`);
          this._activeEncoding = e3;
        }
        reset() {
          this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null, this._wheelPartialScroll = 0;
        }
        consumeWheelEvent(e3, t3, s3) {
          if (e3.deltaY === 0 || e3.shiftKey)
            return 0;
          if (t3 === undefined || s3 === undefined)
            return 0;
          const i3 = t3 / s3;
          let r3 = this._applyScrollModifier(e3.deltaY, e3);
          return e3.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (r3 /= i3 + 0, Math.abs(e3.deltaY) < 50 && (r3 *= 0.3), this._wheelPartialScroll += r3, r3 = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e3.deltaMode === WheelEvent.DOM_DELTA_PAGE && (r3 *= this._bufferService.rows), r3;
        }
        _applyScrollModifier(e3, t3) {
          return t3.altKey || t3.ctrlKey || t3.shiftKey ? e3 * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity : e3 * this._optionsService.rawOptions.scrollSensitivity;
        }
        triggerMouseEvent(e3) {
          if (e3.col < 0 || e3.col >= this._bufferService.cols || e3.row < 0 || e3.row >= this._bufferService.rows)
            return false;
          if (e3.button === 4 && e3.action === 32)
            return false;
          if (e3.button === 3 && e3.action !== 32)
            return false;
          if (e3.button !== 4 && (e3.action === 2 || e3.action === 3))
            return false;
          if (e3.col++, e3.row++, e3.action === 32 && this._lastEvent && this._equalEvents(this._lastEvent, e3, this._activeEncoding === "SGR_PIXELS"))
            return false;
          if (!this._protocols[this._activeProtocol].restrict(e3))
            return false;
          const t3 = this._encodings[this._activeEncoding](e3);
          return t3 && (this._activeEncoding === "DEFAULT" ? this._coreService.triggerBinaryEvent(t3) : this._coreService.triggerDataEvent(t3, true)), this._lastEvent = e3, true;
        }
        explainEvents(e3) {
          return { down: !!(1 & e3), up: !!(2 & e3), drag: !!(4 & e3), move: !!(8 & e3), wheel: !!(16 & e3) };
        }
        _equalEvents(e3, t3, s3) {
          if (s3) {
            if (e3.x !== t3.x)
              return false;
            if (e3.y !== t3.y)
              return false;
          } else {
            if (e3.col !== t3.col)
              return false;
            if (e3.row !== t3.row)
              return false;
          }
          return e3.button === t3.button && e3.action === t3.action && e3.ctrl === t3.ctrl && e3.alt === t3.alt && e3.shift === t3.shift;
        }
      };
      t2.CoreMouseService = d, t2.CoreMouseService = d = i2([r2(0, n2.IBufferService), r2(1, n2.ICoreService), r2(2, n2.IOptionsService)], d);
    }, 4071: function(e2, t2, s2) {
      var i2 = this && this.__decorate || function(e3, t3, s3, i3) {
        var r3, n3 = arguments.length, o2 = n3 < 3 ? t3 : i3 === null ? i3 = Object.getOwnPropertyDescriptor(t3, s3) : i3;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          o2 = Reflect.decorate(e3, t3, s3, i3);
        else
          for (var a2 = e3.length - 1;a2 >= 0; a2--)
            (r3 = e3[a2]) && (o2 = (n3 < 3 ? r3(o2) : n3 > 3 ? r3(t3, s3, o2) : r3(t3, s3)) || o2);
        return n3 > 3 && o2 && Object.defineProperty(t3, s3, o2), o2;
      }, r2 = this && this.__param || function(e3, t3) {
        return function(s3, i3) {
          t3(s3, i3, e3);
        };
      };
      Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreService = undefined;
      const n2 = s2(7453), o = s2(7150), a = s2(6501), h = s2(802), c = Object.freeze({ insertMode: false }), l = Object.freeze({ applicationCursorKeys: false, applicationKeypad: false, bracketedPasteMode: false, cursorBlink: undefined, cursorStyle: undefined, origin: false, reverseWraparound: false, sendFocus: false, synchronizedOutput: false, wraparound: true });
      let u = class extends o.Disposable {
        constructor(e3, t3, s3) {
          super(), this._bufferService = e3, this._logService = t3, this._optionsService = s3, this.isCursorInitialized = false, this.isCursorHidden = false, this._onData = this._register(new h.Emitter), this.onData = this._onData.event, this._onUserInput = this._register(new h.Emitter), this.onUserInput = this._onUserInput.event, this._onBinary = this._register(new h.Emitter), this.onBinary = this._onBinary.event, this._onRequestScrollToBottom = this._register(new h.Emitter), this.onRequestScrollToBottom = this._onRequestScrollToBottom.event, this.modes = (0, n2.clone)(c), this.decPrivateModes = (0, n2.clone)(l);
        }
        reset() {
          this.modes = (0, n2.clone)(c), this.decPrivateModes = (0, n2.clone)(l);
        }
        triggerDataEvent(e3, t3 = false) {
          if (this._optionsService.rawOptions.disableStdin)
            return;
          const s3 = this._bufferService.buffer;
          t3 && this._optionsService.rawOptions.scrollOnUserInput && s3.ybase !== s3.ydisp && this._onRequestScrollToBottom.fire(), t3 && this._onUserInput.fire(), this._logService.debug(`sending data "${e3}"`), this._logService.trace("sending data (codes)", () => e3.split("").map((e4) => e4.charCodeAt(0))), this._onData.fire(e3);
        }
        triggerBinaryEvent(e3) {
          this._optionsService.rawOptions.disableStdin || (this._logService.debug(`sending binary "${e3}"`), this._logService.trace("sending binary (codes)", () => e3.split("").map((e4) => e4.charCodeAt(0))), this._onBinary.fire(e3));
        }
      };
      t2.CoreService = u, t2.CoreService = u = i2([r2(0, a.IBufferService), r2(1, a.ILogService), r2(2, a.IOptionsService)], u);
    }, 6025: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.InstantiationService = t2.ServiceCollection = undefined;
      const i2 = s2(6501), r2 = s2(6201);

      class n2 {
        constructor(...e3) {
          this._entries = new Map;
          for (const [t3, s3] of e3)
            this.set(t3, s3);
        }
        set(e3, t3) {
          const s3 = this._entries.get(e3);
          return this._entries.set(e3, t3), s3;
        }
        forEach(e3) {
          for (const [t3, s3] of this._entries.entries())
            e3(t3, s3);
        }
        has(e3) {
          return this._entries.has(e3);
        }
        get(e3) {
          return this._entries.get(e3);
        }
      }
      t2.ServiceCollection = n2, t2.InstantiationService = class {
        constructor() {
          this._services = new n2, this._services.set(i2.IInstantiationService, this);
        }
        setService(e3, t3) {
          this._services.set(e3, t3);
        }
        getService(e3) {
          return this._services.get(e3);
        }
        createInstance(e3, ...t3) {
          const s3 = (0, r2.getServiceDependencies)(e3).sort((e4, t4) => e4.index - t4.index), i3 = [];
          for (const t4 of s3) {
            const s4 = this._services.get(t4.id);
            if (!s4)
              throw new Error(`[createInstance] ${e3.name} depends on UNKNOWN service ${t4.id._id}.`);
            i3.push(s4);
          }
          const n3 = s3.length > 0 ? s3[0].index : t3.length;
          if (t3.length !== n3)
            throw new Error(`[createInstance] First service dependency of ${e3.name} at position ${n3 + 1} conflicts with ${t3.length} static arguments`);
          return new e3(...[...t3, ...i3]);
        }
      };
    }, 7276: function(e2, t2, s2) {
      var i2 = this && this.__decorate || function(e3, t3, s3, i3) {
        var r3, n3 = arguments.length, o2 = n3 < 3 ? t3 : i3 === null ? i3 = Object.getOwnPropertyDescriptor(t3, s3) : i3;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          o2 = Reflect.decorate(e3, t3, s3, i3);
        else
          for (var a2 = e3.length - 1;a2 >= 0; a2--)
            (r3 = e3[a2]) && (o2 = (n3 < 3 ? r3(o2) : n3 > 3 ? r3(t3, s3, o2) : r3(t3, s3)) || o2);
        return n3 > 3 && o2 && Object.defineProperty(t3, s3, o2), o2;
      }, r2 = this && this.__param || function(e3, t3) {
        return function(s3, i3) {
          t3(s3, i3, e3);
        };
      };
      Object.defineProperty(t2, "__esModule", { value: true }), t2.LogService = undefined, t2.setTraceLogger = function(e3) {
        h = e3;
      }, t2.traceCall = function(e3, t3, s3) {
        if (typeof s3.value != "function")
          throw new Error("not supported");
        const i3 = s3.value;
        s3.value = function(...e4) {
          if (h.logLevel !== o.LogLevelEnum.TRACE)
            return i3.apply(this, e4);
          h.trace(`GlyphRenderer#${i3.name}(${e4.map((e5) => JSON.stringify(e5)).join(", ")})`);
          const t4 = i3.apply(this, e4);
          return h.trace(`GlyphRenderer#${i3.name} return`, t4), t4;
        };
      };
      const n2 = s2(7150), o = s2(6501), a = { trace: o.LogLevelEnum.TRACE, debug: o.LogLevelEnum.DEBUG, info: o.LogLevelEnum.INFO, warn: o.LogLevelEnum.WARN, error: o.LogLevelEnum.ERROR, off: o.LogLevelEnum.OFF };
      let h, c = class extends n2.Disposable {
        get logLevel() {
          return this._logLevel;
        }
        constructor(e3) {
          super(), this._optionsService = e3, this._logLevel = o.LogLevelEnum.OFF, this._updateLogLevel(), this._register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel())), h = this;
        }
        _updateLogLevel() {
          this._logLevel = a[this._optionsService.rawOptions.logLevel];
        }
        _evalLazyOptionalParams(e3) {
          for (let t3 = 0;t3 < e3.length; t3++)
            typeof e3[t3] == "function" && (e3[t3] = e3[t3]());
        }
        _log(e3, t3, s3) {
          this._evalLazyOptionalParams(s3), e3.call(console, (this._optionsService.options.logger ? "" : "xterm.js: ") + t3, ...s3);
        }
        trace(e3, ...t3) {
          this._logLevel <= o.LogLevelEnum.TRACE && this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger) ?? console.log, e3, t3);
        }
        debug(e3, ...t3) {
          this._logLevel <= o.LogLevelEnum.DEBUG && this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger) ?? console.log, e3, t3);
        }
        info(e3, ...t3) {
          this._logLevel <= o.LogLevelEnum.INFO && this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger) ?? console.info, e3, t3);
        }
        warn(e3, ...t3) {
          this._logLevel <= o.LogLevelEnum.WARN && this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger) ?? console.warn, e3, t3);
        }
        error(e3, ...t3) {
          this._logLevel <= o.LogLevelEnum.ERROR && this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger) ?? console.error, e3, t3);
        }
      };
      t2.LogService = c, t2.LogService = c = i2([r2(0, o.IOptionsService)], c);
    }, 56: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.OptionsService = t2.DEFAULT_OPTIONS = undefined;
      const i2 = s2(7150), r2 = s2(701), n2 = s2(802);
      t2.DEFAULT_OPTIONS = { cols: 80, rows: 24, cursorBlink: false, cursorStyle: "block", cursorWidth: 1, cursorInactiveStyle: "outline", customGlyphs: true, drawBoldTextInBrightColors: true, documentOverride: null, fastScrollModifier: "alt", fastScrollSensitivity: 5, fontFamily: "monospace", fontSize: 15, fontWeight: "normal", fontWeightBold: "bold", ignoreBracketedPasteMode: false, lineHeight: 1, letterSpacing: 0, linkHandler: null, logLevel: "info", logger: null, scrollback: 1000, scrollOnEraseInDisplay: false, scrollOnUserInput: true, scrollSensitivity: 1, screenReaderMode: false, smoothScrollDuration: 0, macOptionIsMeta: false, macOptionClickForcesSelection: false, minimumContrastRatio: 1, disableStdin: false, allowProposedApi: false, allowTransparency: false, tabStopWidth: 8, theme: {}, reflowCursorLine: false, rescaleOverlappingGlyphs: false, rightClickSelectsWord: r2.isMac, windowOptions: {}, windowsMode: false, windowsPty: {}, wordSeparator: " ()[]{}',\"`", altClickMovesCursor: true, convertEol: false, termName: "xterm", cancelEvents: false, overviewRuler: {} };
      const o = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];

      class a extends i2.Disposable {
        constructor(e3) {
          super(), this._onOptionChange = this._register(new n2.Emitter), this.onOptionChange = this._onOptionChange.event;
          const s3 = { ...t2.DEFAULT_OPTIONS };
          for (const t3 in e3)
            if (t3 in s3)
              try {
                const i3 = e3[t3];
                s3[t3] = this._sanitizeAndValidateOption(t3, i3);
              } catch (e4) {
                console.error(e4);
              }
          this.rawOptions = s3, this.options = { ...s3 }, this._setupOptions(), this._register((0, i2.toDisposable)(() => {
            this.rawOptions.linkHandler = null, this.rawOptions.documentOverride = null;
          }));
        }
        onSpecificOptionChange(e3, t3) {
          return this.onOptionChange((s3) => {
            s3 === e3 && t3(this.rawOptions[e3]);
          });
        }
        onMultipleOptionChange(e3, t3) {
          return this.onOptionChange((s3) => {
            e3.indexOf(s3) !== -1 && t3();
          });
        }
        _setupOptions() {
          const e3 = (e4) => {
            if (!(e4 in t2.DEFAULT_OPTIONS))
              throw new Error(`No option with key "${e4}"`);
            return this.rawOptions[e4];
          }, s3 = (e4, s4) => {
            if (!(e4 in t2.DEFAULT_OPTIONS))
              throw new Error(`No option with key "${e4}"`);
            s4 = this._sanitizeAndValidateOption(e4, s4), this.rawOptions[e4] !== s4 && (this.rawOptions[e4] = s4, this._onOptionChange.fire(e4));
          };
          for (const t3 in this.rawOptions) {
            const i3 = { get: e3.bind(this, t3), set: s3.bind(this, t3) };
            Object.defineProperty(this.options, t3, i3);
          }
        }
        _sanitizeAndValidateOption(e3, s3) {
          switch (e3) {
            case "cursorStyle":
              if (s3 || (s3 = t2.DEFAULT_OPTIONS[e3]), !function(e4) {
                return e4 === "block" || e4 === "underline" || e4 === "bar";
              }(s3))
                throw new Error(`"${s3}" is not a valid value for ${e3}`);
              break;
            case "wordSeparator":
              s3 || (s3 = t2.DEFAULT_OPTIONS[e3]);
              break;
            case "fontWeight":
            case "fontWeightBold":
              if (typeof s3 == "number" && 1 <= s3 && s3 <= 1000)
                break;
              s3 = o.includes(s3) ? s3 : t2.DEFAULT_OPTIONS[e3];
              break;
            case "cursorWidth":
              s3 = Math.floor(s3);
            case "lineHeight":
            case "tabStopWidth":
              if (s3 < 1)
                throw new Error(`${e3} cannot be less than 1, value: ${s3}`);
              break;
            case "minimumContrastRatio":
              s3 = Math.max(1, Math.min(21, Math.round(10 * s3) / 10));
              break;
            case "scrollback":
              if ((s3 = Math.min(s3, 4294967295)) < 0)
                throw new Error(`${e3} cannot be less than 0, value: ${s3}`);
              break;
            case "fastScrollSensitivity":
            case "scrollSensitivity":
              if (s3 <= 0)
                throw new Error(`${e3} cannot be less than or equal to 0, value: ${s3}`);
              break;
            case "rows":
            case "cols":
              if (!s3 && s3 !== 0)
                throw new Error(`${e3} must be numeric, value: ${s3}`);
              break;
            case "windowsPty":
              s3 = s3 ?? {};
          }
          return s3;
        }
      }
      t2.OptionsService = a;
    }, 8811: function(e2, t2, s2) {
      var i2 = this && this.__decorate || function(e3, t3, s3, i3) {
        var r3, n3 = arguments.length, o2 = n3 < 3 ? t3 : i3 === null ? i3 = Object.getOwnPropertyDescriptor(t3, s3) : i3;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          o2 = Reflect.decorate(e3, t3, s3, i3);
        else
          for (var a = e3.length - 1;a >= 0; a--)
            (r3 = e3[a]) && (o2 = (n3 < 3 ? r3(o2) : n3 > 3 ? r3(t3, s3, o2) : r3(t3, s3)) || o2);
        return n3 > 3 && o2 && Object.defineProperty(t3, s3, o2), o2;
      }, r2 = this && this.__param || function(e3, t3) {
        return function(s3, i3) {
          t3(s3, i3, e3);
        };
      };
      Object.defineProperty(t2, "__esModule", { value: true }), t2.OscLinkService = undefined;
      const n2 = s2(6501);
      let o = class {
        constructor(e3) {
          this._bufferService = e3, this._nextId = 1, this._entriesWithId = new Map, this._dataByLinkId = new Map;
        }
        registerLink(e3) {
          const t3 = this._bufferService.buffer;
          if (e3.id === undefined) {
            const s4 = t3.addMarker(t3.ybase + t3.y), i4 = { data: e3, id: this._nextId++, lines: [s4] };
            return s4.onDispose(() => this._removeMarkerFromLink(i4, s4)), this._dataByLinkId.set(i4.id, i4), i4.id;
          }
          const s3 = e3, i3 = this._getEntryIdKey(s3), r3 = this._entriesWithId.get(i3);
          if (r3)
            return this.addLineToLink(r3.id, t3.ybase + t3.y), r3.id;
          const n3 = t3.addMarker(t3.ybase + t3.y), o2 = { id: this._nextId++, key: this._getEntryIdKey(s3), data: s3, lines: [n3] };
          return n3.onDispose(() => this._removeMarkerFromLink(o2, n3)), this._entriesWithId.set(o2.key, o2), this._dataByLinkId.set(o2.id, o2), o2.id;
        }
        addLineToLink(e3, t3) {
          const s3 = this._dataByLinkId.get(e3);
          if (s3 && s3.lines.every((e4) => e4.line !== t3)) {
            const e4 = this._bufferService.buffer.addMarker(t3);
            s3.lines.push(e4), e4.onDispose(() => this._removeMarkerFromLink(s3, e4));
          }
        }
        getLinkData(e3) {
          return this._dataByLinkId.get(e3)?.data;
        }
        _getEntryIdKey(e3) {
          return `${e3.id};;${e3.uri}`;
        }
        _removeMarkerFromLink(e3, t3) {
          const s3 = e3.lines.indexOf(t3);
          s3 !== -1 && (e3.lines.splice(s3, 1), e3.lines.length === 0 && (e3.data.id !== undefined && this._entriesWithId.delete(e3.key), this._dataByLinkId.delete(e3.id)));
        }
      };
      t2.OscLinkService = o, t2.OscLinkService = o = i2([r2(0, n2.IBufferService)], o);
    }, 6201: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.serviceRegistry = undefined, t2.getServiceDependencies = function(e3) {
        return e3[i2] || [];
      }, t2.createDecorator = function(e3) {
        if (t2.serviceRegistry.has(e3))
          return t2.serviceRegistry.get(e3);
        const r2 = function(e4, t3, n2) {
          if (arguments.length !== 3)
            throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
          (function(e5, t4, r3) {
            t4[s2] === t4 ? t4[i2].push({ id: e5, index: r3 }) : (t4[i2] = [{ id: e5, index: r3 }], t4[s2] = t4);
          })(r2, e4, n2);
        };
        return r2._id = e3, t2.serviceRegistry.set(e3, r2), r2;
      };
      const s2 = "di$target", i2 = "di$dependencies";
      t2.serviceRegistry = new Map;
    }, 6501: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.IDecorationService = t2.IUnicodeService = t2.IOscLinkService = t2.IOptionsService = t2.ILogService = t2.LogLevelEnum = t2.IInstantiationService = t2.ICharsetService = t2.ICoreService = t2.ICoreMouseService = t2.IBufferService = undefined;
      const i2 = s2(6201);
      var r2;
      t2.IBufferService = (0, i2.createDecorator)("BufferService"), t2.ICoreMouseService = (0, i2.createDecorator)("CoreMouseService"), t2.ICoreService = (0, i2.createDecorator)("CoreService"), t2.ICharsetService = (0, i2.createDecorator)("CharsetService"), t2.IInstantiationService = (0, i2.createDecorator)("InstantiationService"), function(e3) {
        e3[e3.TRACE = 0] = "TRACE", e3[e3.DEBUG = 1] = "DEBUG", e3[e3.INFO = 2] = "INFO", e3[e3.WARN = 3] = "WARN", e3[e3.ERROR = 4] = "ERROR", e3[e3.OFF = 5] = "OFF";
      }(r2 || (t2.LogLevelEnum = r2 = {})), t2.ILogService = (0, i2.createDecorator)("LogService"), t2.IOptionsService = (0, i2.createDecorator)("OptionsService"), t2.IOscLinkService = (0, i2.createDecorator)("OscLinkService"), t2.IUnicodeService = (0, i2.createDecorator)("UnicodeService"), t2.IDecorationService = (0, i2.createDecorator)("DecorationService");
    }, 6415: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeService = undefined;
      const i2 = s2(7428), r2 = s2(802);

      class n2 {
        static extractShouldJoin(e3) {
          return !!(1 & e3);
        }
        static extractWidth(e3) {
          return e3 >> 1 & 3;
        }
        static extractCharKind(e3) {
          return e3 >> 3;
        }
        static createPropertyValue(e3, t3, s3 = false) {
          return (16777215 & e3) << 3 | (3 & t3) << 1 | (s3 ? 1 : 0);
        }
        constructor() {
          this._providers = Object.create(null), this._active = "", this._onChange = new r2.Emitter, this.onChange = this._onChange.event;
          const e3 = new i2.UnicodeV6;
          this.register(e3), this._active = e3.version, this._activeProvider = e3;
        }
        dispose() {
          this._onChange.dispose();
        }
        get versions() {
          return Object.keys(this._providers);
        }
        get activeVersion() {
          return this._active;
        }
        set activeVersion(e3) {
          if (!this._providers[e3])
            throw new Error(`unknown Unicode version "${e3}"`);
          this._active = e3, this._activeProvider = this._providers[e3], this._onChange.fire(e3);
        }
        register(e3) {
          this._providers[e3.version] = e3;
        }
        wcwidth(e3) {
          return this._activeProvider.wcwidth(e3);
        }
        getStringCellWidth(e3) {
          let t3 = 0, s3 = 0;
          const i3 = e3.length;
          for (let r3 = 0;r3 < i3; ++r3) {
            let o = e3.charCodeAt(r3);
            if (55296 <= o && o <= 56319) {
              if (++r3 >= i3)
                return t3 + this.wcwidth(o);
              const s4 = e3.charCodeAt(r3);
              56320 <= s4 && s4 <= 57343 ? o = 1024 * (o - 55296) + s4 - 56320 + 65536 : t3 += this.wcwidth(s4);
            }
            const a = this.charProperties(o, s3);
            let h = n2.extractWidth(a);
            n2.extractShouldJoin(a) && (h -= n2.extractWidth(s3)), t3 += h, s3 = a;
          }
          return t3;
        }
        charProperties(e3, t3) {
          return this._activeProvider.charProperties(e3, t3);
        }
      }
      t2.UnicodeService = n2;
    }, 5856: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.Terminal = undefined;
      const i2 = s2(6107), r2 = s2(5777), n2 = s2(802);

      class o extends r2.CoreTerminal {
        constructor(e3 = {}) {
          super(e3), this._onBell = this._register(new n2.Emitter), this.onBell = this._onBell.event, this._onCursorMove = this._register(new n2.Emitter), this.onCursorMove = this._onCursorMove.event, this._onTitleChange = this._register(new n2.Emitter), this.onTitleChange = this._onTitleChange.event, this._onA11yCharEmitter = this._register(new n2.Emitter), this.onA11yChar = this._onA11yCharEmitter.event, this._onA11yTabEmitter = this._register(new n2.Emitter), this.onA11yTab = this._onA11yTabEmitter.event, this._setup(), this._register(this._inputHandler.onRequestBell(() => this.bell())), this._register(this._inputHandler.onRequestReset(() => this.reset())), this._register(n2.Event.forward(this._inputHandler.onCursorMove, this._onCursorMove)), this._register(n2.Event.forward(this._inputHandler.onTitleChange, this._onTitleChange)), this._register(n2.Event.forward(this._inputHandler.onA11yChar, this._onA11yCharEmitter)), this._register(n2.Event.forward(this._inputHandler.onA11yTab, this._onA11yTabEmitter));
        }
        get buffer() {
          return this.buffers.active;
        }
        get markers() {
          return this.buffer.markers;
        }
        addMarker(e3) {
          if (this.buffer === this.buffers.normal)
            return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e3);
        }
        bell() {
          this._onBell.fire();
        }
        input(e3, t3 = true) {
          this.coreService.triggerDataEvent(e3, t3);
        }
        resize(e3, t3) {
          e3 === this.cols && t3 === this.rows || super.resize(e3, t3);
        }
        clear() {
          if (this.buffer.ybase !== 0 || this.buffer.y !== 0) {
            this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
            for (let e3 = 1;e3 < this.rows; e3++)
              this.buffer.lines.push(this.buffer.getBlankLine(i2.DEFAULT_ATTR_DATA));
            this._onScroll.fire({ position: this.buffer.ydisp });
          }
        }
        reset() {
          this.options.rows = this.rows, this.options.cols = this.cols, this._setup(), super.reset();
        }
      }
      t2.Terminal = o;
    }, 3058: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.Permutation = t2.CallbackIterable = t2.ArrayQueue = t2.booleanComparator = t2.numberComparator = t2.CompareResult = undefined, t2.tail = function(e3, t3 = 0) {
        return e3[e3.length - (1 + t3)];
      }, t2.tail2 = function(e3) {
        if (e3.length === 0)
          throw new Error("Invalid tail call");
        return [e3.slice(0, e3.length - 1), e3[e3.length - 1]];
      }, t2.equals = function(e3, t3, s3 = (e4, t4) => e4 === t4) {
        if (e3 === t3)
          return true;
        if (!e3 || !t3)
          return false;
        if (e3.length !== t3.length)
          return false;
        for (let i3 = 0, r3 = e3.length;i3 < r3; i3++)
          if (!s3(e3[i3], t3[i3]))
            return false;
        return true;
      }, t2.removeFastWithoutKeepingOrder = function(e3, t3) {
        const s3 = e3.length - 1;
        t3 < s3 && (e3[t3] = e3[s3]), e3.pop();
      }, t2.binarySearch = function(e3, t3, s3) {
        return n2(e3.length, (i3) => s3(e3[i3], t3));
      }, t2.binarySearch2 = n2, t2.quickSelect = function e3(t3, s3, i3) {
        if ((t3 |= 0) >= s3.length)
          throw new TypeError("invalid index");
        const r3 = s3[Math.floor(s3.length * Math.random())], n3 = [], o2 = [], a2 = [];
        for (const e4 of s3) {
          const t4 = i3(e4, r3);
          t4 < 0 ? n3.push(e4) : t4 > 0 ? o2.push(e4) : a2.push(e4);
        }
        return t3 < n3.length ? e3(t3, n3, i3) : t3 < n3.length + a2.length ? a2[0] : e3(t3 - (n3.length + a2.length), o2, i3);
      }, t2.groupBy = function(e3, t3) {
        const s3 = [];
        let i3;
        for (const r3 of e3.slice(0).sort(t3))
          i3 && t3(i3[0], r3) === 0 ? i3.push(r3) : (i3 = [r3], s3.push(i3));
        return s3;
      }, t2.groupAdjacentBy = function* (e3, t3) {
        let s3, i3;
        for (const r3 of e3)
          i3 !== undefined && t3(i3, r3) ? s3.push(r3) : (s3 && (yield s3), s3 = [r3]), i3 = r3;
        s3 && (yield s3);
      }, t2.forEachAdjacent = function(e3, t3) {
        for (let s3 = 0;s3 <= e3.length; s3++)
          t3(s3 === 0 ? undefined : e3[s3 - 1], s3 === e3.length ? undefined : e3[s3]);
      }, t2.forEachWithNeighbors = function(e3, t3) {
        for (let s3 = 0;s3 < e3.length; s3++)
          t3(s3 === 0 ? undefined : e3[s3 - 1], e3[s3], s3 + 1 === e3.length ? undefined : e3[s3 + 1]);
      }, t2.sortedDiff = o, t2.delta = function(e3, t3, s3) {
        const i3 = o(e3, t3, s3), r3 = [], n3 = [];
        for (const t4 of i3)
          r3.push(...e3.slice(t4.start, t4.start + t4.deleteCount)), n3.push(...t4.toInsert);
        return { removed: r3, added: n3 };
      }, t2.top = function(e3, t3, s3) {
        if (s3 === 0)
          return [];
        const i3 = e3.slice(0, s3).sort(t3);
        return a(e3, t3, i3, s3, e3.length), i3;
      }, t2.topAsync = function(e3, t3, s3, r3, n3) {
        return s3 === 0 ? Promise.resolve([]) : new Promise((o2, h2) => {
          (async () => {
            const o3 = e3.length, h3 = e3.slice(0, s3).sort(t3);
            for (let c2 = s3, l2 = Math.min(s3 + r3, o3);c2 < o3; c2 = l2, l2 = Math.min(l2 + r3, o3)) {
              if (c2 > s3 && await new Promise((e4) => setTimeout(e4)), n3 && n3.isCancellationRequested)
                throw new i2.CancellationError;
              a(e3, t3, h3, c2, l2);
            }
            return h3;
          })().then(o2, h2);
        });
      }, t2.coalesce = function(e3) {
        return e3.filter((e4) => !!e4);
      }, t2.coalesceInPlace = function(e3) {
        let t3 = 0;
        for (let s3 = 0;s3 < e3.length; s3++)
          e3[s3] && (e3[t3] = e3[s3], t3 += 1);
        e3.length = t3;
      }, t2.move = function(e3, t3, s3) {
        e3.splice(s3, 0, e3.splice(t3, 1)[0]);
      }, t2.isFalsyOrEmpty = function(e3) {
        return !Array.isArray(e3) || e3.length === 0;
      }, t2.isNonEmptyArray = function(e3) {
        return Array.isArray(e3) && e3.length > 0;
      }, t2.distinct = function(e3, t3 = (e4) => e4) {
        const s3 = new Set;
        return e3.filter((e4) => {
          const i3 = t3(e4);
          return !s3.has(i3) && (s3.add(i3), true);
        });
      }, t2.uniqueFilter = function(e3) {
        const t3 = new Set;
        return (s3) => {
          const i3 = e3(s3);
          return !t3.has(i3) && (t3.add(i3), true);
        };
      }, t2.firstOrDefault = function(e3, t3) {
        return e3.length > 0 ? e3[0] : t3;
      }, t2.lastOrDefault = function(e3, t3) {
        return e3.length > 0 ? e3[e3.length - 1] : t3;
      }, t2.commonPrefixLength = function(e3, t3, s3 = (e4, t4) => e4 === t4) {
        let i3 = 0;
        for (let r3 = 0, n3 = Math.min(e3.length, t3.length);r3 < n3 && s3(e3[r3], t3[r3]); r3++)
          i3++;
        return i3;
      }, t2.range = function(e3, t3) {
        let s3 = typeof t3 == "number" ? e3 : 0;
        typeof t3 == "number" ? s3 = e3 : (s3 = 0, t3 = e3);
        const i3 = [];
        if (s3 <= t3)
          for (let e4 = s3;e4 < t3; e4++)
            i3.push(e4);
        else
          for (let e4 = s3;e4 > t3; e4--)
            i3.push(e4);
        return i3;
      }, t2.index = function(e3, t3, s3) {
        return e3.reduce((e4, i3) => (e4[t3(i3)] = s3 ? s3(i3) : i3, e4), Object.create(null));
      }, t2.insert = function(e3, t3) {
        return e3.push(t3), () => h(e3, t3);
      }, t2.remove = h, t2.arrayInsert = function(e3, t3, s3) {
        const i3 = e3.slice(0, t3), r3 = e3.slice(t3);
        return i3.concat(s3, r3);
      }, t2.shuffle = function(e3, t3) {
        let s3;
        if (typeof t3 == "number") {
          let e4 = t3;
          s3 = () => {
            const t4 = 179426549 * Math.sin(e4++);
            return t4 - Math.floor(t4);
          };
        } else
          s3 = Math.random;
        for (let t4 = e3.length - 1;t4 > 0; t4 -= 1) {
          const i3 = Math.floor(s3() * (t4 + 1)), r3 = e3[t4];
          e3[t4] = e3[i3], e3[i3] = r3;
        }
      }, t2.pushToStart = function(e3, t3) {
        const s3 = e3.indexOf(t3);
        s3 > -1 && (e3.splice(s3, 1), e3.unshift(t3));
      }, t2.pushToEnd = function(e3, t3) {
        const s3 = e3.indexOf(t3);
        s3 > -1 && (e3.splice(s3, 1), e3.push(t3));
      }, t2.pushMany = function(e3, t3) {
        for (const s3 of t3)
          e3.push(s3);
      }, t2.mapArrayOrNot = function(e3, t3) {
        return Array.isArray(e3) ? e3.map(t3) : t3(e3);
      }, t2.asArray = function(e3) {
        return Array.isArray(e3) ? e3 : [e3];
      }, t2.getRandomElement = function(e3) {
        return e3[Math.floor(Math.random() * e3.length)];
      }, t2.insertInto = c, t2.splice = function(e3, t3, s3, i3) {
        const r3 = l(e3, t3);
        let n3 = e3.splice(r3, s3);
        return n3 === undefined && (n3 = []), c(e3, r3, i3), n3;
      }, t2.compareBy = function(e3, t3) {
        return (s3, i3) => t3(e3(s3), e3(i3));
      }, t2.tieBreakComparators = function(...e3) {
        return (t3, s3) => {
          for (const i3 of e3) {
            const e4 = i3(t3, s3);
            if (!u.isNeitherLessOrGreaterThan(e4))
              return e4;
          }
          return u.neitherLessOrGreaterThan;
        };
      }, t2.reverseOrder = function(e3) {
        return (t3, s3) => -e3(t3, s3);
      };
      const i2 = s2(9807), r2 = s2(8297);
      function n2(e3, t3) {
        let s3 = 0, i3 = e3 - 1;
        for (;s3 <= i3; ) {
          const e4 = (s3 + i3) / 2 | 0, r3 = t3(e4);
          if (r3 < 0)
            s3 = e4 + 1;
          else {
            if (!(r3 > 0))
              return e4;
            i3 = e4 - 1;
          }
        }
        return -(s3 + 1);
      }
      function o(e3, t3, s3) {
        const i3 = [];
        function r3(e4, t4, s4) {
          if (t4 === 0 && s4.length === 0)
            return;
          const r4 = i3[i3.length - 1];
          r4 && r4.start + r4.deleteCount === e4 ? (r4.deleteCount += t4, r4.toInsert.push(...s4)) : i3.push({ start: e4, deleteCount: t4, toInsert: s4 });
        }
        let n3 = 0, o2 = 0;
        for (;; ) {
          if (n3 === e3.length) {
            r3(n3, 0, t3.slice(o2));
            break;
          }
          if (o2 === t3.length) {
            r3(n3, e3.length - n3, []);
            break;
          }
          const i4 = e3[n3], a2 = t3[o2], h2 = s3(i4, a2);
          h2 === 0 ? (n3 += 1, o2 += 1) : h2 < 0 ? (r3(n3, 1, []), n3 += 1) : h2 > 0 && (r3(n3, 0, [a2]), o2 += 1);
        }
        return i3;
      }
      function a(e3, t3, s3, i3, n3) {
        for (const o2 = s3.length;i3 < n3; i3++) {
          const n4 = e3[i3];
          if (t3(n4, s3[o2 - 1]) < 0) {
            s3.pop();
            const e4 = (0, r2.findFirstIdxMonotonousOrArrLen)(s3, (e5) => t3(n4, e5) < 0);
            s3.splice(e4, 0, n4);
          }
        }
      }
      function h(e3, t3) {
        const s3 = e3.indexOf(t3);
        if (s3 > -1)
          return e3.splice(s3, 1), t3;
      }
      function c(e3, t3, s3) {
        const i3 = l(e3, t3), r3 = e3.length, n3 = s3.length;
        e3.length = r3 + n3;
        for (let t4 = r3 - 1;t4 >= i3; t4--)
          e3[t4 + n3] = e3[t4];
        for (let t4 = 0;t4 < n3; t4++)
          e3[t4 + i3] = s3[t4];
      }
      function l(e3, t3) {
        return t3 < 0 ? Math.max(t3 + e3.length, 0) : Math.min(t3, e3.length);
      }
      var u;
      (function(e3) {
        e3.isLessThan = function(e4) {
          return e4 < 0;
        }, e3.isLessThanOrEqual = function(e4) {
          return e4 <= 0;
        }, e3.isGreaterThan = function(e4) {
          return e4 > 0;
        }, e3.isNeitherLessOrGreaterThan = function(e4) {
          return e4 === 0;
        }, e3.greaterThan = 1, e3.lessThan = -1, e3.neitherLessOrGreaterThan = 0;
      })(u || (t2.CompareResult = u = {})), t2.numberComparator = (e3, t3) => e3 - t3, t2.booleanComparator = (e3, s3) => (0, t2.numberComparator)(e3 ? 1 : 0, s3 ? 1 : 0), t2.ArrayQueue = class {
        constructor(e3) {
          this.items = e3, this.firstIdx = 0, this.lastIdx = this.items.length - 1;
        }
        get length() {
          return this.lastIdx - this.firstIdx + 1;
        }
        takeWhile(e3) {
          let t3 = this.firstIdx;
          for (;t3 < this.items.length && e3(this.items[t3]); )
            t3++;
          const s3 = t3 === this.firstIdx ? null : this.items.slice(this.firstIdx, t3);
          return this.firstIdx = t3, s3;
        }
        takeFromEndWhile(e3) {
          let t3 = this.lastIdx;
          for (;t3 >= 0 && e3(this.items[t3]); )
            t3--;
          const s3 = t3 === this.lastIdx ? null : this.items.slice(t3 + 1, this.lastIdx + 1);
          return this.lastIdx = t3, s3;
        }
        peek() {
          if (this.length !== 0)
            return this.items[this.firstIdx];
        }
        peekLast() {
          if (this.length !== 0)
            return this.items[this.lastIdx];
        }
        dequeue() {
          const e3 = this.items[this.firstIdx];
          return this.firstIdx++, e3;
        }
        removeLast() {
          const e3 = this.items[this.lastIdx];
          return this.lastIdx--, e3;
        }
        takeCount(e3) {
          const t3 = this.items.slice(this.firstIdx, this.firstIdx + e3);
          return this.firstIdx += e3, t3;
        }
      };

      class d {
        static {
          this.empty = new d((e3) => {});
        }
        constructor(e3) {
          this.iterate = e3;
        }
        forEach(e3) {
          this.iterate((t3) => (e3(t3), true));
        }
        toArray() {
          const e3 = [];
          return this.iterate((t3) => (e3.push(t3), true)), e3;
        }
        filter(e3) {
          return new d((t3) => this.iterate((s3) => !e3(s3) || t3(s3)));
        }
        map(e3) {
          return new d((t3) => this.iterate((s3) => t3(e3(s3))));
        }
        some(e3) {
          let t3 = false;
          return this.iterate((s3) => (t3 = e3(s3), !t3)), t3;
        }
        findFirst(e3) {
          let t3;
          return this.iterate((s3) => !e3(s3) || (t3 = s3, false)), t3;
        }
        findLast(e3) {
          let t3;
          return this.iterate((s3) => (e3(s3) && (t3 = s3), true)), t3;
        }
        findLastMaxBy(e3) {
          let t3, s3 = true;
          return this.iterate((i3) => ((s3 || u.isGreaterThan(e3(i3, t3))) && (s3 = false, t3 = i3), true)), t3;
        }
      }
      t2.CallbackIterable = d;

      class f {
        constructor(e3) {
          this._indexMap = e3;
        }
        static createSortPermutation(e3, t3) {
          const s3 = Array.from(e3.keys()).sort((s4, i3) => t3(e3[s4], e3[i3]));
          return new f(s3);
        }
        apply(e3) {
          return e3.map((t3, s3) => e3[this._indexMap[s3]]);
        }
        inverse() {
          const e3 = this._indexMap.slice();
          for (let t3 = 0;t3 < this._indexMap.length; t3++)
            e3[this._indexMap[t3]] = t3;
          return new f(e3);
        }
      }
      t2.Permutation = f;
    }, 8297: (e2, t2) => {
      function s2(e3, t3, s3 = e3.length - 1) {
        for (let i3 = s3;i3 >= 0; i3--)
          if (t3(e3[i3]))
            return i3;
        return -1;
      }
      function i2(e3, t3, s3 = 0, i3 = e3.length) {
        let r3 = s3, n3 = i3;
        for (;r3 < n3; ) {
          const s4 = Math.floor((r3 + n3) / 2);
          t3(e3[s4]) ? r3 = s4 + 1 : n3 = s4;
        }
        return r3 - 1;
      }
      function r2(e3, t3, s3 = 0, i3 = e3.length) {
        let r3 = s3, n3 = i3;
        for (;r3 < n3; ) {
          const s4 = Math.floor((r3 + n3) / 2);
          t3(e3[s4]) ? n3 = s4 : r3 = s4 + 1;
        }
        return r3;
      }
      Object.defineProperty(t2, "__esModule", { value: true }), t2.MonotonousArray = undefined, t2.findLast = function(e3, t3) {
        const i3 = s2(e3, t3);
        if (i3 !== -1)
          return e3[i3];
      }, t2.findLastIdx = s2, t2.findLastMonotonous = function(e3, t3) {
        const s3 = i2(e3, t3);
        return s3 === -1 ? undefined : e3[s3];
      }, t2.findLastIdxMonotonous = i2, t2.findFirstMonotonous = function(e3, t3) {
        const s3 = r2(e3, t3);
        return s3 === e3.length ? undefined : e3[s3];
      }, t2.findFirstIdxMonotonousOrArrLen = r2, t2.findFirstIdxMonotonous = function(e3, t3, s3 = 0, i3 = e3.length) {
        const n3 = r2(e3, t3, s3, i3);
        return n3 === e3.length ? -1 : n3;
      }, t2.findFirstMax = o, t2.findLastMax = function(e3, t3) {
        if (e3.length === 0)
          return;
        let s3 = e3[0];
        for (let i3 = 1;i3 < e3.length; i3++) {
          const r3 = e3[i3];
          t3(r3, s3) >= 0 && (s3 = r3);
        }
        return s3;
      }, t2.findFirstMin = function(e3, t3) {
        return o(e3, (e4, s3) => -t3(e4, s3));
      }, t2.findMaxIdx = function(e3, t3) {
        if (e3.length === 0)
          return -1;
        let s3 = 0;
        for (let i3 = 1;i3 < e3.length; i3++)
          t3(e3[i3], e3[s3]) > 0 && (s3 = i3);
        return s3;
      }, t2.mapFindFirst = function(e3, t3) {
        for (const s3 of e3) {
          const e4 = t3(s3);
          if (e4 !== undefined)
            return e4;
        }
      };

      class n2 {
        static {
          this.assertInvariants = false;
        }
        constructor(e3) {
          this._array = e3, this._findLastMonotonousLastIdx = 0;
        }
        findLastMonotonous(e3) {
          if (n2.assertInvariants) {
            if (this._prevFindLastPredicate) {
              for (const t4 of this._array)
                if (this._prevFindLastPredicate(t4) && !e3(t4))
                  throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
            }
            this._prevFindLastPredicate = e3;
          }
          const t3 = i2(this._array, e3, this._findLastMonotonousLastIdx);
          return this._findLastMonotonousLastIdx = t3 + 1, t3 === -1 ? undefined : this._array[t3];
        }
      }
      function o(e3, t3) {
        if (e3.length === 0)
          return;
        let s3 = e3[0];
        for (let i3 = 1;i3 < e3.length; i3++) {
          const r3 = e3[i3];
          t3(r3, s3) > 0 && (s3 = r3);
        }
        return s3;
      }
      t2.MonotonousArray = n2;
    }, 9087: (e2, t2) => {
      var s2;
      Object.defineProperty(t2, "__esModule", { value: true }), t2.SetWithKey = undefined, t2.groupBy = function(e3, t3) {
        const s3 = Object.create(null);
        for (const i3 of e3) {
          const e4 = t3(i3);
          let r2 = s3[e4];
          r2 || (r2 = s3[e4] = []), r2.push(i3);
        }
        return s3;
      }, t2.diffSets = function(e3, t3) {
        const s3 = [], i3 = [];
        for (const i4 of e3)
          t3.has(i4) || s3.push(i4);
        for (const s4 of t3)
          e3.has(s4) || i3.push(s4);
        return { removed: s3, added: i3 };
      }, t2.diffMaps = function(e3, t3) {
        const s3 = [], i3 = [];
        for (const [i4, r2] of e3)
          t3.has(i4) || s3.push(r2);
        for (const [s4, r2] of t3)
          e3.has(s4) || i3.push(r2);
        return { removed: s3, added: i3 };
      }, t2.intersection = function(e3, t3) {
        const s3 = new Set;
        for (const i3 of t3)
          e3.has(i3) && s3.add(i3);
        return s3;
      };

      class i2 {
        static {
          s2 = Symbol.toStringTag;
        }
        constructor(e3, t3) {
          this.toKey = t3, this._map = new Map, this[s2] = "SetWithKey";
          for (const t4 of e3)
            this.add(t4);
        }
        get size() {
          return this._map.size;
        }
        add(e3) {
          const t3 = this.toKey(e3);
          return this._map.set(t3, e3), this;
        }
        delete(e3) {
          return this._map.delete(this.toKey(e3));
        }
        has(e3) {
          return this._map.has(this.toKey(e3));
        }
        *entries() {
          for (const e3 of this._map.values())
            yield [e3, e3];
        }
        keys() {
          return this.values();
        }
        *values() {
          for (const e3 of this._map.values())
            yield e3;
        }
        clear() {
          this._map.clear();
        }
        forEach(e3, t3) {
          this._map.forEach((s3) => e3.call(t3, s3, s3, this));
        }
        [Symbol.iterator]() {
          return this.values();
        }
      }
      t2.SetWithKey = i2;
    }, 9807: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.BugIndicatingError = t2.ErrorNoTelemetry = t2.ExpectedError = t2.NotSupportedError = t2.NotImplementedError = t2.ReadonlyError = t2.CancellationError = t2.errorHandler = t2.ErrorHandler = undefined, t2.setUnexpectedErrorHandler = function(e3) {
        t2.errorHandler.setUnexpectedErrorHandler(e3);
      }, t2.isSigPipeError = function(e3) {
        if (!e3 || typeof e3 != "object")
          return false;
        const t3 = e3;
        return t3.code === "EPIPE" && t3.syscall?.toUpperCase() === "WRITE";
      }, t2.onUnexpectedError = function(e3) {
        r2(e3) || t2.errorHandler.onUnexpectedError(e3);
      }, t2.onUnexpectedExternalError = function(e3) {
        r2(e3) || t2.errorHandler.onUnexpectedExternalError(e3);
      }, t2.transformErrorForSerialization = function(e3) {
        if (e3 instanceof Error) {
          const { name: t3, message: s3 } = e3;
          return { $isError: true, name: t3, message: s3, stack: e3.stacktrace || e3.stack, noTelemetry: l.isErrorNoTelemetry(e3) };
        }
        return e3;
      }, t2.transformErrorFromSerialization = function(e3) {
        let t3;
        return e3.noTelemetry ? t3 = new l : (t3 = new Error, t3.name = e3.name), t3.message = e3.message, t3.stack = e3.stack, t3;
      }, t2.isCancellationError = r2, t2.canceled = function() {
        const e3 = new Error(i2);
        return e3.name = e3.message, e3;
      }, t2.illegalArgument = function(e3) {
        return e3 ? new Error(`Illegal argument: ${e3}`) : new Error("Illegal argument");
      }, t2.illegalState = function(e3) {
        return e3 ? new Error(`Illegal state: ${e3}`) : new Error("Illegal state");
      }, t2.getErrorMessage = function(e3) {
        return e3 ? e3.message ? e3.message : e3.stack ? e3.stack.split(`
`)[0] : String(e3) : "Error";
      };

      class s2 {
        constructor() {
          this.listeners = [], this.unexpectedErrorHandler = function(e3) {
            setTimeout(() => {
              if (e3.stack) {
                if (l.isErrorNoTelemetry(e3))
                  throw new l(e3.message + `

` + e3.stack);
                throw new Error(e3.message + `

` + e3.stack);
              }
              throw e3;
            }, 0);
          };
        }
        addListener(e3) {
          return this.listeners.push(e3), () => {
            this._removeListener(e3);
          };
        }
        emit(e3) {
          this.listeners.forEach((t3) => {
            t3(e3);
          });
        }
        _removeListener(e3) {
          this.listeners.splice(this.listeners.indexOf(e3), 1);
        }
        setUnexpectedErrorHandler(e3) {
          this.unexpectedErrorHandler = e3;
        }
        getUnexpectedErrorHandler() {
          return this.unexpectedErrorHandler;
        }
        onUnexpectedError(e3) {
          this.unexpectedErrorHandler(e3), this.emit(e3);
        }
        onUnexpectedExternalError(e3) {
          this.unexpectedErrorHandler(e3);
        }
      }
      t2.ErrorHandler = s2, t2.errorHandler = new s2;
      const i2 = "Canceled";
      function r2(e3) {
        return e3 instanceof n2 || e3 instanceof Error && e3.name === i2 && e3.message === i2;
      }

      class n2 extends Error {
        constructor() {
          super(i2), this.name = this.message;
        }
      }
      t2.CancellationError = n2;

      class o extends TypeError {
        constructor(e3) {
          super(e3 ? `${e3} is read-only and cannot be changed` : "Cannot change read-only property");
        }
      }
      t2.ReadonlyError = o;

      class a extends Error {
        constructor(e3) {
          super("NotImplemented"), e3 && (this.message = e3);
        }
      }
      t2.NotImplementedError = a;

      class h extends Error {
        constructor(e3) {
          super("NotSupported"), e3 && (this.message = e3);
        }
      }
      t2.NotSupportedError = h;

      class c extends Error {
        constructor() {
          super(...arguments), this.isExpected = true;
        }
      }
      t2.ExpectedError = c;

      class l extends Error {
        constructor(e3) {
          super(e3), this.name = "CodeExpectedError";
        }
        static fromError(e3) {
          if (e3 instanceof l)
            return e3;
          const t3 = new l;
          return t3.message = e3.message, t3.stack = e3.stack, t3;
        }
        static isErrorNoTelemetry(e3) {
          return e3.name === "CodeExpectedError";
        }
      }
      t2.ErrorNoTelemetry = l;

      class u extends Error {
        constructor(e3) {
          super(e3 || "An unexpected bug occurred."), Object.setPrototypeOf(this, u.prototype);
        }
      }
      t2.BugIndicatingError = u;
    }, 802: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.ValueWithChangeEvent = t2.Relay = t2.EventBufferer = t2.DynamicListEventMultiplexer = t2.EventMultiplexer = t2.MicrotaskEmitter = t2.DebounceEmitter = t2.PauseableEmitter = t2.AsyncEmitter = t2.createEventDeliveryQueue = t2.Emitter = t2.ListenerRefusalError = t2.ListenerLeakError = t2.EventProfiling = t2.Event = undefined, t2.setGlobalLeakWarningThreshold = function(e3) {
        const t3 = l;
        return l = e3, { dispose() {
          l = t3;
        } };
      };
      const i2 = s2(9807), r2 = s2(8841), n2 = s2(7150), o = s2(6317), a = s2(9725);
      var h;
      (function(e3) {
        function t3(e4) {
          return (t4, s4 = null, i4) => {
            let r4, n3 = false;
            return r4 = e4((e5) => {
              if (!n3)
                return r4 ? r4.dispose() : n3 = true, t4.call(s4, e5);
            }, null, i4), n3 && r4.dispose(), r4;
          };
        }
        function s3(e4, t4, s4) {
          return r3((s5, i4 = null, r4) => e4((e5) => s5.call(i4, t4(e5)), null, r4), s4);
        }
        function i3(e4, t4, s4) {
          return r3((s5, i4 = null, r4) => e4((e5) => t4(e5) && s5.call(i4, e5), null, r4), s4);
        }
        function r3(e4, t4) {
          let s4;
          const i4 = new v({ onWillAddFirstListener() {
            s4 = e4(i4.fire, i4);
          }, onDidRemoveLastListener() {
            s4?.dispose();
          } });
          return t4?.add(i4), i4.event;
        }
        function o2(e4, t4, s4 = 100, i4 = false, r4 = false, n3, o3) {
          let a3, h3, c3, l2, u2 = 0;
          const d2 = new v({ leakWarningThreshold: n3, onWillAddFirstListener() {
            a3 = e4((e5) => {
              u2++, h3 = t4(h3, e5), i4 && !c3 && (d2.fire(h3), h3 = undefined), l2 = () => {
                const e6 = h3;
                h3 = undefined, c3 = undefined, (!i4 || u2 > 1) && d2.fire(e6), u2 = 0;
              }, typeof s4 == "number" ? (clearTimeout(c3), c3 = setTimeout(l2, s4)) : c3 === undefined && (c3 = 0, queueMicrotask(l2));
            });
          }, onWillRemoveListener() {
            r4 && u2 > 0 && l2?.();
          }, onDidRemoveLastListener() {
            l2 = undefined, a3.dispose();
          } });
          return o3?.add(d2), d2.event;
        }
        e3.None = () => n2.Disposable.None, e3.defer = function(e4, t4) {
          return o2(e4, () => {}, 0, undefined, true, undefined, t4);
        }, e3.once = t3, e3.map = s3, e3.forEach = function(e4, t4, s4) {
          return r3((s5, i4 = null, r4) => e4((e5) => {
            t4(e5), s5.call(i4, e5);
          }, null, r4), s4);
        }, e3.filter = i3, e3.signal = function(e4) {
          return e4;
        }, e3.any = function(...e4) {
          return (t4, s4 = null, i4) => {
            return r4 = (0, n2.combinedDisposable)(...e4.map((e5) => e5((e6) => t4.call(s4, e6)))), (o3 = i4) instanceof Array ? o3.push(r4) : o3 && o3.add(r4), r4;
            var r4, o3;
          };
        }, e3.reduce = function(e4, t4, i4, r4) {
          let n3 = i4;
          return s3(e4, (e5) => (n3 = t4(n3, e5), n3), r4);
        }, e3.debounce = o2, e3.accumulate = function(t4, s4 = 0, i4) {
          return e3.debounce(t4, (e4, t5) => e4 ? (e4.push(t5), e4) : [t5], s4, undefined, true, undefined, i4);
        }, e3.latch = function(e4, t4 = (e5, t5) => e5 === t5, s4) {
          let r4, n3 = true;
          return i3(e4, (e5) => {
            const s5 = n3 || !t4(e5, r4);
            return n3 = false, r4 = e5, s5;
          }, s4);
        }, e3.split = function(t4, s4, i4) {
          return [e3.filter(t4, s4, i4), e3.filter(t4, (e4) => !s4(e4), i4)];
        }, e3.buffer = function(e4, t4 = false, s4 = [], i4) {
          let r4 = s4.slice(), n3 = e4((e5) => {
            r4 ? r4.push(e5) : a3.fire(e5);
          });
          i4 && i4.add(n3);
          const o3 = () => {
            r4?.forEach((e5) => a3.fire(e5)), r4 = null;
          }, a3 = new v({ onWillAddFirstListener() {
            n3 || (n3 = e4((e5) => a3.fire(e5)), i4 && i4.add(n3));
          }, onDidAddFirstListener() {
            r4 && (t4 ? setTimeout(o3) : o3());
          }, onDidRemoveLastListener() {
            n3 && n3.dispose(), n3 = null;
          } });
          return i4 && i4.add(a3), a3.event;
        }, e3.chain = function(e4, t4) {
          return (s4, i4, r4) => {
            const n3 = t4(new h2);
            return e4(function(e5) {
              const t5 = n3.evaluate(e5);
              t5 !== a2 && s4.call(i4, t5);
            }, undefined, r4);
          };
        };
        const a2 = Symbol("HaltChainable");

        class h2 {
          constructor() {
            this.steps = [];
          }
          map(e4) {
            return this.steps.push(e4), this;
          }
          forEach(e4) {
            return this.steps.push((t4) => (e4(t4), t4)), this;
          }
          filter(e4) {
            return this.steps.push((t4) => e4(t4) ? t4 : a2), this;
          }
          reduce(e4, t4) {
            let s4 = t4;
            return this.steps.push((t5) => (s4 = e4(s4, t5), s4)), this;
          }
          latch(e4 = (e5, t4) => e5 === t4) {
            let t4, s4 = true;
            return this.steps.push((i4) => {
              const r4 = s4 || !e4(i4, t4);
              return s4 = false, t4 = i4, r4 ? i4 : a2;
            }), this;
          }
          evaluate(e4) {
            for (const t4 of this.steps)
              if ((e4 = t4(e4)) === a2)
                break;
            return e4;
          }
        }
        e3.fromNodeEventEmitter = function(e4, t4, s4 = (e5) => e5) {
          const i4 = (...e5) => r4.fire(s4(...e5)), r4 = new v({ onWillAddFirstListener: () => e4.on(t4, i4), onDidRemoveLastListener: () => e4.removeListener(t4, i4) });
          return r4.event;
        }, e3.fromDOMEventEmitter = function(e4, t4, s4 = (e5) => e5) {
          const i4 = (...e5) => r4.fire(s4(...e5)), r4 = new v({ onWillAddFirstListener: () => e4.addEventListener(t4, i4), onDidRemoveLastListener: () => e4.removeEventListener(t4, i4) });
          return r4.event;
        }, e3.toPromise = function(e4) {
          return new Promise((s4) => t3(e4)(s4));
        }, e3.fromPromise = function(e4) {
          const t4 = new v;
          return e4.then((e5) => {
            t4.fire(e5);
          }, () => {
            t4.fire(undefined);
          }).finally(() => {
            t4.dispose();
          }), t4.event;
        }, e3.forward = function(e4, t4) {
          return e4((e5) => t4.fire(e5));
        }, e3.runAndSubscribe = function(e4, t4, s4) {
          return t4(s4), e4((e5) => t4(e5));
        };

        class c2 {
          constructor(e4, t4) {
            this._observable = e4, this._counter = 0, this._hasChanged = false;
            const s4 = { onWillAddFirstListener: () => {
              e4.addObserver(this);
            }, onDidRemoveLastListener: () => {
              e4.removeObserver(this);
            } };
            this.emitter = new v(s4), t4 && t4.add(this.emitter);
          }
          beginUpdate(e4) {
            this._counter++;
          }
          handlePossibleChange(e4) {}
          handleChange(e4, t4) {
            this._hasChanged = true;
          }
          endUpdate(e4) {
            this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
          }
        }
        e3.fromObservable = function(e4, t4) {
          return new c2(e4, t4).emitter.event;
        }, e3.fromObservableLight = function(e4) {
          return (t4, s4, i4) => {
            let r4 = 0, o3 = false;
            const a3 = { beginUpdate() {
              r4++;
            }, endUpdate() {
              r4--, r4 === 0 && (e4.reportChanges(), o3 && (o3 = false, t4.call(s4)));
            }, handlePossibleChange() {}, handleChange() {
              o3 = true;
            } };
            e4.addObserver(a3), e4.reportChanges();
            const h3 = { dispose() {
              e4.removeObserver(a3);
            } };
            return i4 instanceof n2.DisposableStore ? i4.add(h3) : Array.isArray(i4) && i4.push(h3), h3;
          };
        };
      })(h || (t2.Event = h = {}));

      class c {
        static {
          this.all = new Set;
        }
        static {
          this._idPool = 0;
        }
        constructor(e3) {
          this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${e3}_${c._idPool++}`, c.all.add(this);
        }
        start(e3) {
          this._stopWatch = new a.StopWatch, this.listenerCount = e3;
        }
        stop() {
          if (this._stopWatch) {
            const e3 = this._stopWatch.elapsed();
            this.durations.push(e3), this.elapsedOverall += e3, this.invocationCount += 1, this._stopWatch = undefined;
          }
        }
      }
      t2.EventProfiling = c;
      let l = -1;

      class u {
        static {
          this._idPool = 1;
        }
        constructor(e3, t3, s3 = (u._idPool++).toString(16).padStart(3, "0")) {
          this._errorHandler = e3, this.threshold = t3, this.name = s3, this._warnCountdown = 0;
        }
        dispose() {
          this._stacks?.clear();
        }
        check(e3, t3) {
          const s3 = this.threshold;
          if (s3 <= 0 || t3 < s3)
            return;
          this._stacks || (this._stacks = new Map);
          const i3 = this._stacks.get(e3.value) || 0;
          if (this._stacks.set(e3.value, i3 + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
            this._warnCountdown = 0.5 * s3;
            const [e4, i4] = this.getMostFrequentStack(), r3 = `[${this.name}] potential listener LEAK detected, having ${t3} listeners already. MOST frequent listener (${i4}):`;
            console.warn(r3), console.warn(e4);
            const n3 = new f(r3, e4);
            this._errorHandler(n3);
          }
          return () => {
            const t4 = this._stacks.get(e3.value) || 0;
            this._stacks.set(e3.value, t4 - 1);
          };
        }
        getMostFrequentStack() {
          if (!this._stacks)
            return;
          let e3, t3 = 0;
          for (const [s3, i3] of this._stacks)
            (!e3 || t3 < i3) && (e3 = [s3, i3], t3 = i3);
          return e3;
        }
      }

      class d {
        static create() {
          const e3 = new Error;
          return new d(e3.stack ?? "");
        }
        constructor(e3) {
          this.value = e3;
        }
        print() {
          console.warn(this.value.split(`
`).slice(2).join(`
`));
        }
      }

      class f extends Error {
        constructor(e3, t3) {
          super(e3), this.name = "ListenerLeakError", this.stack = t3;
        }
      }
      t2.ListenerLeakError = f;

      class _ extends Error {
        constructor(e3, t3) {
          super(e3), this.name = "ListenerRefusalError", this.stack = t3;
        }
      }
      t2.ListenerRefusalError = _;
      let p = 0;

      class g {
        constructor(e3) {
          this.value = e3, this.id = p++;
        }
      }

      class v {
        constructor(e3) {
          this._size = 0, this._options = e3, this._leakageMon = l > 0 || this._options?.leakWarningThreshold ? new u(e3?.onListenerError ?? i2.onUnexpectedError, this._options?.leakWarningThreshold ?? l) : undefined, this._perfMon = this._options?._profName ? new c(this._options._profName) : undefined, this._deliveryQueue = this._options?.deliveryQueue;
        }
        dispose() {
          this._disposed || (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = undefined, this._size = 0), this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose());
        }
        get event() {
          return this._event ??= (e3, t3, s3) => {
            if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
              const e4 = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
              console.warn(e4);
              const t4 = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], s4 = new _(`${e4}. HINT: Stack shows most frequent listener (${t4[1]}-times)`, t4[0]);
              return (this._options?.onListenerError || i2.onUnexpectedError)(s4), n2.Disposable.None;
            }
            if (this._disposed)
              return n2.Disposable.None;
            t3 && (e3 = e3.bind(t3));
            const r3 = new g(e3);
            let o2;
            this._leakageMon && this._size >= Math.ceil(0.2 * this._leakageMon.threshold) && (r3.stack = d.create(), o2 = this._leakageMon.check(r3.stack, this._size + 1)), this._listeners ? this._listeners instanceof g ? (this._deliveryQueue ??= new m, this._listeners = [this._listeners, r3]) : this._listeners.push(r3) : (this._options?.onWillAddFirstListener?.(this), this._listeners = r3, this._options?.onDidAddFirstListener?.(this)), this._size++;
            const a2 = (0, n2.toDisposable)(() => {
              o2?.(), this._removeListener(r3);
            });
            return s3 instanceof n2.DisposableStore ? s3.add(a2) : Array.isArray(s3) && s3.push(a2), a2;
          }, this._event;
        }
        _removeListener(e3) {
          if (this._options?.onWillRemoveListener?.(this), !this._listeners)
            return;
          if (this._size === 1)
            return this._listeners = undefined, this._options?.onDidRemoveLastListener?.(this), void (this._size = 0);
          const t3 = this._listeners, s3 = t3.indexOf(e3);
          if (s3 === -1)
            throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
          this._size--, t3[s3] = undefined;
          const i3 = this._deliveryQueue.current === this;
          if (2 * this._size <= t3.length) {
            let e4 = 0;
            for (let s4 = 0;s4 < t3.length; s4++)
              t3[s4] ? t3[e4++] = t3[s4] : i3 && (this._deliveryQueue.end--, e4 < this._deliveryQueue.i && this._deliveryQueue.i--);
            t3.length = e4;
          }
        }
        _deliver(e3, t3) {
          if (!e3)
            return;
          const s3 = this._options?.onListenerError || i2.onUnexpectedError;
          if (s3)
            try {
              e3.value(t3);
            } catch (e4) {
              s3(e4);
            }
          else
            e3.value(t3);
        }
        _deliverQueue(e3) {
          const t3 = e3.current._listeners;
          for (;e3.i < e3.end; )
            this._deliver(t3[e3.i++], e3.value);
          e3.reset();
        }
        fire(e3) {
          if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners)
            if (this._listeners instanceof g)
              this._deliver(this._listeners, e3);
            else {
              const t3 = this._deliveryQueue;
              t3.enqueue(this, e3, this._listeners.length), this._deliverQueue(t3);
            }
          this._perfMon?.stop();
        }
        hasListeners() {
          return this._size > 0;
        }
      }
      t2.Emitter = v, t2.createEventDeliveryQueue = () => new m;

      class m {
        constructor() {
          this.i = -1, this.end = 0;
        }
        enqueue(e3, t3, s3) {
          this.i = 0, this.end = s3, this.current = e3, this.value = t3;
        }
        reset() {
          this.i = this.end, this.current = undefined, this.value = undefined;
        }
      }
      t2.AsyncEmitter = class extends v {
        async fireAsync(e3, t3, s3) {
          if (this._listeners)
            for (this._asyncDeliveryQueue || (this._asyncDeliveryQueue = new o.LinkedList), ((e4, t4) => {
              if (e4 instanceof g)
                t4(e4);
              else
                for (let s4 = 0;s4 < e4.length; s4++) {
                  const i3 = e4[s4];
                  i3 && t4(i3);
                }
            })(this._listeners, (t4) => this._asyncDeliveryQueue.push([t4.value, e3]));this._asyncDeliveryQueue.size > 0 && !t3.isCancellationRequested; ) {
              const [e4, r3] = this._asyncDeliveryQueue.shift(), n3 = [], o2 = { ...r3, token: t3, waitUntil: (t4) => {
                if (Object.isFrozen(n3))
                  throw new Error("waitUntil can NOT be called asynchronous");
                s3 && (t4 = s3(t4, e4)), n3.push(t4);
              } };
              try {
                e4(o2);
              } catch (e5) {
                (0, i2.onUnexpectedError)(e5);
                continue;
              }
              Object.freeze(n3), await Promise.allSettled(n3).then((e5) => {
                for (const t4 of e5)
                  t4.status === "rejected" && (0, i2.onUnexpectedError)(t4.reason);
              });
            }
        }
      };

      class b extends v {
        get isPaused() {
          return this._isPaused !== 0;
        }
        constructor(e3) {
          super(e3), this._isPaused = 0, this._eventQueue = new o.LinkedList, this._mergeFn = e3?.merge;
        }
        pause() {
          this._isPaused++;
        }
        resume() {
          if (this._isPaused !== 0 && --this._isPaused == 0)
            if (this._mergeFn) {
              if (this._eventQueue.size > 0) {
                const e3 = Array.from(this._eventQueue);
                this._eventQueue.clear(), super.fire(this._mergeFn(e3));
              }
            } else
              for (;!this._isPaused && this._eventQueue.size !== 0; )
                super.fire(this._eventQueue.shift());
        }
        fire(e3) {
          this._size && (this._isPaused !== 0 ? this._eventQueue.push(e3) : super.fire(e3));
        }
      }
      t2.PauseableEmitter = b, t2.DebounceEmitter = class extends b {
        constructor(e3) {
          super(e3), this._delay = e3.delay ?? 100;
        }
        fire(e3) {
          this._handle || (this.pause(), this._handle = setTimeout(() => {
            this._handle = undefined, this.resume();
          }, this._delay)), super.fire(e3);
        }
      }, t2.MicrotaskEmitter = class extends v {
        constructor(e3) {
          super(e3), this._queuedEvents = [], this._mergeFn = e3?.merge;
        }
        fire(e3) {
          this.hasListeners() && (this._queuedEvents.push(e3), this._queuedEvents.length === 1 && queueMicrotask(() => {
            this._mergeFn ? super.fire(this._mergeFn(this._queuedEvents)) : this._queuedEvents.forEach((e4) => super.fire(e4)), this._queuedEvents = [];
          }));
        }
      };

      class S {
        constructor() {
          this.hasListeners = false, this.events = [], this.emitter = new v({ onWillAddFirstListener: () => this.onFirstListenerAdd(), onDidRemoveLastListener: () => this.onLastListenerRemove() });
        }
        get event() {
          return this.emitter.event;
        }
        add(e3) {
          const t3 = { event: e3, listener: null };
          return this.events.push(t3), this.hasListeners && this.hook(t3), (0, n2.toDisposable)((0, r2.createSingleCallFunction)(() => {
            this.hasListeners && this.unhook(t3);
            const e4 = this.events.indexOf(t3);
            this.events.splice(e4, 1);
          }));
        }
        onFirstListenerAdd() {
          this.hasListeners = true, this.events.forEach((e3) => this.hook(e3));
        }
        onLastListenerRemove() {
          this.hasListeners = false, this.events.forEach((e3) => this.unhook(e3));
        }
        hook(e3) {
          e3.listener = e3.event((e4) => this.emitter.fire(e4));
        }
        unhook(e3) {
          e3.listener?.dispose(), e3.listener = null;
        }
        dispose() {
          this.emitter.dispose();
          for (const e3 of this.events)
            e3.listener?.dispose();
          this.events = [];
        }
      }
      t2.EventMultiplexer = S, t2.DynamicListEventMultiplexer = class {
        constructor(e3, t3, s3, i3) {
          this._store = new n2.DisposableStore;
          const r3 = this._store.add(new S), o2 = this._store.add(new n2.DisposableMap);
          function a2(e4) {
            o2.set(e4, r3.add(i3(e4)));
          }
          for (const t4 of e3)
            a2(t4);
          this._store.add(t3((e4) => {
            a2(e4);
          })), this._store.add(s3((e4) => {
            o2.deleteAndDispose(e4);
          })), this.event = r3.event;
        }
        dispose() {
          this._store.dispose();
        }
      }, t2.EventBufferer = class {
        constructor() {
          this.data = [];
        }
        wrapEvent(e3, t3, s3) {
          return (i3, r3, n3) => e3((e4) => {
            const n4 = this.data[this.data.length - 1];
            if (!t3)
              return void (n4 ? n4.buffers.push(() => i3.call(r3, e4)) : i3.call(r3, e4));
            const o2 = n4;
            o2 ? (o2.items ??= [], o2.items.push(e4), o2.buffers.length === 0 && n4.buffers.push(() => {
              o2.reducedResult ??= s3 ? o2.items.reduce(t3, s3) : o2.items.reduce(t3), i3.call(r3, o2.reducedResult);
            })) : i3.call(r3, t3(s3, e4));
          }, undefined, n3);
        }
        bufferEvents(e3) {
          const t3 = { buffers: new Array };
          this.data.push(t3);
          const s3 = e3();
          return this.data.pop(), t3.buffers.forEach((e4) => e4()), s3;
        }
      }, t2.Relay = class {
        constructor() {
          this.listening = false, this.inputEvent = h.None, this.inputEventListener = n2.Disposable.None, this.emitter = new v({ onDidAddFirstListener: () => {
            this.listening = true, this.inputEventListener = this.inputEvent(this.emitter.fire, this.emitter);
          }, onDidRemoveLastListener: () => {
            this.listening = false, this.inputEventListener.dispose();
          } }), this.event = this.emitter.event;
        }
        set input(e3) {
          this.inputEvent = e3, this.listening && (this.inputEventListener.dispose(), this.inputEventListener = e3(this.emitter.fire, this.emitter));
        }
        dispose() {
          this.inputEventListener.dispose(), this.emitter.dispose();
        }
      }, t2.ValueWithChangeEvent = class {
        static const(e3) {
          return new y(e3);
        }
        constructor(e3) {
          this._value = e3, this._onDidChange = new v, this.onDidChange = this._onDidChange.event;
        }
        get value() {
          return this._value;
        }
        set value(e3) {
          e3 !== this._value && (this._value = e3, this._onDidChange.fire(undefined));
        }
      };

      class y {
        constructor(e3) {
          this.value = e3, this.onDidChange = h.None;
        }
      }
    }, 8841: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.createSingleCallFunction = function(e3, t3) {
        const s2 = this;
        let i2, r2 = false;
        return function() {
          if (r2)
            return i2;
          if (r2 = true, t3)
            try {
              i2 = e3.apply(s2, arguments);
            } finally {
              t3();
            }
          else
            i2 = e3.apply(s2, arguments);
          return i2;
        };
      };
    }, 4218: (e2, t2) => {
      var s2;
      Object.defineProperty(t2, "__esModule", { value: true }), t2.Iterable = undefined, function(e3) {
        function t3(e4) {
          return e4 && typeof e4 == "object" && typeof e4[Symbol.iterator] == "function";
        }
        e3.is = t3;
        const s3 = Object.freeze([]);
        function* i2(e4) {
          yield e4;
        }
        e3.empty = function() {
          return s3;
        }, e3.single = i2, e3.wrap = function(e4) {
          return t3(e4) ? e4 : i2(e4);
        }, e3.from = function(e4) {
          return e4 || s3;
        }, e3.reverse = function* (e4) {
          for (let t4 = e4.length - 1;t4 >= 0; t4--)
            yield e4[t4];
        }, e3.isEmpty = function(e4) {
          return !e4 || e4[Symbol.iterator]().next().done === true;
        }, e3.first = function(e4) {
          return e4[Symbol.iterator]().next().value;
        }, e3.some = function(e4, t4) {
          let s4 = 0;
          for (const i3 of e4)
            if (t4(i3, s4++))
              return true;
          return false;
        }, e3.find = function(e4, t4) {
          for (const s4 of e4)
            if (t4(s4))
              return s4;
        }, e3.filter = function* (e4, t4) {
          for (const s4 of e4)
            t4(s4) && (yield s4);
        }, e3.map = function* (e4, t4) {
          let s4 = 0;
          for (const i3 of e4)
            yield t4(i3, s4++);
        }, e3.flatMap = function* (e4, t4) {
          let s4 = 0;
          for (const i3 of e4)
            yield* t4(i3, s4++);
        }, e3.concat = function* (...e4) {
          for (const t4 of e4)
            yield* t4;
        }, e3.reduce = function(e4, t4, s4) {
          let i3 = s4;
          for (const s5 of e4)
            i3 = t4(i3, s5);
          return i3;
        }, e3.slice = function* (e4, t4, s4 = e4.length) {
          for (t4 < 0 && (t4 += e4.length), s4 < 0 ? s4 += e4.length : s4 > e4.length && (s4 = e4.length);t4 < s4; t4++)
            yield e4[t4];
        }, e3.consume = function(t4, s4 = Number.POSITIVE_INFINITY) {
          const i3 = [];
          if (s4 === 0)
            return [i3, t4];
          const r2 = t4[Symbol.iterator]();
          for (let t5 = 0;t5 < s4; t5++) {
            const t6 = r2.next();
            if (t6.done)
              return [i3, e3.empty()];
            i3.push(t6.value);
          }
          return [i3, { [Symbol.iterator]: () => r2 }];
        }, e3.asyncToArray = async function(e4) {
          const t4 = [];
          for await (const s4 of e4)
            t4.push(s4);
          return Promise.resolve(t4);
        };
      }(s2 || (t2.Iterable = s2 = {}));
    }, 7150: (e2, t2, s2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.DisposableMap = t2.ImmortalReference = t2.AsyncReferenceCollection = t2.ReferenceCollection = t2.SafeDisposable = t2.RefCountedDisposable = t2.MandatoryMutableDisposable = t2.MutableDisposable = t2.Disposable = t2.DisposableStore = t2.DisposableTracker = undefined, t2.setDisposableTracker = function(e3) {
        h = e3;
      }, t2.trackDisposable = l, t2.markAsDisposed = u, t2.markAsSingleton = function(e3) {
        return h?.markAsSingleton(e3), e3;
      }, t2.isDisposable = f, t2.dispose = _, t2.disposeIfDisposable = function(e3) {
        for (const t3 of e3)
          f(t3) && t3.dispose();
        return [];
      }, t2.combinedDisposable = function(...e3) {
        const t3 = p(() => _(e3));
        return function(e4, t4) {
          if (h)
            for (const s3 of e4)
              h.setParent(s3, t4);
        }(e3, t3), t3;
      }, t2.toDisposable = p, t2.disposeOnReturn = function(e3) {
        const t3 = new g;
        try {
          e3(t3);
        } finally {
          t3.dispose();
        }
      };
      const i2 = s2(3058), r2 = s2(9087), n2 = s2(2608), o = s2(8841), a = s2(4218);
      let h = null;

      class c {
        constructor() {
          this.livingDisposables = new Map;
        }
        static {
          this.idx = 0;
        }
        getDisposableData(e3) {
          let t3 = this.livingDisposables.get(e3);
          return t3 || (t3 = { parent: null, source: null, isSingleton: false, value: e3, idx: c.idx++ }, this.livingDisposables.set(e3, t3)), t3;
        }
        trackDisposable(e3) {
          const t3 = this.getDisposableData(e3);
          t3.source || (t3.source = new Error().stack);
        }
        setParent(e3, t3) {
          this.getDisposableData(e3).parent = t3;
        }
        markAsDisposed(e3) {
          this.livingDisposables.delete(e3);
        }
        markAsSingleton(e3) {
          this.getDisposableData(e3).isSingleton = true;
        }
        getRootParent(e3, t3) {
          const s3 = t3.get(e3);
          if (s3)
            return s3;
          const i3 = e3.parent ? this.getRootParent(this.getDisposableData(e3.parent), t3) : e3;
          return t3.set(e3, i3), i3;
        }
        getTrackedDisposables() {
          const e3 = new Map;
          return [...this.livingDisposables.entries()].filter(([, t3]) => t3.source !== null && !this.getRootParent(t3, e3).isSingleton).flatMap(([e4]) => e4);
        }
        computeLeakingDisposables(e3 = 10, t3) {
          let s3;
          if (t3)
            s3 = t3;
          else {
            const e4 = new Map, t4 = [...this.livingDisposables.values()].filter((t5) => t5.source !== null && !this.getRootParent(t5, e4).isSingleton);
            if (t4.length === 0)
              return;
            const i3 = new Set(t4.map((e5) => e5.value));
            if (s3 = t4.filter((e5) => !(e5.parent && i3.has(e5.parent))), s3.length === 0)
              throw new Error("There are cyclic diposable chains!");
          }
          if (!s3)
            return;
          function o2(e4) {
            const t4 = e4.source.split(`
`).map((e5) => e5.trim().replace("at ", "")).filter((e5) => e5 !== "");
            return function(e5, t5) {
              for (;e5.length > 0 && t5.some((t6) => typeof t6 == "string" ? t6 === e5[0] : e5[0].match(t6)); )
                e5.shift();
            }(t4, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), t4.reverse();
          }
          const a2 = new n2.SetMap;
          for (const e4 of s3) {
            const t4 = o2(e4);
            for (let s4 = 0;s4 <= t4.length; s4++)
              a2.add(t4.slice(0, s4).join(`
`), e4);
          }
          s3.sort((0, i2.compareBy)((e4) => e4.idx, i2.numberComparator));
          let h2 = "", c2 = 0;
          for (const t4 of s3.slice(0, e3)) {
            c2++;
            const e4 = o2(t4), i3 = [];
            for (let t5 = 0;t5 < e4.length; t5++) {
              let n3 = e4[t5];
              n3 = `(shared with ${a2.get(e4.slice(0, t5 + 1).join(`
`)).size}/${s3.length} leaks) at ${n3}`;
              const h3 = a2.get(e4.slice(0, t5).join(`
`)), c3 = (0, r2.groupBy)([...h3].map((e5) => o2(e5)[t5]), (e5) => e5);
              delete c3[e4[t5]];
              for (const [e5, t6] of Object.entries(c3))
                i3.unshift(`    - stacktraces of ${t6.length} other leaks continue with ${e5}`);
              i3.unshift(n3);
            }
            h2 += `


==================== Leaking disposable ${c2}/${s3.length}: ${t4.value.constructor.name} ====================
${i3.join(`
`)}
============================================================

`;
          }
          return s3.length > e3 && (h2 += `


... and ${s3.length - e3} more leaking disposables

`), { leaks: s3, details: h2 };
        }
      }
      function l(e3) {
        return h?.trackDisposable(e3), e3;
      }
      function u(e3) {
        h?.markAsDisposed(e3);
      }
      function d(e3, t3) {
        h?.setParent(e3, t3);
      }
      function f(e3) {
        return typeof e3 == "object" && e3 !== null && typeof e3.dispose == "function" && e3.dispose.length === 0;
      }
      function _(e3) {
        if (a.Iterable.is(e3)) {
          const t3 = [];
          for (const s3 of e3)
            if (s3)
              try {
                s3.dispose();
              } catch (e4) {
                t3.push(e4);
              }
          if (t3.length === 1)
            throw t3[0];
          if (t3.length > 1)
            throw new AggregateError(t3, "Encountered errors while disposing of store");
          return Array.isArray(e3) ? [] : e3;
        }
        if (e3)
          return e3.dispose(), e3;
      }
      function p(e3) {
        const t3 = l({ dispose: (0, o.createSingleCallFunction)(() => {
          u(t3), e3();
        }) });
        return t3;
      }
      t2.DisposableTracker = c;

      class g {
        static {
          this.DISABLE_DISPOSED_WARNING = false;
        }
        constructor() {
          this._toDispose = new Set, this._isDisposed = false, l(this);
        }
        dispose() {
          this._isDisposed || (u(this), this._isDisposed = true, this.clear());
        }
        get isDisposed() {
          return this._isDisposed;
        }
        clear() {
          if (this._toDispose.size !== 0)
            try {
              _(this._toDispose);
            } finally {
              this._toDispose.clear();
            }
        }
        add(e3) {
          if (!e3)
            return e3;
          if (e3 === this)
            throw new Error("Cannot register a disposable on itself!");
          return d(e3, this), this._isDisposed ? g.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(e3), e3;
        }
        delete(e3) {
          if (e3) {
            if (e3 === this)
              throw new Error("Cannot dispose a disposable on itself!");
            this._toDispose.delete(e3), e3.dispose();
          }
        }
        deleteAndLeak(e3) {
          e3 && this._toDispose.has(e3) && (this._toDispose.delete(e3), d(e3, null));
        }
      }
      t2.DisposableStore = g;

      class v {
        static {
          this.None = Object.freeze({ dispose() {} });
        }
        constructor() {
          this._store = new g, l(this), d(this._store, this);
        }
        dispose() {
          u(this), this._store.dispose();
        }
        _register(e3) {
          if (e3 === this)
            throw new Error("Cannot register a disposable on itself!");
          return this._store.add(e3);
        }
      }
      t2.Disposable = v;

      class m {
        constructor() {
          this._isDisposed = false, l(this);
        }
        get value() {
          return this._isDisposed ? undefined : this._value;
        }
        set value(e3) {
          this._isDisposed || e3 === this._value || (this._value?.dispose(), e3 && d(e3, this), this._value = e3);
        }
        clear() {
          this.value = undefined;
        }
        dispose() {
          this._isDisposed = true, u(this), this._value?.dispose(), this._value = undefined;
        }
        clearAndLeak() {
          const e3 = this._value;
          return this._value = undefined, e3 && d(e3, null), e3;
        }
      }
      t2.MutableDisposable = m, t2.MandatoryMutableDisposable = class {
        constructor(e3) {
          this._disposable = new m, this._isDisposed = false, this._disposable.value = e3;
        }
        get value() {
          return this._disposable.value;
        }
        set value(e3) {
          this._isDisposed || e3 === this._disposable.value || (this._disposable.value = e3);
        }
        dispose() {
          this._isDisposed = true, this._disposable.dispose();
        }
      }, t2.RefCountedDisposable = class {
        constructor(e3) {
          this._disposable = e3, this._counter = 1;
        }
        acquire() {
          return this._counter++, this;
        }
        release() {
          return --this._counter == 0 && this._disposable.dispose(), this;
        }
      }, t2.SafeDisposable = class {
        constructor() {
          this.dispose = () => {}, this.unset = () => {}, this.isset = () => false, l(this);
        }
        set(e3) {
          let t3 = e3;
          return this.unset = () => t3 = undefined, this.isset = () => t3 !== undefined, this.dispose = () => {
            t3 && (t3(), t3 = undefined, u(this));
          }, this;
        }
      }, t2.ReferenceCollection = class {
        constructor() {
          this.references = new Map;
        }
        acquire(e3, ...t3) {
          let s3 = this.references.get(e3);
          s3 || (s3 = { counter: 0, object: this.createReferencedObject(e3, ...t3) }, this.references.set(e3, s3));
          const { object: i3 } = s3, r3 = (0, o.createSingleCallFunction)(() => {
            --s3.counter == 0 && (this.destroyReferencedObject(e3, s3.object), this.references.delete(e3));
          });
          return s3.counter++, { object: i3, dispose: r3 };
        }
      }, t2.AsyncReferenceCollection = class {
        constructor(e3) {
          this.referenceCollection = e3;
        }
        async acquire(e3, ...t3) {
          const s3 = this.referenceCollection.acquire(e3, ...t3);
          try {
            return { object: await s3.object, dispose: () => s3.dispose() };
          } catch (e4) {
            throw s3.dispose(), e4;
          }
        }
      }, t2.ImmortalReference = class {
        constructor(e3) {
          this.object = e3;
        }
        dispose() {}
      };

      class b {
        constructor() {
          this._store = new Map, this._isDisposed = false, l(this);
        }
        dispose() {
          u(this), this._isDisposed = true, this.clearAndDisposeAll();
        }
        clearAndDisposeAll() {
          if (this._store.size)
            try {
              _(this._store.values());
            } finally {
              this._store.clear();
            }
        }
        has(e3) {
          return this._store.has(e3);
        }
        get size() {
          return this._store.size;
        }
        get(e3) {
          return this._store.get(e3);
        }
        set(e3, t3, s3 = false) {
          this._isDisposed && console.warn(new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!").stack), s3 || this._store.get(e3)?.dispose(), this._store.set(e3, t3);
        }
        deleteAndDispose(e3) {
          this._store.get(e3)?.dispose(), this._store.delete(e3);
        }
        deleteAndLeak(e3) {
          const t3 = this._store.get(e3);
          return this._store.delete(e3), t3;
        }
        keys() {
          return this._store.keys();
        }
        values() {
          return this._store.values();
        }
        [Symbol.iterator]() {
          return this._store[Symbol.iterator]();
        }
      }
      t2.DisposableMap = b;
    }, 6317: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.LinkedList = undefined;

      class s2 {
        static {
          this.Undefined = new s2(undefined);
        }
        constructor(e3) {
          this.element = e3, this.next = s2.Undefined, this.prev = s2.Undefined;
        }
      }

      class i2 {
        constructor() {
          this._first = s2.Undefined, this._last = s2.Undefined, this._size = 0;
        }
        get size() {
          return this._size;
        }
        isEmpty() {
          return this._first === s2.Undefined;
        }
        clear() {
          let e3 = this._first;
          for (;e3 !== s2.Undefined; ) {
            const t3 = e3.next;
            e3.prev = s2.Undefined, e3.next = s2.Undefined, e3 = t3;
          }
          this._first = s2.Undefined, this._last = s2.Undefined, this._size = 0;
        }
        unshift(e3) {
          return this._insert(e3, false);
        }
        push(e3) {
          return this._insert(e3, true);
        }
        _insert(e3, t3) {
          const i3 = new s2(e3);
          if (this._first === s2.Undefined)
            this._first = i3, this._last = i3;
          else if (t3) {
            const e4 = this._last;
            this._last = i3, i3.prev = e4, e4.next = i3;
          } else {
            const e4 = this._first;
            this._first = i3, i3.next = e4, e4.prev = i3;
          }
          this._size += 1;
          let r2 = false;
          return () => {
            r2 || (r2 = true, this._remove(i3));
          };
        }
        shift() {
          if (this._first !== s2.Undefined) {
            const e3 = this._first.element;
            return this._remove(this._first), e3;
          }
        }
        pop() {
          if (this._last !== s2.Undefined) {
            const e3 = this._last.element;
            return this._remove(this._last), e3;
          }
        }
        _remove(e3) {
          if (e3.prev !== s2.Undefined && e3.next !== s2.Undefined) {
            const t3 = e3.prev;
            t3.next = e3.next, e3.next.prev = t3;
          } else
            e3.prev === s2.Undefined && e3.next === s2.Undefined ? (this._first = s2.Undefined, this._last = s2.Undefined) : e3.next === s2.Undefined ? (this._last = this._last.prev, this._last.next = s2.Undefined) : e3.prev === s2.Undefined && (this._first = this._first.next, this._first.prev = s2.Undefined);
          this._size -= 1;
        }
        *[Symbol.iterator]() {
          let e3 = this._first;
          for (;e3 !== s2.Undefined; )
            yield e3.element, e3 = e3.next;
        }
      }
      t2.LinkedList = i2;
    }, 2608: (e2, t2) => {
      var s2;
      Object.defineProperty(t2, "__esModule", { value: true }), t2.SetMap = t2.BidirectionalMap = t2.CounterSet = t2.Touch = undefined, t2.getOrSet = function(e3, t3, s3) {
        let i2 = e3.get(t3);
        return i2 === undefined && (i2 = s3, e3.set(t3, i2)), i2;
      }, t2.mapToString = function(e3) {
        const t3 = [];
        return e3.forEach((e4, s3) => {
          t3.push(`${s3} => ${e4}`);
        }), `Map(${e3.size}) {${t3.join(", ")}}`;
      }, t2.setToString = function(e3) {
        const t3 = [];
        return e3.forEach((e4) => {
          t3.push(e4);
        }), `Set(${e3.size}) {${t3.join(", ")}}`;
      }, t2.mapsStrictEqualIgnoreOrder = function(e3, t3) {
        if (e3 === t3)
          return true;
        if (e3.size !== t3.size)
          return false;
        for (const [s3, i2] of e3)
          if (!t3.has(s3) || t3.get(s3) !== i2)
            return false;
        for (const [s3] of t3)
          if (!e3.has(s3))
            return false;
        return true;
      }, function(e3) {
        e3[e3.None = 0] = "None", e3[e3.AsOld = 1] = "AsOld", e3[e3.AsNew = 2] = "AsNew";
      }(s2 || (t2.Touch = s2 = {})), t2.CounterSet = class {
        constructor() {
          this.map = new Map;
        }
        add(e3) {
          return this.map.set(e3, (this.map.get(e3) || 0) + 1), this;
        }
        delete(e3) {
          let t3 = this.map.get(e3) || 0;
          return t3 !== 0 && (t3--, t3 === 0 ? this.map.delete(e3) : this.map.set(e3, t3), true);
        }
        has(e3) {
          return this.map.has(e3);
        }
      }, t2.BidirectionalMap = class {
        constructor(e3) {
          if (this._m1 = new Map, this._m2 = new Map, e3)
            for (const [t3, s3] of e3)
              this.set(t3, s3);
        }
        clear() {
          this._m1.clear(), this._m2.clear();
        }
        set(e3, t3) {
          this._m1.set(e3, t3), this._m2.set(t3, e3);
        }
        get(e3) {
          return this._m1.get(e3);
        }
        getKey(e3) {
          return this._m2.get(e3);
        }
        delete(e3) {
          const t3 = this._m1.get(e3);
          return t3 !== undefined && (this._m1.delete(e3), this._m2.delete(t3), true);
        }
        forEach(e3, t3) {
          this._m1.forEach((s3, i2) => {
            e3.call(t3, s3, i2, this);
          });
        }
        keys() {
          return this._m1.keys();
        }
        values() {
          return this._m1.values();
        }
      }, t2.SetMap = class {
        constructor() {
          this.map = new Map;
        }
        add(e3, t3) {
          let s3 = this.map.get(e3);
          s3 || (s3 = new Set, this.map.set(e3, s3)), s3.add(t3);
        }
        delete(e3, t3) {
          const s3 = this.map.get(e3);
          s3 && (s3.delete(t3), s3.size === 0 && this.map.delete(e3));
        }
        forEach(e3, t3) {
          const s3 = this.map.get(e3);
          s3 && s3.forEach(t3);
        }
        get(e3) {
          return this.map.get(e3) || new Set;
        }
      };
    }, 9725: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.StopWatch = undefined;
      const s2 = globalThis.performance && typeof globalThis.performance.now == "function";

      class i2 {
        static create(e3) {
          return new i2(e3);
        }
        constructor(e3) {
          this._now = s2 && e3 === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
        }
        stop() {
          this._stopTime = this._now();
        }
        reset() {
          this._startTime = this._now(), this._stopTime = -1;
        }
        elapsed() {
          return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime;
        }
      }
      t2.StopWatch = i2;
    } }, t = {};
    function s(i2) {
      var r2 = t[i2];
      if (r2 !== undefined)
        return r2.exports;
      var n2 = t[i2] = { exports: {} };
      return e[i2].call(n2.exports, n2, n2.exports, s), n2.exports;
    }
    var i = {};
    (() => {
      var e2 = i;
      Object.defineProperty(e2, "__esModule", { value: true }), e2.Terminal = undefined;
      const t2 = s(5101), r2 = s(6097), n2 = s(4335), o = s(5856), a = s(3027), h = s(7150), c = ["cols", "rows"];

      class l extends h.Disposable {
        constructor(e3) {
          super(), this._core = this._register(new o.Terminal(e3)), this._addonManager = this._register(new a.AddonManager), this._publicOptions = { ...this._core.options };
          const t3 = (e4) => this._core.options[e4], s2 = (e4, t4) => {
            this._checkReadonlyOptions(e4), this._core.options[e4] = t4;
          };
          for (const e4 in this._core.options) {
            Object.defineProperty(this._publicOptions, e4, { get: () => this._core.options[e4], set: (t4) => {
              this._checkReadonlyOptions(e4), this._core.options[e4] = t4;
            } });
            const i2 = { get: t3.bind(this, e4), set: s2.bind(this, e4) };
            Object.defineProperty(this._publicOptions, e4, i2);
          }
        }
        _checkReadonlyOptions(e3) {
          if (c.includes(e3))
            throw new Error(`Option "${e3}" can only be set in the constructor`);
        }
        _checkProposedApi() {
          if (!this._core.optionsService.options.allowProposedApi)
            throw new Error("You must set the allowProposedApi option to true to use proposed API");
        }
        get onBell() {
          return this._core.onBell;
        }
        get onBinary() {
          return this._core.onBinary;
        }
        get onCursorMove() {
          return this._core.onCursorMove;
        }
        get onData() {
          return this._core.onData;
        }
        get onLineFeed() {
          return this._core.onLineFeed;
        }
        get onResize() {
          return this._core.onResize;
        }
        get onScroll() {
          return this._core.onScroll;
        }
        get onTitleChange() {
          return this._core.onTitleChange;
        }
        get onWriteParsed() {
          return this._core.onWriteParsed;
        }
        get parser() {
          return this._checkProposedApi(), this._parser || (this._parser = new r2.ParserApi(this._core)), this._parser;
        }
        get unicode() {
          return this._checkProposedApi(), new n2.UnicodeApi(this._core);
        }
        get rows() {
          return this._core.rows;
        }
        get cols() {
          return this._core.cols;
        }
        get buffer() {
          return this._checkProposedApi(), this._buffer || (this._buffer = this._register(new t2.BufferNamespaceApi(this._core))), this._buffer;
        }
        get markers() {
          return this._checkProposedApi(), this._core.markers;
        }
        get modes() {
          const e3 = this._core.coreService.decPrivateModes;
          let t3 = "none";
          switch (this._core.coreMouseService.activeProtocol) {
            case "X10":
              t3 = "x10";
              break;
            case "VT200":
              t3 = "vt200";
              break;
            case "DRAG":
              t3 = "drag";
              break;
            case "ANY":
              t3 = "any";
          }
          return { applicationCursorKeysMode: e3.applicationCursorKeys, applicationKeypadMode: e3.applicationKeypad, bracketedPasteMode: e3.bracketedPasteMode, insertMode: this._core.coreService.modes.insertMode, mouseTrackingMode: t3, originMode: e3.origin, reverseWraparoundMode: e3.reverseWraparound, sendFocusMode: e3.sendFocus, synchronizedOutputMode: e3.synchronizedOutput, wraparoundMode: e3.wraparound };
        }
        get options() {
          return this._publicOptions;
        }
        set options(e3) {
          for (const t3 in e3)
            this._publicOptions[t3] = e3[t3];
        }
        input(e3, t3 = true) {
          this._core.input(e3, t3);
        }
        resize(e3, t3) {
          this._verifyIntegers(e3, t3), this._core.resize(e3, t3);
        }
        registerMarker(e3 = 0) {
          return this._checkProposedApi(), this._verifyIntegers(e3), this._core.addMarker(e3);
        }
        addMarker(e3) {
          return this.registerMarker(e3);
        }
        dispose() {
          super.dispose();
        }
        scrollLines(e3) {
          this._verifyIntegers(e3), this._core.scrollLines(e3);
        }
        scrollPages(e3) {
          this._verifyIntegers(e3), this._core.scrollPages(e3);
        }
        scrollToTop() {
          this._core.scrollToTop();
        }
        scrollToBottom() {
          this._core.scrollToBottom();
        }
        scrollToLine(e3) {
          this._verifyIntegers(e3), this._core.scrollToLine(e3);
        }
        clear() {
          this._core.clear();
        }
        write(e3, t3) {
          this._core.write(e3, t3);
        }
        writeln(e3, t3) {
          this._core.write(e3), this._core.write(`\r
`, t3);
        }
        reset() {
          this._core.reset();
        }
        loadAddon(e3) {
          this._addonManager.loadAddon(this, e3);
        }
        _verifyIntegers(...e3) {
          for (const t3 of e3)
            if (t3 === 1 / 0 || isNaN(t3) || t3 % 1 != 0)
              throw new Error("This API only accepts integers");
        }
      }
      e2.Terminal = l;
    })();
    var r = exports;
    for (var n in i)
      r[n] = i[n];
    i.__esModule && Object.defineProperty(r, "__esModule", { value: true });
  })();
});

// src/ui.ts
var import_neo_blessed = __toESM(require_blessed(), 1);

// src/theme.ts
var C = {
  bg: "#1e1e2e",
  surface: "#313244",
  overlay: "#45475a",
  text: "#cdd6f4",
  subtext: "#a6adc8",
  dim: "#585b70",
  green: "#a6e3a1",
  yellow: "#f9e2af",
  mauve: "#cba6f7",
  red: "#f38ba8",
  blue: "#89b4fa",
  peach: "#fab387"
};
function fg(color, text) {
  return `{${color}-fg}${text}{/${color}-fg}`;
}
function selLine(text) {
  return `{${C.blue}-bg}{${C.bg}-fg}${text}{/${C.bg}-fg}{/${C.blue}-bg}`;
}
function statusLine(done, partial, name) {
  if (done)
    return fg(C.green, `\u2713 ${name}`);
  if (partial)
    return fg(C.yellow, `\u25C6 ${name}`);
  return fg(C.text, `\u25CB ${name}`);
}
function progressBar(done, total, width = 8) {
  if (total === 0)
    return fg(C.dim, `${"\u2591".repeat(width)} 0/0`);
  const filled = Math.round(done / total * width);
  const empty = width - filled;
  return fg(C.green, "\u2588".repeat(filled)) + fg(C.dim, `${"\u2591".repeat(empty)} ${done}/${total}`);
}

// src/ui.ts
function createScreen() {
  const screen = import_neo_blessed.default.screen({
    smartCSR: true,
    title: "Quest Log",
    fullUnicode: true,
    forceUnicode: true,
    tags: true,
    style: { bg: C.bg }
  });
  return screen;
}
function createHeader(screen) {
  return import_neo_blessed.default.box({
    parent: screen,
    top: 0,
    left: 0,
    width: "100%",
    height: 1,
    tags: true,
    style: { bg: C.surface, fg: C.text }
  });
}
function createStatusBar(screen) {
  return import_neo_blessed.default.box({
    parent: screen,
    bottom: 0,
    left: 0,
    width: "100%",
    height: 1,
    tags: true,
    content: fg(C.subtext, " h/l=panel | j/k=move | enter=launch | space=toggle | a=add | d=del | ?=help | q=quit"),
    style: { bg: C.surface, fg: C.dim }
  });
}
function createPanel(opts) {
  return import_neo_blessed.default.box({
    parent: opts.parent,
    top: opts.top,
    left: opts.left,
    width: opts.width,
    height: opts.height,
    tags: true,
    scrollable: true,
    alwaysScroll: true,
    mouse: false,
    label: ` ${opts.label} `,
    border: { type: "line" },
    style: {
      bg: C.surface,
      fg: C.text,
      border: { fg: C.dim },
      label: { fg: C.dim },
      scrollbar: { bg: C.overlay }
    },
    scrollbar: { ch: "\u2590", style: { bg: C.overlay } }
  });
}
function createTerminalPanel(screen) {
  return import_neo_blessed.default.box({
    parent: screen,
    top: 1,
    left: "30%",
    width: "70%",
    height: "100%-2",
    tags: true,
    scrollable: true,
    alwaysScroll: true,
    mouse: false,
    label: " Terminal ",
    border: { type: "line" },
    style: {
      bg: C.bg,
      fg: C.text,
      border: { fg: C.dim },
      label: { fg: C.dim },
      scrollbar: { bg: C.overlay }
    },
    scrollbar: { ch: "\u2590", style: { bg: C.overlay } }
  });
}
function setFocused(panel, focused) {
  const color = focused ? C.mauve : C.dim;
  panel.style.border = { fg: color };
  panel.style.label = { fg: color };
}

// src/panels.ts
import { watch, readFileSync as readFileSync3, existsSync as existsSync6 } from "fs";
import { execFileSync as execFileSync2 } from "child_process";

// src/modal.ts
var import_neo_blessed2 = __toESM(require_blessed(), 1);

// src/pty.ts
var import_headless = __toESM(require_xterm_headless(), 1);

// node_modules/@xterm/addon-serialize/lib/addon-serialize.mjs
var m = 0;
var p = 0;
var g = 0;
var b = 0;
var I;
((r) => {
  function u(t, a, s, i) {
    return i !== undefined ? `#${B(t)}${B(a)}${B(s)}${B(i)}` : `#${B(t)}${B(a)}${B(s)}`;
  }
  r.toCss = u;
  function o(t, a, s, i = 255) {
    return (t << 24 | a << 16 | s << 8 | i) >>> 0;
  }
  r.toRgba = o;
  function e(t, a, s, i) {
    return { css: r.toCss(t, a, s, i), rgba: r.toRgba(t, a, s, i) };
  }
  r.toColor = e;
})(I ||= {});
var $;
((i) => {
  function u(n, l) {
    if (b = (l.rgba & 255) / 255, b === 1)
      return { css: l.css, rgba: l.rgba };
    let f = l.rgba >> 24 & 255, d = l.rgba >> 16 & 255, c = l.rgba >> 8 & 255, C2 = n.rgba >> 24 & 255, h = n.rgba >> 16 & 255, x = n.rgba >> 8 & 255;
    m = C2 + Math.round((f - C2) * b), p = h + Math.round((d - h) * b), g = x + Math.round((c - x) * b);
    let R = I.toCss(m, p, g), L = I.toRgba(m, p, g);
    return { css: R, rgba: L };
  }
  i.blend = u;
  function o(n) {
    return (n.rgba & 255) === 255;
  }
  i.isOpaque = o;
  function e(n, l, f) {
    let d = y.ensureContrastRatio(n.rgba, l.rgba, f);
    if (d)
      return I.toColor(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255);
  }
  i.ensureContrastRatio = e;
  function r(n) {
    let l = (n.rgba | 255) >>> 0;
    return [m, p, g] = y.toChannels(l), { css: I.toCss(m, p, g), rgba: l };
  }
  i.opaque = r;
  function t(n, l) {
    return b = Math.round(l * 255), [m, p, g] = y.toChannels(n.rgba), { css: I.toCss(m, p, g, b), rgba: I.toRgba(m, p, g, b) };
  }
  i.opacity = t;
  function a(n, l) {
    return b = n.rgba & 255, t(n, b * l / 255);
  }
  i.multiplyOpacity = a;
  function s(n) {
    return [n.rgba >> 24 & 255, n.rgba >> 16 & 255, n.rgba >> 8 & 255];
  }
  i.toColorRGB = s;
})($ ||= {});
var _;
((r) => {
  let u, o;
  try {
    let t = document.createElement("canvas");
    t.width = 1, t.height = 1;
    let a = t.getContext("2d", { willReadFrequently: true });
    a && (u = a, u.globalCompositeOperation = "copy", o = u.createLinearGradient(0, 0, 1, 1));
  } catch {}
  function e(t) {
    if (t.match(/#[\da-f]{3,8}/i))
      switch (t.length) {
        case 4:
          return m = parseInt(t.slice(1, 2).repeat(2), 16), p = parseInt(t.slice(2, 3).repeat(2), 16), g = parseInt(t.slice(3, 4).repeat(2), 16), I.toColor(m, p, g);
        case 5:
          return m = parseInt(t.slice(1, 2).repeat(2), 16), p = parseInt(t.slice(2, 3).repeat(2), 16), g = parseInt(t.slice(3, 4).repeat(2), 16), b = parseInt(t.slice(4, 5).repeat(2), 16), I.toColor(m, p, g, b);
        case 7:
          return { css: t, rgba: (parseInt(t.slice(1), 16) << 8 | 255) >>> 0 };
        case 9:
          return { css: t, rgba: parseInt(t.slice(1), 16) >>> 0 };
      }
    let a = t.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
    if (a)
      return m = parseInt(a[1]), p = parseInt(a[2]), g = parseInt(a[3]), b = Math.round((a[5] === undefined ? 1 : parseFloat(a[5])) * 255), I.toColor(m, p, g, b);
    if (!u || !o)
      throw new Error("css.toColor: Unsupported css format");
    if (u.fillStyle = o, u.fillStyle = t, typeof u.fillStyle != "string")
      throw new Error("css.toColor: Unsupported css format");
    if (u.fillRect(0, 0, 1, 1), [m, p, g, b] = u.getImageData(0, 0, 1, 1).data, b !== 255)
      throw new Error("css.toColor: Unsupported css format");
    return { rgba: I.toRgba(m, p, g, b), css: t };
  }
  r.toColor = e;
})(_ ||= {});
var v;
((e) => {
  function u(r) {
    return o(r >> 16 & 255, r >> 8 & 255, r & 255);
  }
  e.relativeLuminance = u;
  function o(r, t, a) {
    let s = r / 255, i = t / 255, n = a / 255, l = s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4), f = i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4), d = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
    return l * 0.2126 + f * 0.7152 + d * 0.0722;
  }
  e.relativeLuminance2 = o;
})(v ||= {});
var y;
((a) => {
  function u(s, i) {
    if (b = (i & 255) / 255, b === 1)
      return i;
    let n = i >> 24 & 255, l = i >> 16 & 255, f = i >> 8 & 255, d = s >> 24 & 255, c = s >> 16 & 255, C2 = s >> 8 & 255;
    return m = d + Math.round((n - d) * b), p = c + Math.round((l - c) * b), g = C2 + Math.round((f - C2) * b), I.toRgba(m, p, g);
  }
  a.blend = u;
  function o(s, i, n) {
    let l = v.relativeLuminance(s >> 8), f = v.relativeLuminance(i >> 8);
    if (F(l, f) < n) {
      if (f < l) {
        let h = e(s, i, n), x = F(l, v.relativeLuminance(h >> 8));
        if (x < n) {
          let R = r(s, i, n), L = F(l, v.relativeLuminance(R >> 8));
          return x > L ? h : R;
        }
        return h;
      }
      let c = r(s, i, n), C2 = F(l, v.relativeLuminance(c >> 8));
      if (C2 < n) {
        let h = e(s, i, n), x = F(l, v.relativeLuminance(h >> 8));
        return C2 > x ? c : h;
      }
      return c;
    }
  }
  a.ensureContrastRatio = o;
  function e(s, i, n) {
    let l = s >> 24 & 255, f = s >> 16 & 255, d = s >> 8 & 255, c = i >> 24 & 255, C2 = i >> 16 & 255, h = i >> 8 & 255, x = F(v.relativeLuminance2(c, C2, h), v.relativeLuminance2(l, f, d));
    for (;x < n && (c > 0 || C2 > 0 || h > 0); )
      c -= Math.max(0, Math.ceil(c * 0.1)), C2 -= Math.max(0, Math.ceil(C2 * 0.1)), h -= Math.max(0, Math.ceil(h * 0.1)), x = F(v.relativeLuminance2(c, C2, h), v.relativeLuminance2(l, f, d));
    return (c << 24 | C2 << 16 | h << 8 | 255) >>> 0;
  }
  a.reduceLuminance = e;
  function r(s, i, n) {
    let l = s >> 24 & 255, f = s >> 16 & 255, d = s >> 8 & 255, c = i >> 24 & 255, C2 = i >> 16 & 255, h = i >> 8 & 255, x = F(v.relativeLuminance2(c, C2, h), v.relativeLuminance2(l, f, d));
    for (;x < n && (c < 255 || C2 < 255 || h < 255); )
      c = Math.min(255, c + Math.ceil((255 - c) * 0.1)), C2 = Math.min(255, C2 + Math.ceil((255 - C2) * 0.1)), h = Math.min(255, h + Math.ceil((255 - h) * 0.1)), x = F(v.relativeLuminance2(c, C2, h), v.relativeLuminance2(l, f, d));
    return (c << 24 | C2 << 16 | h << 8 | 255) >>> 0;
  }
  a.increaseLuminance = r;
  function t(s) {
    return [s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, s & 255];
  }
  a.toChannels = t;
})(y ||= {});
function B(u) {
  let o = u.toString(16);
  return o.length < 2 ? "0" + o : o;
}
function F(u, o) {
  return u < o ? (o + 0.05) / (u + 0.05) : (u + 0.05) / (o + 0.05);
}
var E = Object.freeze((() => {
  let u = [_.toColor("#2e3436"), _.toColor("#cc0000"), _.toColor("#4e9a06"), _.toColor("#c4a000"), _.toColor("#3465a4"), _.toColor("#75507b"), _.toColor("#06989a"), _.toColor("#d3d7cf"), _.toColor("#555753"), _.toColor("#ef2929"), _.toColor("#8ae234"), _.toColor("#fce94f"), _.toColor("#729fcf"), _.toColor("#ad7fa8"), _.toColor("#34e2e2"), _.toColor("#eeeeec")], o = [0, 95, 135, 175, 215, 255];
  for (let e = 0;e < 216; e++) {
    let r = o[e / 36 % 6 | 0], t = o[e / 6 % 6 | 0], a = o[e % 6];
    u.push({ css: I.toCss(r, t, a), rgba: I.toRgba(r, t, a) });
  }
  for (let e = 0;e < 24; e++) {
    let r = 8 + e * 10;
    u.push({ css: I.toCss(r, r, r), rgba: I.toRgba(r, r, r) });
  }
  return u;
})());
function A(u, o, e) {
  return Math.max(o, Math.min(u, e));
}
function O(u) {
  switch (u) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
  }
  return u;
}
var S = class {
  constructor(o) {
    this._buffer = o;
  }
  serialize(o, e) {
    let r = this._buffer.getNullCell(), t = this._buffer.getNullCell(), a = r, s = o.start.y, i = o.end.y, n = o.start.x, l = o.end.x;
    this._beforeSerialize(i - s, s, i);
    for (let f = s;f <= i; f++) {
      let d = this._buffer.getLine(f);
      if (d) {
        let c = f === o.start.y ? n : 0, C2 = f === o.end.y ? l : d.length;
        for (let h = c;h < C2; h++) {
          let x = d.getCell(h, a === r ? t : r);
          if (!x) {
            console.warn(`Can't get cell at row=${f}, col=${h}`);
            continue;
          }
          this._nextCell(x, a, f, h), a = x;
        }
      }
      this._rowEnd(f, f === i);
    }
    return this._afterSerialize(), this._serializeString(e);
  }
  _nextCell(o, e, r, t) {}
  _rowEnd(o, e) {}
  _beforeSerialize(o, e, r) {}
  _afterSerialize() {}
  _serializeString(o) {
    return "";
  }
};
function T(u, o) {
  return u.getFgColorMode() === o.getFgColorMode() && u.getFgColor() === o.getFgColor();
}
function w(u, o) {
  return u.getBgColorMode() === o.getBgColorMode() && u.getBgColor() === o.getBgColor();
}
function z(u, o) {
  return u.isInverse() === o.isInverse() && u.isBold() === o.isBold() && u.isUnderline() === o.isUnderline() && u.isOverline() === o.isOverline() && u.isBlink() === o.isBlink() && u.isInvisible() === o.isInvisible() && u.isItalic() === o.isItalic() && u.isDim() === o.isDim() && u.isStrikethrough() === o.isStrikethrough();
}
var k = class extends S {
  constructor(e, r) {
    super(e);
    this._terminal = r;
    this._rowIndex = 0;
    this._allRows = new Array;
    this._allRowSeparators = new Array;
    this._currentRow = "";
    this._nullCellCount = 0;
    this._cursorStyle = this._buffer.getNullCell();
    this._cursorStyleRow = 0;
    this._cursorStyleCol = 0;
    this._backgroundCell = this._buffer.getNullCell();
    this._firstRow = 0;
    this._lastCursorRow = 0;
    this._lastCursorCol = 0;
    this._lastContentCursorRow = 0;
    this._lastContentCursorCol = 0;
    this._thisRowLastChar = this._buffer.getNullCell();
    this._thisRowLastSecondChar = this._buffer.getNullCell();
    this._nextRowFirstChar = this._buffer.getNullCell();
  }
  _beforeSerialize(e, r, t) {
    this._allRows = new Array(e), this._lastContentCursorRow = r, this._lastCursorRow = r, this._firstRow = r;
  }
  _rowEnd(e, r) {
    this._nullCellCount > 0 && !w(this._cursorStyle, this._backgroundCell) && (this._currentRow += `\x1B[${this._nullCellCount}X`);
    let t = "";
    if (!r) {
      e - this._firstRow >= this._terminal.rows && this._buffer.getLine(this._cursorStyleRow)?.getCell(this._cursorStyleCol, this._backgroundCell);
      let a = this._buffer.getLine(e), s = this._buffer.getLine(e + 1);
      if (!s.isWrapped)
        t = `\r
`, this._lastCursorRow = e + 1, this._lastCursorCol = 0;
      else {
        t = "";
        let i = a.getCell(a.length - 1, this._thisRowLastChar), n = a.getCell(a.length - 2, this._thisRowLastSecondChar), l = s.getCell(0, this._nextRowFirstChar), f = l.getWidth() > 1, d = false;
        (l.getChars() && f ? this._nullCellCount <= 1 : this._nullCellCount <= 0) && ((i.getChars() || i.getWidth() === 0) && w(i, l) && (d = true), f && (n.getChars() || n.getWidth() === 0) && w(i, l) && w(n, l) && (d = true)), d || (t = "-".repeat(this._nullCellCount + 1), t += "\x1B[1D\x1B[1X", this._nullCellCount > 0 && (t += "\x1B[A", t += `\x1B[${a.length - this._nullCellCount}C`, t += `\x1B[${this._nullCellCount}X`, t += `\x1B[${a.length - this._nullCellCount}D`, t += "\x1B[B"), this._lastContentCursorRow = e + 1, this._lastContentCursorCol = 0, this._lastCursorRow = e + 1, this._lastCursorCol = 0);
      }
    }
    this._allRows[this._rowIndex] = this._currentRow, this._allRowSeparators[this._rowIndex++] = t, this._currentRow = "", this._nullCellCount = 0;
  }
  _diffStyle(e, r) {
    let t = [], a = !T(e, r), s = !w(e, r), i = !z(e, r);
    if (a || s || i)
      if (e.isAttributeDefault())
        r.isAttributeDefault() || t.push(0);
      else {
        if (a) {
          let n = e.getFgColor();
          e.isFgRGB() ? t.push(38, 2, n >>> 16 & 255, n >>> 8 & 255, n & 255) : e.isFgPalette() ? n >= 16 ? t.push(38, 5, n) : t.push(n & 8 ? 90 + (n & 7) : 30 + (n & 7)) : t.push(39);
        }
        if (s) {
          let n = e.getBgColor();
          e.isBgRGB() ? t.push(48, 2, n >>> 16 & 255, n >>> 8 & 255, n & 255) : e.isBgPalette() ? n >= 16 ? t.push(48, 5, n) : t.push(n & 8 ? 100 + (n & 7) : 40 + (n & 7)) : t.push(49);
        }
        i && (e.isInverse() !== r.isInverse() && t.push(e.isInverse() ? 7 : 27), e.isBold() !== r.isBold() && t.push(e.isBold() ? 1 : 22), e.isUnderline() !== r.isUnderline() && t.push(e.isUnderline() ? 4 : 24), e.isOverline() !== r.isOverline() && t.push(e.isOverline() ? 53 : 55), e.isBlink() !== r.isBlink() && t.push(e.isBlink() ? 5 : 25), e.isInvisible() !== r.isInvisible() && t.push(e.isInvisible() ? 8 : 28), e.isItalic() !== r.isItalic() && t.push(e.isItalic() ? 3 : 23), e.isDim() !== r.isDim() && t.push(e.isDim() ? 2 : 22), e.isStrikethrough() !== r.isStrikethrough() && t.push(e.isStrikethrough() ? 9 : 29));
      }
    return t;
  }
  _nextCell(e, r, t, a) {
    if (e.getWidth() === 0)
      return;
    let i = e.getChars() === "", n = this._diffStyle(e, this._cursorStyle);
    if (i ? !w(this._cursorStyle, e) : n.length > 0) {
      this._nullCellCount > 0 && (w(this._cursorStyle, this._backgroundCell) || (this._currentRow += `\x1B[${this._nullCellCount}X`), this._currentRow += `\x1B[${this._nullCellCount}C`, this._nullCellCount = 0), this._lastContentCursorRow = this._lastCursorRow = t, this._lastContentCursorCol = this._lastCursorCol = a, this._currentRow += `\x1B[${n.join(";")}m`;
      let f = this._buffer.getLine(t);
      f !== undefined && (f.getCell(a, this._cursorStyle), this._cursorStyleRow = t, this._cursorStyleCol = a);
    }
    i ? this._nullCellCount += e.getWidth() : (this._nullCellCount > 0 && (w(this._cursorStyle, this._backgroundCell) ? this._currentRow += `\x1B[${this._nullCellCount}C` : (this._currentRow += `\x1B[${this._nullCellCount}X`, this._currentRow += `\x1B[${this._nullCellCount}C`), this._nullCellCount = 0), this._currentRow += e.getChars(), this._lastContentCursorRow = this._lastCursorRow = t, this._lastContentCursorCol = this._lastCursorCol = a + e.getWidth());
  }
  _serializeString(e) {
    let r = this._allRows.length;
    this._buffer.length - this._firstRow <= this._terminal.rows && (r = this._lastContentCursorRow + 1 - this._firstRow, this._lastCursorCol = this._lastContentCursorCol, this._lastCursorRow = this._lastContentCursorRow);
    let t = "";
    for (let i = 0;i < r; i++)
      t += this._allRows[i], i + 1 < r && (t += this._allRowSeparators[i]);
    if (!e) {
      let i = this._buffer.baseY + this._buffer.cursorY, n = this._buffer.cursorX, l = i !== this._lastCursorRow || n !== this._lastCursorCol, f = (c) => {
        c > 0 ? t += `\x1B[${c}C` : c < 0 && (t += `\x1B[${-c}D`);
      };
      l && (((c) => {
        c > 0 ? t += `\x1B[${c}B` : c < 0 && (t += `\x1B[${-c}A`);
      })(i - this._lastCursorRow), f(n - this._lastCursorCol));
    }
    let a = this._terminal._core._inputHandler._curAttrData, s = this._diffStyle(a, this._cursorStyle);
    return s.length > 0 && (t += `\x1B[${s.join(";")}m`), t;
  }
};
var D = class {
  activate(o) {
    this._terminal = o;
  }
  _serializeBufferByScrollback(o, e, r) {
    let t = e.length, a = r === undefined ? t : A(r + o.rows, 0, t);
    return this._serializeBufferByRange(o, e, { start: t - a, end: t - 1 }, false);
  }
  _serializeBufferByRange(o, e, r, t) {
    return new k(e, o).serialize({ start: { x: 0, y: typeof r.start == "number" ? r.start : r.start.line }, end: { x: o.cols, y: typeof r.end == "number" ? r.end : r.end.line } }, t);
  }
  _serializeBufferAsHTML(o, e) {
    let r = o.buffer.active, t = new M(r, o, e), a = e.onlySelection ?? false, s = e.range;
    if (s)
      return t.serialize({ start: { x: s.startCol, y: (typeof s.startLine == "number", s.startLine) }, end: { x: o.cols, y: (typeof s.endLine == "number", s.endLine) } });
    if (!a) {
      let n = r.length, l = e.scrollback, f = l === undefined ? n : A(l + o.rows, 0, n);
      return t.serialize({ start: { x: 0, y: n - f }, end: { x: o.cols, y: n - 1 } });
    }
    let i = this._terminal?.getSelectionPosition();
    return i !== undefined ? t.serialize({ start: { x: i.start.x, y: i.start.y }, end: { x: i.end.x, y: i.end.y } }) : "";
  }
  _serializeModes(o) {
    let e = "", r = o.modes;
    if (r.applicationCursorKeysMode && (e += "\x1B[?1h"), r.applicationKeypadMode && (e += "\x1B[?66h"), r.bracketedPasteMode && (e += "\x1B[?2004h"), r.insertMode && (e += "\x1B[4h"), r.originMode && (e += "\x1B[?6h"), r.reverseWraparoundMode && (e += "\x1B[?45h"), r.sendFocusMode && (e += "\x1B[?1004h"), r.wraparoundMode === false && (e += "\x1B[?7l"), r.mouseTrackingMode !== "none")
      switch (r.mouseTrackingMode) {
        case "x10":
          e += "\x1B[?9h";
          break;
        case "vt200":
          e += "\x1B[?1000h";
          break;
        case "drag":
          e += "\x1B[?1002h";
          break;
        case "any":
          e += "\x1B[?1003h";
          break;
      }
    return e;
  }
  serialize(o) {
    if (!this._terminal)
      throw new Error("Cannot use addon until it has been loaded");
    let e = o?.range ? this._serializeBufferByRange(this._terminal, this._terminal.buffer.normal, o.range, true) : this._serializeBufferByScrollback(this._terminal, this._terminal.buffer.normal, o?.scrollback);
    if (!o?.excludeAltBuffer && this._terminal.buffer.active.type === "alternate") {
      let r = this._serializeBufferByScrollback(this._terminal, this._terminal.buffer.alternate, undefined);
      e += `\x1B[?1049h\x1B[H${r}`;
    }
    return o?.excludeModes || (e += this._serializeModes(this._terminal)), e;
  }
  serializeAsHTML(o) {
    if (!this._terminal)
      throw new Error("Cannot use addon until it has been loaded");
    return this._serializeBufferAsHTML(this._terminal, o || {});
  }
  dispose() {}
};
var M = class extends S {
  constructor(e, r, t) {
    super(e);
    this._terminal = r;
    this._options = t;
    this._currentRow = "";
    this._htmlContent = "";
    r._core._themeService ? this._ansiColors = r._core._themeService.colors.ansi : this._ansiColors = E;
  }
  _padStart(e, r, t) {
    return r = r >> 0, t = t ?? " ", e.length > r ? e : (r -= e.length, r > t.length && (t += t.repeat(r / t.length)), t.slice(0, r) + e);
  }
  _beforeSerialize(e, r, t) {
    this._htmlContent += "<html><body><!--StartFragment--><pre>";
    let a = "#000000", s = "#ffffff";
    (this._options.includeGlobalBackground ?? false) && (a = this._terminal.options.theme?.foreground ?? "#ffffff", s = this._terminal.options.theme?.background ?? "#000000");
    let i = [];
    i.push("color: " + a + ";"), i.push("background-color: " + s + ";"), i.push("font-family: " + this._terminal.options.fontFamily + ";"), i.push("font-size: " + this._terminal.options.fontSize + "px;"), this._htmlContent += "<div style='" + i.join(" ") + "'>";
  }
  _afterSerialize() {
    this._htmlContent += "</div>", this._htmlContent += "</pre><!--EndFragment--></body></html>";
  }
  _rowEnd(e, r) {
    this._htmlContent += "<div><span>" + this._currentRow + "</span></div>", this._currentRow = "";
  }
  _getHexColor(e, r) {
    let t = r ? e.getFgColor() : e.getBgColor();
    if (r ? e.isFgRGB() : e.isBgRGB())
      return "#" + [t >> 16 & 255, t >> 8 & 255, t & 255].map((s) => this._padStart(s.toString(16), 2, "0")).join("");
    if (r ? e.isFgPalette() : e.isBgPalette())
      return this._ansiColors[t].css;
  }
  _diffStyle(e, r) {
    let t = [], a = !T(e, r), s = !w(e, r), i = !z(e, r);
    if (a || s || i) {
      let n = this._getHexColor(e, true);
      n && t.push("color: " + n + ";");
      let l = this._getHexColor(e, false);
      return l && t.push("background-color: " + l + ";"), e.isInverse() && t.push("color: #000000; background-color: #BFBFBF;"), e.isBold() && t.push("font-weight: bold;"), e.isUnderline() && e.isOverline() ? t.push("text-decoration: overline underline;") : e.isUnderline() ? t.push("text-decoration: underline;") : e.isOverline() && t.push("text-decoration: overline;"), e.isBlink() && t.push("text-decoration: blink;"), e.isInvisible() && t.push("visibility: hidden;"), e.isItalic() && t.push("font-style: italic;"), e.isDim() && t.push("opacity: 0.5;"), e.isStrikethrough() && t.push("text-decoration: line-through;"), t;
    }
  }
  _nextCell(e, r, t, a) {
    if (e.getWidth() === 0)
      return;
    let i = e.getChars() === "", n = this._diffStyle(e, r);
    n && (this._currentRow += n.length === 0 ? "</span><span>" : "</span><span style='" + n.join(" ") + "'>"), i ? this._currentRow += " " : this._currentRow += O(e.getChars());
  }
  _serializeString() {
    return this._htmlContent;
  }
};

// src/pty.ts
import { mkdirSync as mkdirSync2, existsSync as existsSync2, readdirSync, appendFileSync as appendFileSync2 } from "fs";
import { join as join2 } from "path";
import { homedir as homedir2 } from "os";

// src/log.ts
import { appendFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { homedir } from "os";
var LOG_DIR = join(homedir(), ".local", "share", "quest-log");
var LOG_PATH = join(LOG_DIR, "debug.log");
function ts() {
  return new Date().toISOString().replace("T", " ").slice(0, 19);
}
function log(msg) {
  try {
    if (!existsSync(LOG_DIR))
      mkdirSync(LOG_DIR, { recursive: true });
    appendFileSync(LOG_PATH, `[${ts()}] ${msg}
`);
  } catch {}
}
function logError(context, err) {
  const msg = err instanceof Error ? `${err.message}
${err.stack}` : String(err);
  log(`ERROR [${context}] ${msg}`);
}

// src/pty.ts
var SESSION_DIR = join2(homedir2(), ".local", "share", "quest-log", "sessions");
function ensureSessionDir() {
  if (!existsSync2(SESSION_DIR))
    mkdirSync2(SESSION_DIR, { recursive: true });
}
function transcriptPath(projectId) {
  const ts2 = new Date().toISOString().replace(/[:.]/g, "-");
  return join2(SESSION_DIR, `${projectId}-${ts2}.log`);
}
function launchSession(name, id, cwd, taskDesc, cols, rows, onData, onExit) {
  ensureSessionDir();
  const tPath = transcriptPath(id);
  log(`launchSession: name=${name} id=${id} cwd=${cwd} cols=${cols} rows=${rows}`);
  log(`launchSession: cmd=claude "Work on: ${taskDesc}"`);
  const term = new import_headless.Terminal({ cols, rows, allowProposedApi: true });
  const serializeAddon = new D;
  term.loadAddon(serializeAddon);
  const decoder = new TextDecoder;
  let debounceTimer = null;
  let ptyRef = null;
  try {
    const proc = Bun.spawn({
      cmd: ["claude", `Work on: ${taskDesc}`],
      cwd,
      terminal: {
        cols,
        rows,
        data(ptyObj, chunk) {
          if (!ptyRef) {
            ptyRef = ptyObj;
            log(`pty data callback: captured ptyRef, type=${typeof ptyObj}, write=${typeof ptyObj?.write}`);
          }
          const text = decoder.decode(chunk, { stream: true });
          try {
            appendFileSync2(tPath, text);
          } catch (e) {
            logError("transcript write", e);
          }
          term.write(text, () => {
            if (debounceTimer)
              clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
              onData(snapshot(sess));
            }, 50);
          });
        },
        exit(ptyObj, code) {
          log(`pty exit: code=${code} projectId=${id}`);
          sess.exitCode = code;
          if (debounceTimer)
            clearTimeout(debounceTimer);
          term.write("", () => {
            onData(snapshot(sess));
            onExit(code);
          });
        }
      }
    });
    ptyRef = proc.terminal;
    log(`launchSession: proc.terminal type=${typeof ptyRef}, write=${typeof ptyRef?.write}, resize=${typeof ptyRef?.resize}`);
    log(`launchSession: pid=${proc.pid}`);
    const handle = {
      write(data) {
        log(`pty.write: len=${data.length} ptyRef=${!!ptyRef} data=${JSON.stringify(data).slice(0, 80)}`);
        if (!ptyRef) {
          log("pty.write: ERROR ptyRef is null!");
          return;
        }
        try {
          ptyRef.write(data);
        } catch (e) {
          logError("pty.write", e);
        }
      },
      resize(c, r) {
        try {
          ptyRef?.resize(c, r);
        } catch (e) {
          logError("pty.resize", e);
        }
      },
      kill() {
        log(`pty.kill: pid=${proc.pid}`);
        try {
          proc.kill();
        } catch (e) {
          logError("pty.kill", e);
        }
      }
    };
    const sess = {
      projectId: id,
      transcriptPath: tPath,
      startedAt: Date.now(),
      pty: handle,
      term,
      serializeAddon,
      exitCode: null
    };
    log(`launchSession: success, returning session`);
    return sess;
  } catch (e) {
    logError("launchSession", e);
    return null;
  }
}
function launchGitSession(projectId, cwd, cmd, cols, rows, onData, onExit) {
  const term = new import_headless.Terminal({ cols, rows, allowProposedApi: true });
  const serializeAddon = new D;
  term.loadAddon(serializeAddon);
  const decoder = new TextDecoder;
  let debounceTimer = null;
  let ptyRef = null;
  try {
    const proc = Bun.spawn({
      cmd,
      cwd,
      terminal: {
        cols,
        rows,
        data(ptyObj, chunk) {
          if (!ptyRef)
            ptyRef = ptyObj;
          const text = decoder.decode(chunk, { stream: true });
          term.write(text, () => {
            if (debounceTimer)
              clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => onData(snapshot(sess)), 50);
          });
        },
        exit(_ptyObj, code) {
          sess.exitCode = code;
          if (debounceTimer)
            clearTimeout(debounceTimer);
          term.write("", () => {
            onData(snapshot(sess));
            onExit();
          });
        }
      }
    });
    ptyRef = proc.terminal;
    const handle = {
      write(data) {
        try {
          ptyRef?.write(data);
        } catch (e) {
          logError("git-pty.write", e);
        }
      },
      resize(c, r) {
        try {
          ptyRef?.resize(c, r);
        } catch (e) {
          logError("git-pty.resize", e);
        }
      },
      kill() {
        try {
          proc.kill();
        } catch (e) {
          logError("git-pty.kill", e);
        }
      }
    };
    const sess = {
      projectId,
      transcriptPath: "",
      startedAt: Date.now(),
      pty: handle,
      term,
      serializeAddon,
      exitCode: null
    };
    return sess;
  } catch (e) {
    logError("launchGitSession", e);
    return null;
  }
}
function writeToSession(sess, data) {
  sess.pty.write(data);
}
function resizeSession(sess, cols, rows) {
  log(`resizeSession: cols=${cols} rows=${rows}`);
  sess.pty.resize(cols, rows);
  try {
    sess.term.resize(cols, rows);
  } catch (e) {
    logError("xterm.resize", e);
  }
}
function killSession(sess) {
  sess.pty.kill();
}
function cleanSerializeOutput(raw) {
  return raw.replace(/\r/g, "").replace(/\x1b\[(\d+)C/g, (_m, n) => " ".repeat(parseInt(n, 10))).replace(/\x1b\[(\d+)B/g, (_m, n) => `
`.repeat(parseInt(n, 10))).replace(/\x1b\[[0-9;?]*[A-HJKSTfhlnsu]/g, "");
}
function snapshot(sess) {
  try {
    const raw = sess.serializeAddon.serialize({ excludeModes: true });
    const lines = cleanSerializeOutput(raw).split(`
`);
    while (lines.length > 0 && lines[lines.length - 1]?.trim() === "") {
      lines.pop();
    }
    return lines.join(`
`);
  } catch {
    const buf = sess.term.buffer.active;
    const lines = [];
    const end = buf.baseY + sess.term.rows;
    for (let y2 = 0;y2 < end; y2++) {
      const line = buf.getLine(y2);
      if (!line)
        continue;
      lines.push(line.translateToString(true));
    }
    while (lines.length > 0 && lines[lines.length - 1]?.trim() === "") {
      lines.pop();
    }
    return lines.join(`
`);
  }
}
function formatDuration(startedAt) {
  const elapsed = Math.floor((Date.now() - startedAt) / 1000);
  const m2 = Math.floor(elapsed / 60);
  const s = elapsed % 60;
  return `${m2}m ${s.toString().padStart(2, "0")}s`;
}
function latestTranscript(projectId) {
  try {
    ensureSessionDir();
    const files = readdirSync(SESSION_DIR);
    const matching = files.filter((f) => f.startsWith(projectId) && f.endsWith(".log")).sort();
    return matching.length > 0 ? join2(SESSION_DIR, matching[matching.length - 1]) : null;
  } catch (e) {
    logError("latestTranscript", e);
    return null;
  }
}
function stripAnsi(s) {
  return s.replace(/\x1b\[[0-9;?]*[A-Za-z@`]/g, "").replace(/\x1b\][^\x07]*(?:\x07|\x1b\\)/g, "").replace(/\x1b[()][AB012]/g, "").replace(/\x1b[a-zA-Z]/g, "").replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, "");
}
function replayTranscript(raw, cols = 120, rows = 500) {
  try {
    const term = new import_headless.Terminal({ cols, rows, allowProposedApi: true });
    const sa = new D;
    term.loadAddon(sa);
    term.write(raw);
    const result = cleanSerializeOutput(sa.serialize({ excludeModes: true }));
    const lines = result.split(`
`);
    while (lines.length > 0 && lines[lines.length - 1]?.trim() === "")
      lines.pop();
    term.dispose();
    return lines.join(`
`);
  } catch (e) {
    logError("replayTranscript", e);
    return stripAnsi(raw);
  }
}

// src/modal.ts
function showInputModal({ screen, title, value = "", onSubmit, onCancel }) {
  const modal = import_neo_blessed2.default.box({
    parent: screen,
    top: "center",
    left: "center",
    width: 42,
    height: 7,
    tags: true,
    label: ` ${title} `,
    border: { type: "line" },
    style: {
      bg: C.overlay,
      fg: C.text,
      border: { fg: C.mauve },
      label: { fg: C.mauve }
    }
  });
  const input = import_neo_blessed2.default.textbox({
    parent: modal,
    top: 1,
    left: 2,
    width: 36,
    height: 1,
    inputOnFocus: true,
    style: {
      bg: C.surface,
      fg: C.text
    }
  });
  import_neo_blessed2.default.box({
    parent: modal,
    top: 3,
    left: 2,
    width: 36,
    height: 1,
    tags: true,
    content: fg(C.subtext, "[Enter] save    [Esc] cancel"),
    style: { bg: C.overlay, fg: C.subtext }
  });
  function cleanup() {
    modal.destroy();
    screen.render();
  }
  input.on("submit", (val) => {
    cleanup();
    if (val.trim())
      onSubmit(val.trim());
    else
      onCancel();
  });
  input.on("cancel", () => {
    cleanup();
    onCancel();
  });
  input.setValue(value);
  screen.render();
  input.focus();
  input.readInput();
}
function showConfirmModal({ screen, message, onConfirm, onCancel }) {
  const modal = import_neo_blessed2.default.box({
    parent: screen,
    top: "center",
    left: "center",
    width: 42,
    height: 7,
    tags: true,
    label: ` ${fg(C.red, "Confirm")} `,
    border: { type: "line" },
    style: {
      bg: C.overlay,
      fg: C.text,
      border: { fg: C.red },
      label: { fg: C.red }
    }
  });
  import_neo_blessed2.default.box({
    parent: modal,
    top: 1,
    left: 2,
    width: 36,
    height: 1,
    tags: true,
    content: message,
    style: { bg: C.overlay, fg: C.text }
  });
  import_neo_blessed2.default.box({
    parent: modal,
    top: 3,
    left: 2,
    width: 36,
    height: 1,
    tags: true,
    content: `${fg(C.red, "[y]")} delete    ${fg(C.subtext, "[n/Esc]")} cancel`,
    style: { bg: C.overlay, fg: C.subtext }
  });
  function cleanup() {
    modal.destroy();
    screen.render();
  }
  const handler = (_ch, key) => {
    if (key.name === "y") {
      screen.removeListener("keypress", handler);
      cleanup();
      onConfirm();
    } else if (key.name === "n" || key.name === "escape") {
      screen.removeListener("keypress", handler);
      cleanup();
      onCancel();
    }
  };
  screen.on("keypress", handler);
  screen.render();
}
function showHelpOverlay({ screen, onClose }) {
  const lines = [
    fg(C.mauve, "Navigation"),
    "",
    `${fg(C.blue, "h / l")}     Left \u2194 terminal`,
    `${fg(C.blue, "Tab")}       Cycle left panels`,
    `${fg(C.blue, "j / k")}     Move / scroll`,
    `${fg(C.blue, "1-9")}       Jump to item N`,
    `${fg(C.blue, "g g")}       Jump to top`,
    `${fg(C.blue, "G")}         Jump to bottom`,
    `${fg(C.blue, "/")}         Fuzzy search / filter`,
    "",
    fg(C.mauve, "Actions"),
    "",
    `${fg(C.blue, "enter")}     Launch session`,
    `${fg(C.blue, "space")}     Toggle done`,
    `${fg(C.blue, "a")}         Add item`,
    `${fg(C.blue, "d")}         Delete item`,
    `${fg(C.blue, "r")}         Rename item`,
    `${fg(C.blue, "e")}         Edit task description`,
    `${fg(C.blue, "J / K")}     Reorder item`,
    `${fg(C.blue, "y")}         Yank name`,
    `${fg(C.blue, "A")}         Toggle archived`,
    `${fg(C.blue, "s")}         Sessions overlay`,
    `${fg(C.blue, "S")}         Rescan repos`,
    "",
    fg(C.mauve, "Terminal"),
    "",
    `${fg(C.blue, "i")}         Line input mode`,
    `${fg(C.blue, "I")}         Passthrough (Ctrl+] exit)`,
    `${fg(C.blue, "x")}         Kill session`,
    `${fg(C.blue, "L")}         View last transcript`,
    `${fg(C.blue, "c")}         Git commit`,
    `${fg(C.blue, "D")}         Git diff --stat`,
    `${fg(C.blue, "P")}         Git push`,
    "",
    `${fg(C.blue, "?")}         Toggle help`,
    `${fg(C.blue, "q")}         Quit`
  ];
  const modal = import_neo_blessed2.default.box({
    parent: screen,
    top: "center",
    left: "center",
    width: 40,
    height: lines.length + 4,
    tags: true,
    label: ` ${fg(C.mauve, "Help")} `,
    border: { type: "line" },
    content: `
` + lines.join(`
`),
    style: {
      bg: C.overlay,
      fg: C.text,
      border: { fg: C.mauve },
      label: { fg: C.mauve }
    }
  });
  const handler = (_ch, key) => {
    if (key.name === "escape" || key.name === "q" || key.ch === "?") {
      screen.removeListener("keypress", handler);
      modal.destroy();
      screen.render();
      onClose();
    }
  };
  screen.on("keypress", handler);
  screen.render();
}
function showSessionsOverlay({ screen, sessions, projects, onSelect, onClose }) {
  const entries = [];
  for (const [pid, sess] of sessions) {
    const proj = projects.find((p2) => p2.id === pid);
    const name = proj?.name ?? "Unknown";
    const dur = formatDuration(sess.startedAt);
    const status = sess.exitCode === null ? "running" : `exited (${sess.exitCode})`;
    entries.push({ projectId: pid, name, dur, status });
  }
  const lines = entries.map((e, i) => `  ${fg(C.blue, String(i + 1))}  ${fg(C.text, e.name)}  ${fg(C.dim, e.dur)}  ${fg(e.status === "running" ? C.green : C.red, e.status)}`);
  const modal = import_neo_blessed2.default.box({
    parent: screen,
    top: "center",
    left: "center",
    width: 50,
    height: lines.length + 4,
    tags: true,
    label: ` ${fg(C.peach, "Sessions")} `,
    border: { type: "line" },
    content: `
` + lines.join(`
`),
    style: {
      bg: C.overlay,
      fg: C.text,
      border: { fg: C.peach },
      label: { fg: C.peach }
    }
  });
  const handler = (_ch, key) => {
    if (key.name === "escape" || key.ch === "s") {
      screen.removeListener("keypress", handler);
      modal.destroy();
      screen.render();
      onClose();
      return;
    }
    if (key.ch && key.ch >= "1" && key.ch <= "9") {
      const idx = parseInt(key.ch, 10) - 1;
      if (idx < entries.length) {
        screen.removeListener("keypress", handler);
        modal.destroy();
        screen.render();
        onSelect(entries[idx].projectId);
      }
    }
  };
  screen.on("keypress", handler);
  screen.render();
}

// src/store.ts
import { readFileSync, writeFileSync, mkdirSync as mkdirSync3, existsSync as existsSync3 } from "fs";
import { join as join3, dirname } from "path";
import { randomUUID } from "crypto";
var DATA_PATH = join3(dirname(import.meta.dir), "data", "quests.json");
var lastSaveTs = 0;
function defaultData() {
  return { projects: [] };
}
function load() {
  try {
    if (!existsSync3(DATA_PATH))
      return defaultData();
    const raw = readFileSync(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return defaultData();
  }
}
function save(data) {
  const dir = dirname(DATA_PATH);
  if (!existsSync3(dir))
    mkdirSync3(dir, { recursive: true });
  lastSaveTs = Date.now();
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}
function addProject(data, name, opts) {
  const p2 = { id: randomUUID(), name, done: false, path: opts?.path, type: opts?.type, tasks: [] };
  data.projects.push(p2);
  if (opts?.save !== false)
    save(data);
  return p2;
}
function addTask(project, name, description) {
  const t = { id: randomUUID(), name, done: false, subtasks: [] };
  if (description)
    t.description = description;
  project.tasks.push(t);
  return t;
}
function addSubtask(task, name) {
  const s = { id: randomUUID(), name, done: false };
  task.subtasks.push(s);
  return s;
}
function removeProject(data, idx) {
  data.projects.splice(idx, 1);
}
function removeTask(project, idx) {
  project.tasks.splice(idx, 1);
}
function removeSubtask(task, idx) {
  task.subtasks.splice(idx, 1);
}
function toggleDone(item) {
  item.done = !item.done;
}
function projectStats(p2) {
  let done = 0;
  let total = 0;
  for (const t of p2.tasks) {
    if (t.subtasks.length > 0) {
      for (const s of t.subtasks) {
        total++;
        if (s.done)
          done++;
      }
    } else {
      total++;
      if (t.done)
        done++;
    }
  }
  return { done, total };
}
function isPartiallyDone(p2) {
  const { done, total } = projectStats(p2);
  return done > 0 && done < total;
}
function swapItems(arr, i, j) {
  if (i < 0 || j < 0 || i >= arr.length || j >= arr.length)
    return;
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function globalStats(data) {
  let tasks = 0;
  let done = 0;
  for (const p2 of data.projects) {
    const s = projectStats(p2);
    tasks += s.total;
    done += s.done;
  }
  return {
    projects: data.projects.length,
    tasks,
    pct: tasks === 0 ? 0 : Math.round(done / tasks * 100)
  };
}

// src/uistate.ts
import { readFileSync as readFileSync2, writeFileSync as writeFileSync2, mkdirSync as mkdirSync4, existsSync as existsSync4 } from "fs";
import { join as join4, dirname as dirname2 } from "path";
import { homedir as homedir3 } from "os";
var STATE_PATH = join4(homedir3(), ".local", "share", "quest-log", "ui-state.json");
var defaults = {
  projectIdx: 0,
  taskIdx: 0,
  subtaskIdx: 0,
  leftPanel: "projects",
  panel: "projects",
  showArchived: false,
  cockpitMode: false
};
function loadUIState() {
  try {
    if (!existsSync4(STATE_PATH))
      return { ...defaults };
    const raw = readFileSync2(STATE_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return { ...defaults, ...parsed };
  } catch {
    return { ...defaults };
  }
}
function saveUIState(s) {
  try {
    const dir = dirname2(STATE_PATH);
    if (!existsSync4(dir))
      mkdirSync4(dir, { recursive: true });
    writeFileSync2(STATE_PATH, JSON.stringify(s, null, 2));
  } catch (e) {
    logError("saveUIState", e);
  }
}

// src/scan.ts
import { readdirSync as readdirSync2, statSync, existsSync as existsSync5 } from "fs";
import { join as join5 } from "path";
import { execFileSync } from "child_process";
import { homedir as homedir4 } from "os";
function scanRepos() {
  const home = homedir4();
  const repos = [];
  for (const entry of readdirSync2(home)) {
    const full = join5(home, entry);
    try {
      if (!statSync(full).isDirectory())
        continue;
      if (!existsSync5(join5(full, ".git")))
        continue;
      const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {
        cwd: full,
        encoding: "utf-8",
        timeout: 3000
      }).trim();
      const dirty = execFileSync("git", ["status", "--porcelain"], {
        cwd: full,
        encoding: "utf-8",
        timeout: 3000
      }).trim().length > 0;
      let lastCommit = new Date;
      try {
        const ts2 = execFileSync("git", ["log", "-1", "--format=%ct"], {
          cwd: full,
          encoding: "utf-8",
          timeout: 3000
        }).trim();
        lastCommit = new Date(parseInt(ts2) * 1000);
      } catch {}
      repos.push({ name: entry, path: full, dirty, branch, lastCommit });
    } catch {}
  }
  return repos;
}
function getRepoStatus(path) {
  try {
    const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {
      cwd: path,
      encoding: "utf-8",
      timeout: 3000
    }).trim();
    const dirty = execFileSync("git", ["status", "--porcelain"], {
      cwd: path,
      encoding: "utf-8",
      timeout: 3000
    }).trim().length > 0;
    return { dirty, branch };
  } catch {
    return null;
  }
}

// src/panels.ts
function cleanupSessions(state) {
  for (const [, sess] of state.sessions) {
    killSession(sess);
  }
  state.sessions.clear();
}
var LEFT_PANELS = ["projects", "tasks", "subtasks"];
function escapeBraces(s) {
  return s.replace(/\{/g, "{open}").replace(/\}/g, "{close}");
}
function rgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g2 = parseInt(hex.slice(3, 5), 16);
  const b2 = parseInt(hex.slice(5, 7), 16);
  return `\x1B[38;2;${r};${g2};${b2}m`;
}
var RST = "\x1B[0m";
function ansi(color, text) {
  return `${rgb(color)}${text}${RST}`;
}
var gitCache = new Map;
function refreshGitCache(projects) {
  gitCache.clear();
  for (const p2 of projects) {
    if (!p2.path)
      continue;
    const status = getRepoStatus(p2.path);
    if (status)
      gitCache.set(p2.path, status);
  }
}
function setupPanels(screen, panels, header, statusBar, state, initialRepos) {
  refreshGitCache(state.data.projects);
  let modalOpen = false;
  let gPending = false;
  let lastLaunch = 0;
  let filteredIndices = [];
  let inputBuffer = "";
  function sortProjects() {
    const selected = state.data.projects[state.projectIdx];
    state.data.projects.sort((a, b2) => {
      const aRunning = state.sessions.has(a.id) ? 0 : 1;
      const bRunning = state.sessions.has(b2.id) ? 0 : 1;
      if (aRunning !== bRunning)
        return aRunning - bRunning;
      const aDone = a.done ? 1 : 0;
      const bDone = b2.done ? 1 : 0;
      if (aDone !== bDone)
        return aDone - bDone;
      if (!a.done && !b2.done) {
        const aAct = a.lastActivity ?? 0;
        const bAct = b2.lastActivity ?? 0;
        if (aAct !== bAct)
          return bAct - aAct;
      }
      return 0;
    });
    if (selected) {
      const newIdx = state.data.projects.indexOf(selected);
      if (newIdx !== -1)
        state.projectIdx = newIdx;
    }
  }
  function clampIndices() {
    const pLen = state.data.projects.length;
    state.projectIdx = pLen === 0 ? 0 : Math.min(state.projectIdx, pLen - 1);
    if (pLen > 0 && !state.showArchived) {
      const p2 = state.data.projects[state.projectIdx];
      if (p2?.done && !state.sessions.has(p2.id)) {
        let found = -1;
        for (let i = state.projectIdx + 1;i < pLen; i++) {
          const pi = state.data.projects[i];
          if (!pi.done || state.sessions.has(pi.id)) {
            found = i;
            break;
          }
        }
        if (found === -1) {
          for (let i = state.projectIdx - 1;i >= 0; i--) {
            const pi = state.data.projects[i];
            if (!pi.done || state.sessions.has(pi.id)) {
              found = i;
              break;
            }
          }
        }
        if (found !== -1)
          state.projectIdx = found;
      }
    }
    const proj = state.data.projects[state.projectIdx];
    const tLen = proj ? proj.tasks.length : 0;
    state.taskIdx = tLen === 0 ? 0 : Math.min(state.taskIdx, tLen - 1);
    const task = proj?.tasks[state.taskIdx];
    const sLen = task ? task.subtasks.length : 0;
    state.subtaskIdx = sLen === 0 ? 0 : Math.min(state.subtaskIdx, sLen - 1);
  }
  function currentIdx() {
    if (state.leftPanel === "projects")
      return state.projectIdx;
    if (state.leftPanel === "tasks")
      return state.taskIdx;
    return state.subtaskIdx;
  }
  function setCurrentIdx(val) {
    if (state.leftPanel === "projects")
      state.projectIdx = val;
    else if (state.leftPanel === "tasks")
      state.taskIdx = val;
    else
      state.subtaskIdx = val;
  }
  function listLength() {
    if (state.leftPanel === "projects")
      return state.data.projects.length;
    const proj = state.data.projects[state.projectIdx];
    if (state.leftPanel === "tasks")
      return proj ? proj.tasks.length : 0;
    const task = proj?.tasks[state.taskIdx];
    return task ? task.subtasks.length : 0;
  }
  function currentProject() {
    return state.data.projects[state.projectIdx];
  }
  function currentSession() {
    const proj = currentProject();
    return proj ? state.sessions.get(proj.id) : undefined;
  }
  function isOnTerminal() {
    return state.panel === "terminal";
  }
  function isOnLeft() {
    return state.panel !== "terminal";
  }
  function termDims() {
    const w2 = panels.terminal.width || 80;
    const h = panels.terminal.height || 24;
    return { cols: Math.max(10, w2 - 2), rows: Math.max(4, h - 2) };
  }
  function getSearchItems() {
    if (state.leftPanel === "projects")
      return state.data.projects;
    const proj = currentProject();
    if (state.leftPanel === "tasks")
      return proj ? proj.tasks : [];
    const task = proj?.tasks[state.taskIdx];
    return task ? task.subtasks : [];
  }
  function fuzzyScore(str, query) {
    const s = str.toLowerCase();
    const q = query.toLowerCase();
    let si = 0, qi = 0, score = 0, consecutive = 0;
    while (si < s.length && qi < q.length) {
      if (s[si] === q[qi]) {
        score += 1 + consecutive;
        if (si === 0 || s[si - 1] === " " || s[si - 1] === "-" || s[si - 1] === "_")
          score += 5;
        consecutive++;
        qi++;
      } else {
        consecutive = 0;
      }
      si++;
    }
    return qi === q.length ? score : 0;
  }
  function computeFilteredIndices() {
    if (!state.searchQuery)
      return [];
    const items = getSearchItems();
    const q = state.searchQuery;
    const scored = [];
    for (let i = 0;i < items.length; i++) {
      const s = fuzzyScore(items[i].name, q);
      if (s > 0)
        scored.push({ idx: i, score: s });
    }
    scored.sort((a, b2) => b2.score - a.score);
    return scored.map((s) => s.idx);
  }
  function moveFiltered(dir) {
    if (!state.searchQuery) {
      move(dir);
      return;
    }
    filteredIndices = computeFilteredIndices();
    if (filteredIndices.length === 0)
      return;
    const idx = currentIdx();
    const pos = filteredIndices.indexOf(idx);
    if (pos === -1) {
      setCurrentIdx(filteredIndices[dir === 1 ? 0 : filteredIndices.length - 1]);
    } else {
      const next = pos + dir;
      if (next >= 0 && next < filteredIndices.length) {
        setCurrentIdx(filteredIndices[next]);
      }
    }
    if (state.leftPanel === "projects") {
      state.taskIdx = 0;
      state.subtaskIdx = 0;
    } else if (state.leftPanel === "tasks") {
      state.subtaskIdx = 0;
    }
    renderAll();
  }
  function renderHeader() {
    const s = globalStats(state.data);
    const sess = currentSession();
    const durStr = sess ? ` ${fg(C.dim, "\u2502")} ${fg(C.peach, formatDuration(sess.startedAt))}` : "";
    const archStr = state.showArchived ? ` ${fg(C.dim, "\u2502")} ${fg(C.yellow, "[ALL]")}` : "";
    header.setContent(` ${fg(C.mauve, "\u2694 Quest Log")}` + `${fg(C.dim, " \u2500\u2500")} ` + `${fg(C.text, String(s.projects))} ${fg(C.subtext, "projects")}` + `${fg(C.dim, " \u2502")} ` + `${fg(C.text, String(s.tasks))} ${fg(C.subtext, "tasks")}` + `${fg(C.dim, " \u2502")} ` + `${fg(C.text, `${s.pct}%`)} ${fg(C.subtext, "done")}` + durStr + archStr);
  }
  function applyCockpitLayout() {
    if (state.cockpitMode) {
      panels.tasks.hide();
      panels.subtasks.hide();
      panels.projects.top = 1;
      panels.projects.height = "100%-2";
    } else {
      panels.tasks.show();
      panels.subtasks.show();
      panels.projects.top = 1;
      panels.projects.height = "34%-1";
    }
  }
  function toggleCockpitMode() {
    state.cockpitMode = !state.cockpitMode;
    if (state.cockpitMode) {
      state.leftPanel = "projects";
      state.panel = "projects";
    }
    applyCockpitLayout();
    persistUI();
    renderAll();
  }
  function renderCockpit() {
    const panel = panels.projects;
    const projects = state.data.projects;
    if (projects.length === 0) {
      panel.setContent(`
{center}${fg(C.dim, "No quests yet")}{/center}` + `

{center}${fg(C.subtext, "Press ")}${fg(C.blue, "a")}${fg(C.subtext, " to add one")}{/center}`);
      return;
    }
    const lines = [];
    const pw = panel.width || 30;
    const innerW = pw - 2;
    let displayLine = -1;
    for (let i = 0;i < projects.length; i++) {
      const p2 = projects[i];
      if (p2.done && !state.showArchived && !state.sessions.has(p2.id))
        continue;
      const sel = i === state.projectIdx;
      if (sel)
        displayLine = lines.length;
      const stats = projectStats(p2);
      const partial = isPartiallyDone(p2);
      const running = state.sessions.has(p2.id);
      const sess = state.sessions.get(p2.id);
      const prog = stats.total > 0 ? `${stats.done}/${stats.total}` : "";
      let detail = "";
      if (running && sess && sess.exitCode === null) {
        detail = `running ${formatDuration(sess.startedAt)}`;
      } else if (running && sess && sess.exitCode !== null) {
        detail = `exited (${sess.exitCode})`;
      } else {
        const next = p2.tasks.find((t) => !t.done);
        if (next)
          detail = next.name;
      }
      let icon = "\u25CB";
      let color = C.text;
      if (running && sess?.exitCode === null) {
        icon = "\u25B6";
        color = C.peach;
      } else if (running && sess?.exitCode !== null) {
        icon = "\u25B6";
        color = C.red;
      } else if (p2.done) {
        icon = "\u2713";
        color = C.green;
      } else if (partial) {
        icon = "\u25C6";
        color = C.yellow;
      }
      const progW = prog.length > 0 ? prog.length + 1 : 0;
      const fixedW = 2 + progW + 1;
      const nameMax = Math.max(4, Math.floor((innerW - fixedW) * 0.45));
      const detailMax = Math.max(4, innerW - fixedW - nameMax - 1);
      const displayName = p2.name.length > nameMax ? p2.name.slice(0, nameMax - 1) + "\u2026" : p2.name.padEnd(nameMax);
      const displayDetail = detail.length > detailMax ? detail.slice(0, detailMax - 1) + "\u2026" : detail;
      const progStr = prog ? ` ${fg(C.dim, prog)}` : "";
      const detailStr = displayDetail ? ` ${fg(C.dim, displayDetail)}` : "";
      if (sel) {
        lines.push(selLine(` ${icon} ${displayName}${progStr}${detailStr} `));
      } else {
        lines.push(` ${fg(color, `${icon} ${displayName}`)}${progStr}${detailStr}`);
      }
    }
    panel.setContent(lines.join(`
`));
    if (displayLine >= 0)
      ensureVisible(panel, displayLine);
  }
  function renderProjects() {
    const panel = panels.projects;
    const projects = state.data.projects;
    if (projects.length === 0) {
      panel.setContent(`
{center}${fg(C.dim, "No quests yet")}{/center}` + `

{center}${fg(C.subtext, "Press ")}${fg(C.blue, "a")}${fg(C.subtext, " to add one")}{/center}`);
      return;
    }
    const lines = [];
    const searchQ = state.searchQuery.toLowerCase();
    let displayLine = -1;
    for (let i = 0;i < projects.length; i++) {
      const p2 = projects[i];
      if (p2.done && !state.showArchived && !state.sessions.has(p2.id))
        continue;
      if (searchQ && state.leftPanel === "projects" && fuzzyScore(p2.name, state.searchQuery) === 0)
        continue;
      const sel = state.leftPanel === "projects" && i === state.projectIdx;
      if (sel)
        displayLine = lines.length;
      const stats = projectStats(p2);
      const partial = isPartiallyDone(p2);
      const git = p2.path ? gitCache.get(p2.path) : null;
      const dirty = git?.dirty ? " *" : "";
      const running = state.sessions.has(p2.id);
      const pw = panels.projects.width || 30;
      const panelWidth = pw - 2;
      const nameMax = Math.max(5, panelWidth - 4 - dirty.length);
      const displayName = p2.name.length > nameMax ? p2.name.slice(0, nameMax - 1) + "\u2026" : p2.name;
      if (sel) {
        lines.push(selLine(` \u25B8 ${displayName}${dirty} `));
      } else if (running) {
        lines.push(` ${fg(C.peach, `\u25B6 ${displayName}${dirty}`)}`);
      } else {
        lines.push(` ${statusLine(p2.done, partial, displayName + dirty)}`);
      }
      const bar = `   ${progressBar(stats.done, stats.total)}`;
      if (git) {
        const barVisLen = 3 + 8 + 1 + `${stats.done}/${stats.total}`.length;
        const maxBranch = Math.max(3, panelWidth - barVisLen - 2);
        const branch = git.branch.length > maxBranch ? git.branch.slice(0, maxBranch - 1) + "\u2026" : git.branch;
        lines.push(`${bar}  ${fg(C.dim, branch)}`);
      } else {
        lines.push(bar);
      }
    }
    panel.setContent(lines.join(`
`));
    if (displayLine >= 0)
      ensureVisible(panel, displayLine);
  }
  function renderTasks() {
    const panel = panels.tasks;
    const proj = currentProject();
    const tasks = proj ? proj.tasks : [];
    if (!proj) {
      panel.setContent(`
{center}${fg(C.dim, "Select a project")}{/center}`);
      return;
    }
    if (tasks.length === 0) {
      panel.setContent(`
{center}${fg(C.dim, "No tasks yet")}{/center}` + `

{center}${fg(C.subtext, "Press ")}${fg(C.blue, "a")}${fg(C.subtext, " to add one")}{/center}`);
      return;
    }
    const lines = [];
    const searchQ = state.searchQuery.toLowerCase();
    let displayIdx = -1;
    for (let i = 0;i < tasks.length; i++) {
      const t = tasks[i];
      if (searchQ && state.leftPanel === "tasks" && fuzzyScore(t.name, state.searchQuery) === 0)
        continue;
      const sel = state.leftPanel === "tasks" && i === state.taskIdx;
      if (sel)
        displayIdx = lines.length;
      if (sel) {
        lines.push(selLine(` \u25B8 ${t.name} `));
      } else {
        lines.push(` ${statusLine(t.done, false, t.name)}`);
      }
    }
    panel.setContent(lines.join(`
`));
    if (displayIdx >= 0)
      ensureVisible(panel, displayIdx);
  }
  function renderSubtasks() {
    const panel = panels.subtasks;
    const proj = currentProject();
    const task = proj?.tasks[state.taskIdx];
    const subtasks = task ? task.subtasks : [];
    if (!task) {
      panel.setContent(`
{center}${fg(C.dim, "Select a task")}{/center}`);
      return;
    }
    if (subtasks.length === 0) {
      panel.setContent(`
{center}${fg(C.dim, "No subtasks")}{/center}` + `

{center}${fg(C.subtext, "Press ")}${fg(C.blue, "a")}${fg(C.subtext, " to add one")}{/center}`);
      return;
    }
    const lines = [];
    const searchQ = state.searchQuery.toLowerCase();
    let displayIdx = -1;
    for (let i = 0;i < subtasks.length; i++) {
      const s = subtasks[i];
      if (searchQ && state.leftPanel === "subtasks" && fuzzyScore(s.name, state.searchQuery) === 0)
        continue;
      const sel = state.leftPanel === "subtasks" && i === state.subtaskIdx;
      if (sel)
        displayIdx = lines.length;
      if (sel) {
        lines.push(selLine(` \u25B8 ${s.name} `));
      } else {
        lines.push(` ${statusLine(s.done, false, s.name)}`);
      }
    }
    panel.setContent(lines.join(`
`));
    if (displayIdx >= 0)
      ensureVisible(panel, displayIdx);
  }
  function updateTerminalPanel() {
    const proj = currentProject();
    const sess = proj ? state.sessions.get(proj.id) : undefined;
    if (sess && sess.exitCode === null) {
      const name = proj?.name ?? "Session";
      const dur = formatDuration(sess.startedAt);
      panels.terminal.setLabel(` ${ansi(C.peach, `\u2694 ${name}`)} ${ansi(C.dim, "\u2500\u2500")} ${ansi(C.text, dur)} ${ansi(C.green, "running")} `);
      panels.terminal.setContent(escapeBraces(state.termContent));
      const lines = state.termContent.split(`
`).length;
      panels.terminal.scrollTo(lines);
    } else if (sess && sess.exitCode !== null) {
      const name = proj?.name ?? "Session";
      panels.terminal.setLabel(` ${ansi(C.dim, `\u2694 ${name}`)} ${ansi(C.dim, "\u2500\u2500")} ${ansi(C.red, `exited (${sess.exitCode})`)} `);
      panels.terminal.setContent(escapeBraces(state.termContent));
      const lines = state.termContent.split(`
`).length;
      panels.terminal.scrollTo(lines);
    } else if (proj) {
      const tPath = latestTranscript(proj.id);
      if (tPath && existsSync6(tPath)) {
        try {
          const raw = readFileSync3(tPath, "utf-8");
          const content = replayTranscript(raw);
          panels.terminal.setLabel(` ${ansi(C.dim, "Last session output")} `);
          panels.terminal.setContent(escapeBraces(content));
          const lines = content.split(`
`).length;
          panels.terminal.scrollTo(lines);
        } catch {
          panels.terminal.setLabel(` ${ansi(C.dim, "Terminal")} `);
          panels.terminal.setContent(`
  No active session. Press enter to launch claude`);
        }
      } else {
        panels.terminal.setLabel(` ${ansi(C.dim, "Terminal")} `);
        panels.terminal.setContent(`
  No active session. Press enter to launch claude`);
      }
    } else {
      panels.terminal.setLabel(` ${ansi(C.dim, "Terminal")} `);
      panels.terminal.setContent(`
  No active session. Press enter to launch claude`);
    }
  }
  function ensureVisible(panel, lineIdx) {
    const lpos = panel.lpos;
    const h = lpos ? lpos.yl - lpos.yi : typeof panel.height === "number" ? panel.height : 10;
    const overhead = panel.iheight ?? 2;
    const innerHeight = h - overhead;
    if (innerHeight <= 0)
      return;
    panel.scrollTo(Math.max(0, lineIdx - Math.floor(innerHeight / 2)));
  }
  function renderStatusBar() {
    if (state.searchMode) {
      statusBar.setContent(fg(C.blue, ` / ${state.searchQuery}\u2588`));
    } else if (state.inputMode === "line") {
      statusBar.setContent(fg(C.peach, ` > ${inputBuffer}\u2588`));
    } else if (state.inputMode === "raw") {
      statusBar.setContent(fg(C.red, " PASSTHROUGH \u2014 Ctrl+] to exit"));
    } else if (isOnTerminal()) {
      const sess = currentSession();
      if (sess && sess.exitCode === null) {
        statusBar.setContent(fg(C.subtext, " h=back | i=input | I=raw | x=kill | j/k=scroll | G=bottom | ?=help"));
      } else {
        statusBar.setContent(fg(C.subtext, " h=back | c=commit | D=diff | P=push | L=transcript | ?=help"));
      }
    } else {
      if (state.cockpitMode) {
        statusBar.setContent(fg(C.subtext, " l=term | j/k=move | enter=launch | 0=expand | /=search | A=archive | s=sessions | ?=help"));
      } else {
        statusBar.setContent(fg(C.subtext, " Tab=cycle | l=term | j/k=move | 0=cockpit | /=search | e=desc | A=archive | s=sessions | ?=help"));
      }
    }
  }
  function renderAll() {
    sortProjects();
    clampIndices();
    renderHeader();
    renderStatusBar();
    const onTerm = isOnTerminal();
    if (state.cockpitMode) {
      setFocused(panels.projects, !onTerm);
    } else {
      for (const name of LEFT_PANELS) {
        const isFocused = !onTerm && state.leftPanel === name;
        setFocused(panels[name], isFocused);
      }
    }
    const termColor = onTerm ? C.peach : C.dim;
    panels.terminal.style.border = { fg: termColor };
    panels.terminal.style.label = { fg: termColor };
    if (state.cockpitMode) {
      const pColor = !onTerm ? C.mauve : C.dim;
      panels.projects.setLabel(` ${fg(pColor, "\u2694 Cockpit")} `);
    } else {
      const pColor = !onTerm && state.leftPanel === "projects" ? C.mauve : C.dim;
      const tColor = !onTerm && state.leftPanel === "tasks" ? C.mauve : C.dim;
      const sColor = !onTerm && state.leftPanel === "subtasks" ? C.mauve : C.dim;
      panels.projects.setLabel(` ${fg(pColor, "\u2694 Projects")} `);
      panels.tasks.setLabel(` ${fg(tColor, "Tasks")} `);
      panels.subtasks.setLabel(` ${fg(sColor, "Subtasks")} `);
    }
    if (state.cockpitMode) {
      renderCockpit();
    } else {
      renderProjects();
      renderTasks();
      renderSubtasks();
    }
    updateTerminalPanel();
    screen.render();
  }
  function switchPanel(dir) {
    if (dir === 1 && isOnLeft()) {
      state.panel = "terminal";
      const sess = currentSession();
      if (sess && sess.exitCode === null) {
        state.inputMode = "raw";
      }
    } else if (dir === -1 && isOnTerminal()) {
      state.panel = state.leftPanel;
      state.inputMode = false;
    }
    renderAll();
  }
  function cycleLeftPanel() {
    const idx = LEFT_PANELS.indexOf(state.leftPanel);
    const next = (idx + 1) % LEFT_PANELS.length;
    state.leftPanel = LEFT_PANELS[next];
    state.panel = state.leftPanel;
    renderAll();
  }
  function isProjectHidden(idx) {
    if (state.showArchived)
      return false;
    const p2 = state.data.projects[idx];
    return !!p2?.done && !state.sessions.has(p2.id);
  }
  function move(dir) {
    if (state.searchQuery) {
      moveFiltered(dir);
      return;
    }
    const len = listLength();
    if (len === 0)
      return;
    let next = currentIdx() + dir;
    if (state.leftPanel === "projects") {
      while (next >= 0 && next < len && isProjectHidden(next))
        next += dir;
    }
    if (next < 0 || next >= len)
      return;
    setCurrentIdx(next);
    if (state.leftPanel === "projects") {
      state.taskIdx = 0;
      state.subtaskIdx = 0;
      updateTermContentForProject();
      persistUI();
    } else if (state.leftPanel === "tasks") {
      state.subtaskIdx = 0;
    }
    renderAll();
  }
  function updateTermContentForProject() {
    const proj = currentProject();
    if (!proj)
      return;
    const sess = state.sessions.get(proj.id);
    if (sess) {
      state.termContent = snapshot(sess);
      state.termDirty = true;
    } else {
      state.termContent = "";
      state.termDirty = true;
    }
  }
  function scrollTerminal(dir) {
    const amount = dir === 1 ? 3 : -3;
    panels.terminal.scroll(amount);
    screen.render();
  }
  function toggleCurrent() {
    const proj = currentProject();
    if (state.leftPanel === "projects" && proj) {
      toggleDone(proj);
    } else if (state.leftPanel === "tasks") {
      const task = proj?.tasks[state.taskIdx];
      if (task)
        toggleDone(task);
    } else if (state.leftPanel === "subtasks") {
      const sub = proj?.tasks[state.taskIdx]?.subtasks[state.subtaskIdx];
      if (sub)
        toggleDone(sub);
    }
    save(state.data);
    renderAll();
  }
  function addItem() {
    if (modalOpen)
      return;
    modalOpen = true;
    const titles = {
      projects: "Add Project",
      tasks: "Add Task",
      subtasks: "Add Subtask"
    };
    showInputModal({
      screen,
      title: titles[state.leftPanel],
      onSubmit: (name) => {
        modalOpen = false;
        const proj = currentProject();
        if (state.leftPanel === "projects") {
          addProject(state.data, name);
          state.projectIdx = state.data.projects.length - 1;
          state.taskIdx = 0;
          state.subtaskIdx = 0;
        } else if (state.leftPanel === "tasks" && proj) {
          addTask(proj, name);
          state.taskIdx = proj.tasks.length - 1;
          state.subtaskIdx = 0;
        } else if (state.leftPanel === "subtasks") {
          const task = proj?.tasks[state.taskIdx];
          if (task) {
            addSubtask(task, name);
            state.subtaskIdx = task.subtasks.length - 1;
          }
        }
        save(state.data);
        renderAll();
      },
      onCancel: () => {
        modalOpen = false;
        renderAll();
      }
    });
  }
  function deleteItem() {
    if (modalOpen)
      return;
    const len = listLength();
    if (len === 0)
      return;
    modalOpen = true;
    let itemName = "";
    if (state.leftPanel === "projects")
      itemName = state.data.projects[state.projectIdx]?.name ?? "";
    else if (state.leftPanel === "tasks") {
      itemName = state.data.projects[state.projectIdx]?.tasks[state.taskIdx]?.name ?? "";
    } else {
      itemName = state.data.projects[state.projectIdx]?.tasks[state.taskIdx]?.subtasks[state.subtaskIdx]?.name ?? "";
    }
    showConfirmModal({
      screen,
      message: `${fg(C.text, "Delete ")}${fg(C.red, itemName)}${fg(C.text, "?")}`,
      onConfirm: () => {
        modalOpen = false;
        const proj = currentProject();
        if (state.leftPanel === "projects") {
          const delProj = state.data.projects[state.projectIdx];
          if (delProj) {
            const sess = state.sessions.get(delProj.id);
            if (sess) {
              killSession(sess);
              state.sessions.delete(delProj.id);
            }
          }
          removeProject(state.data, state.projectIdx);
        } else if (state.leftPanel === "tasks" && proj) {
          removeTask(proj, state.taskIdx);
          state.subtaskIdx = 0;
        } else if (state.leftPanel === "subtasks") {
          const task = proj?.tasks[state.taskIdx];
          if (task)
            removeSubtask(task, state.subtaskIdx);
        }
        save(state.data);
        renderAll();
      },
      onCancel: () => {
        modalOpen = false;
        renderAll();
      }
    });
  }
  function renameItem() {
    if (modalOpen)
      return;
    const len = listLength();
    if (len === 0)
      return;
    modalOpen = true;
    let currentName = "";
    if (state.leftPanel === "projects")
      currentName = state.data.projects[state.projectIdx]?.name ?? "";
    else if (state.leftPanel === "tasks") {
      currentName = state.data.projects[state.projectIdx]?.tasks[state.taskIdx]?.name ?? "";
    } else {
      currentName = state.data.projects[state.projectIdx]?.tasks[state.taskIdx]?.subtasks[state.subtaskIdx]?.name ?? "";
    }
    showInputModal({
      screen,
      title: "Rename",
      value: currentName,
      onSubmit: (name) => {
        modalOpen = false;
        const proj = currentProject();
        if (state.leftPanel === "projects" && proj)
          proj.name = name;
        else if (state.leftPanel === "tasks") {
          const task = proj?.tasks[state.taskIdx];
          if (task)
            task.name = name;
        } else if (state.leftPanel === "subtasks") {
          const sub = proj?.tasks[state.taskIdx]?.subtasks[state.subtaskIdx];
          if (sub)
            sub.name = name;
        }
        save(state.data);
        renderAll();
      },
      onCancel: () => {
        modalOpen = false;
        renderAll();
      }
    });
  }
  function launchTask() {
    const now = Date.now();
    if (now - lastLaunch < 1000) {
      log("launchTask: debounced");
      return;
    }
    lastLaunch = now;
    const proj = currentProject();
    log(`launchTask: proj=${proj?.name} panel=${state.panel} leftPanel=${state.leftPanel}`);
    if (!proj)
      return;
    if (state.sessions.has(proj.id)) {
      const sess2 = state.sessions.get(proj.id);
      state.termContent = snapshot(sess2);
      state.panel = "terminal";
      if (sess2.exitCode === null)
        state.inputMode = "raw";
      renderAll();
      return;
    }
    let taskDesc = "";
    const task = proj.tasks[state.taskIdx];
    const subtask = task?.subtasks[state.subtaskIdx];
    if (state.leftPanel === "subtasks" && subtask && task) {
      taskDesc = `${task.name}: ${subtask.name}`;
      if (task.description)
        taskDesc += `

Context: ${task.description}`;
    } else if (state.leftPanel === "tasks" && task) {
      taskDesc = task.name;
      if (task.subtasks.length > 0) {
        const subs = task.subtasks.filter((s) => !s.done).map((s) => s.name);
        if (subs.length > 0)
          taskDesc += ` (subtasks: ${subs.join(", ")})`;
      }
      if (task.description)
        taskDesc += `

Context: ${task.description}`;
    } else if (state.leftPanel === "projects") {
      const pending = proj.tasks.filter((t) => !t.done).map((t) => t.name);
      taskDesc = pending.length > 0 ? `Work on ${proj.name}. Pending tasks: ${pending.join(", ")}` : `Work on ${proj.name}`;
    }
    const cwd = proj.path || process.env.HOME || "~";
    save(state.data);
    const { cols, rows } = termDims();
    const sess = launchSession(proj.name, proj.id, cwd, taskDesc, cols, rows, (content) => {
      if (currentProject()?.id === proj.id) {
        state.termContent = content;
        state.termDirty = true;
      }
    }, (code) => {
      const p2 = state.data.projects.find((p3) => p3.id === proj.id);
      try {
        execFileSync2("notify-send", ["Quest Log", `${p2?.name ?? "Session"} finished`]);
      } catch (e) {
        logError("notify-send", e);
      }
      if (p2 && proj.id === currentProject()?.id) {
        state.termDirty = true;
        renderAll();
        if (!modalOpen) {
          modalOpen = true;
          showConfirmModal({
            screen,
            message: `${fg(C.text, "Mark ")}${fg(C.peach, p2.name)}${fg(C.text, " done?")}`,
            onConfirm: () => {
              modalOpen = false;
              const task2 = p2.tasks[state.taskIdx];
              if (task2 && !task2.done) {
                toggleDone(task2);
                save(state.data);
              }
              renderAll();
            },
            onCancel: () => {
              modalOpen = false;
              renderAll();
            }
          });
        }
      }
    });
    if (sess) {
      log(`launchTask: session created, switching to terminal`);
      state.sessions.set(proj.id, sess);
      proj.lastActivity = Date.now();
      save(state.data);
      state.termContent = "";
      state.panel = "terminal";
      state.inputMode = "raw";
      renderAll();
    } else {
      log(`launchTask: session failed to create`);
    }
  }
  function enterLineInput() {
    const sess = currentSession();
    log(`enterLineInput: sess=${!!sess} exitCode=${sess?.exitCode} panel=${state.panel}`);
    if (!sess || sess.exitCode !== null)
      return;
    state.inputMode = "line";
    inputBuffer = "";
    renderStatusBar();
    screen.render();
  }
  function enterRawInput() {
    const sess = currentSession();
    log(`enterRawInput: sess=${!!sess} exitCode=${sess?.exitCode} panel=${state.panel}`);
    if (!sess || sess.exitCode !== null)
      return;
    state.inputMode = "raw";
    renderStatusBar();
    screen.render();
  }
  function exitInputMode() {
    state.inputMode = false;
    inputBuffer = "";
    renderAll();
  }
  function submitLineInput() {
    const text = inputBuffer.trim();
    state.inputMode = false;
    inputBuffer = "";
    const sess = currentSession();
    log(`submitLineInput: text=${JSON.stringify(text)} sess=${!!sess} exitCode=${sess?.exitCode}`);
    if (sess && text) {
      writeToSession(sess, text + `
`);
    }
    renderAll();
  }
  function confirmKillSession() {
    const sess = currentSession();
    if (!sess || modalOpen)
      return;
    modalOpen = true;
    const proj = currentProject();
    showConfirmModal({
      screen,
      message: `${fg(C.text, "Kill session ")}${fg(C.peach, proj?.name ?? "")}${fg(C.text, "?")}`,
      onConfirm: () => {
        modalOpen = false;
        killSession(sess);
        state.sessions.delete(sess.projectId);
        state.termContent = "";
        state.panel = state.leftPanel;
        renderAll();
      },
      onCancel: () => {
        modalOpen = false;
        renderAll();
      }
    });
  }
  function showTranscript() {
    const proj = currentProject();
    if (!proj)
      return;
    if (state.sessions.has(proj.id))
      return;
    const tPath = latestTranscript(proj.id);
    if (!tPath || !existsSync6(tPath))
      return;
    state.panel = "terminal";
    state.termContent = "";
    renderAll();
  }
  function postTaskAction(action) {
    const proj = currentProject();
    if (!proj?.path)
      return;
    if (state.sessions.has(proj.id))
      return;
    const cwd = proj.path;
    if (action === "commit") {
      const { cols, rows } = termDims();
      const sess = launchGitSession(proj.id, cwd, ["bash", "-c", "git add -A && git commit"], cols, rows, (content) => {
        if (currentProject()?.id === proj.id) {
          state.termContent = content;
          state.termDirty = true;
        }
      }, () => {
        state.sessions.delete(proj.id);
        refreshGitCache(state.data.projects);
        state.termDirty = true;
        renderAll();
      });
      if (sess) {
        state.sessions.set(proj.id, sess);
        state.termContent = "";
        state.panel = "terminal";
        renderAll();
      }
      return;
    }
    if (action === "diff") {
      try {
        const output = execFileSync2("git", ["-C", cwd, "diff", "--stat"], { encoding: "utf-8" });
        state.termContent = output || "  No changes";
        panels.terminal.setLabel(` ${ansi(C.blue, "git diff --stat")} `);
        state.termDirty = true;
        renderAll();
      } catch (e) {
        logError("git diff", e);
      }
      return;
    }
    if (action === "push") {
      try {
        const result = Bun.spawnSync({
          cmd: ["git", "-C", cwd, "push"],
          stdout: "pipe",
          stderr: "pipe"
        });
        const stdout = result.stdout.toString();
        const stderr = result.stderr.toString();
        const output = (stdout + stderr).trim();
        if (result.exitCode === 0) {
          state.termContent = output || "  Pushed successfully";
          panels.terminal.setLabel(` ${ansi(C.green, "git push")} `);
        } else {
          state.termContent = output || "  Push failed";
          panels.terminal.setLabel(` ${ansi(C.red, "git push failed")} `);
        }
        state.termDirty = true;
        renderAll();
      } catch (e) {
        state.termContent = e?.message || "  Push failed";
        panels.terminal.setLabel(` ${ansi(C.red, "git push failed")} `);
        state.termDirty = true;
        renderAll();
      }
      return;
    }
  }
  function reorder(dir) {
    const idx = currentIdx();
    const newIdx = idx + dir;
    if (state.leftPanel === "projects") {
      const arr = state.data.projects;
      if (newIdx < 0 || newIdx >= arr.length)
        return;
      swapItems(arr, idx, newIdx);
      state.projectIdx = newIdx;
    } else if (state.leftPanel === "tasks") {
      const proj = currentProject();
      if (!proj)
        return;
      if (newIdx < 0 || newIdx >= proj.tasks.length)
        return;
      swapItems(proj.tasks, idx, newIdx);
      state.taskIdx = newIdx;
    } else {
      const task = currentProject()?.tasks[state.taskIdx];
      if (!task)
        return;
      if (newIdx < 0 || newIdx >= task.subtasks.length)
        return;
      swapItems(task.subtasks, idx, newIdx);
      state.subtaskIdx = newIdx;
    }
    save(state.data);
    renderAll();
  }
  function yankName() {
    let name = "";
    if (state.leftPanel === "projects")
      name = currentProject()?.name ?? "";
    else if (state.leftPanel === "tasks")
      name = currentProject()?.tasks[state.taskIdx]?.name ?? "";
    else
      name = currentProject()?.tasks[state.taskIdx]?.subtasks[state.subtaskIdx]?.name ?? "";
    if (!name)
      return;
    try {
      execFileSync2("wl-copy", [], { input: name });
    } catch (e) {
      logError("wl-copy", e);
    }
    statusBar.setContent(fg(C.green, " yanked!"));
    screen.render();
    setTimeout(() => {
      renderStatusBar();
      screen.render();
    }, 1500);
  }
  function persistUI() {
    saveUIState({
      projectIdx: state.projectIdx,
      taskIdx: state.taskIdx,
      subtaskIdx: state.subtaskIdx,
      leftPanel: state.leftPanel,
      panel: state.panel,
      showArchived: state.showArchived,
      cockpitMode: state.cockpitMode
    });
  }
  function editDescription() {
    if (modalOpen)
      return;
    if (state.leftPanel !== "tasks")
      return;
    const proj = currentProject();
    const task = proj?.tasks[state.taskIdx];
    if (!task)
      return;
    modalOpen = true;
    showInputModal({
      screen,
      title: "Description",
      value: task.description ?? "",
      onSubmit: (val) => {
        modalOpen = false;
        task.description = val;
        save(state.data);
        renderAll();
      },
      onCancel: () => {
        modalOpen = false;
        renderAll();
      }
    });
  }
  function toggleArchived() {
    state.showArchived = !state.showArchived;
    clampIndices();
    persistUI();
    renderAll();
  }
  function showSessions() {
    if (modalOpen)
      return;
    if (state.sessions.size === 0)
      return;
    modalOpen = true;
    showSessionsOverlay({
      screen,
      sessions: state.sessions,
      projects: state.data.projects,
      onSelect: (projectId) => {
        modalOpen = false;
        const idx = state.data.projects.findIndex((p2) => p2.id === projectId);
        if (idx !== -1) {
          state.projectIdx = idx;
          state.taskIdx = 0;
          state.subtaskIdx = 0;
          const sess = state.sessions.get(projectId);
          if (sess) {
            state.termContent = snapshot(sess);
            state.panel = "terminal";
          }
        }
        renderAll();
      },
      onClose: () => {
        modalOpen = false;
        renderAll();
      }
    });
  }
  function enterSearch() {
    state.searchMode = true;
    state.searchQuery = "";
    renderStatusBar();
    screen.render();
  }
  function exitSearch() {
    state.searchMode = false;
    state.searchQuery = "";
    filteredIndices = [];
    renderAll();
  }
  function rescan() {
    const repos = scanRepos();
    const tracked = new Set(state.data.projects.map((p2) => p2.path).filter(Boolean));
    for (const repo of repos) {
      if (!tracked.has(repo.path)) {
        addProject(state.data, repo.name, { path: repo.path, save: false });
      }
    }
    refreshGitCache(state.data.projects);
    save(state.data);
    renderAll();
  }
  function showHelp() {
    if (modalOpen)
      return;
    modalOpen = true;
    showHelpOverlay({
      screen,
      onClose: () => {
        modalOpen = false;
        renderAll();
      }
    });
  }
  screen.on("keypress", (_ch, key) => {
    if (modalOpen)
      return;
    if (state.inputMode === "raw") {
      if (key.ctrl && key.name === "]") {
        exitInputMode();
        return;
      }
      const sess = currentSession();
      const seq = key.sequence || key.ch || "";
      log(`raw input: key=${key.name} ch=${JSON.stringify(key.ch)} seq=${JSON.stringify(seq)} sess=${!!sess} exitCode=${sess?.exitCode}`);
      if (sess && sess.exitCode === null) {
        if (seq)
          writeToSession(sess, seq);
      }
      return;
    }
    if (state.inputMode === "line") {
      if (key.name === "escape") {
        exitInputMode();
        return;
      }
      if (key.name === "backspace") {
        inputBuffer = inputBuffer.slice(0, -1);
        renderStatusBar();
        screen.render();
        return;
      }
      if (key.name === "return" || key.name === "enter") {
        submitLineInput();
        return;
      }
      if (key.ch && key.ch.length === 1) {
        inputBuffer += key.ch;
        renderStatusBar();
        screen.render();
        return;
      }
      return;
    }
    if (state.searchMode) {
      if (key.name === "escape") {
        exitSearch();
        return;
      }
      if (key.name === "backspace") {
        state.searchQuery = state.searchQuery.slice(0, -1);
        filteredIndices = computeFilteredIndices();
        renderAll();
        renderStatusBar();
        screen.render();
        return;
      }
      if (key.name === "return" || key.name === "enter") {
        state.searchMode = false;
        renderStatusBar();
        screen.render();
        return;
      }
      if (key.ch && key.ch.length === 1) {
        state.searchQuery += key.ch;
        filteredIndices = computeFilteredIndices();
        renderAll();
        renderStatusBar();
        screen.render();
        return;
      }
      return;
    }
    if (key.ch === "g") {
      if (gPending) {
        gPending = false;
        if (isOnTerminal()) {
          panels.terminal.scrollTo(0);
          screen.render();
        } else {
          setCurrentIdx(0);
          if (state.leftPanel === "projects") {
            state.taskIdx = 0;
            state.subtaskIdx = 0;
            updateTermContentForProject();
          } else if (state.leftPanel === "tasks") {
            state.subtaskIdx = 0;
          }
          renderAll();
        }
        return;
      }
      gPending = true;
      setTimeout(() => {
        gPending = false;
      }, 500);
      return;
    }
    gPending = false;
    if (isOnTerminal()) {
      switch (key.ch || key.name) {
        case "i":
          enterLineInput();
          return;
        case "I":
          enterRawInput();
          return;
        case "x":
          confirmKillSession();
          return;
        case "j":
        case "down":
          scrollTerminal(1);
          return;
        case "k":
        case "up":
          scrollTerminal(-1);
          return;
        case "h":
        case "left":
          switchPanel(-1);
          return;
        case "G":
          panels.terminal.setScrollPerc(100);
          screen.render();
          return;
        case "c":
          postTaskAction("commit");
          return;
        case "D":
          postTaskAction("diff");
          return;
        case "P":
          postTaskAction("push");
          return;
        case "L":
          showTranscript();
          return;
        case "?":
          showHelp();
          return;
        case "q":
          cleanupSessions(state);
          save(state.data);
          persistUI();
          process.exit(0);
      }
      return;
    }
    if (key.ch && key.ch >= "1" && key.ch <= "9" && isOnLeft()) {
      const target = parseInt(key.ch, 10) - 1;
      const len = listLength();
      if (target < len) {
        setCurrentIdx(target);
        if (state.leftPanel === "projects") {
          state.taskIdx = 0;
          state.subtaskIdx = 0;
          updateTermContentForProject();
        } else if (state.leftPanel === "tasks") {
          state.subtaskIdx = 0;
        }
        renderAll();
      }
      return;
    }
    switch (key.ch || key.name) {
      case "h":
      case "left":
        break;
      case "l":
      case "right":
        switchPanel(1);
        break;
      case "j":
      case "down":
        move(1);
        break;
      case "k":
      case "up":
        move(-1);
        break;
      case "G":
        setCurrentIdx(Math.max(0, listLength() - 1));
        if (state.leftPanel === "projects")
          updateTermContentForProject();
        renderAll();
        break;
      case "return":
      case "enter":
        launchTask();
        break;
      case "space":
        toggleCurrent();
        break;
      case "a":
        addItem();
        break;
      case "d":
        deleteItem();
        break;
      case "r":
        renameItem();
        break;
      case "S":
        rescan();
        break;
      case "J":
        reorder(1);
        break;
      case "K":
        reorder(-1);
        break;
      case "y":
        yankName();
        break;
      case "/":
        enterSearch();
        break;
      case "tab":
        if (!state.cockpitMode)
          cycleLeftPanel();
        break;
      case "A":
        toggleArchived();
        break;
      case "e":
        editDescription();
        break;
      case "s":
        showSessions();
        break;
      case "L":
        showTranscript();
        break;
      case "0":
        toggleCockpitMode();
        break;
      case "?":
        showHelp();
        break;
      case "q":
        save(state.data);
        persistUI();
        process.exit(0);
    }
  });
  screen.on("resize", () => {
    const { cols, rows } = termDims();
    for (const [, sess] of state.sessions) {
      resizeSession(sess, cols, rows);
    }
    renderAll();
  });
  setInterval(() => {
    if (state.termDirty) {
      state.termDirty = false;
      updateTerminalPanel();
      screen.render();
    }
  }, 50);
  setInterval(() => {
    if (state.sessions.size > 0) {
      renderHeader();
      updateTerminalPanel();
      screen.render();
    }
  }, 1000);
  watch(DATA_PATH, { persistent: false }, () => {
    if (Date.now() - lastSaveTs < 500)
      return;
    const fresh = load();
    state.data = fresh;
    refreshGitCache(state.data.projects);
    renderAll();
  });
  applyCockpitLayout();
  renderAll();
}

// src/seed.ts
import { readFileSync as readFileSync4, existsSync as existsSync7 } from "fs";
import { join as join6 } from "path";
import { homedir as homedir5 } from "os";
import { randomUUID as randomUUID2 } from "crypto";
var CONFIG_PATH = join6(homedir5(), ".config", "quest-log", "seed.json");
function buildTask(t) {
  return {
    id: randomUUID2(),
    name: t.name,
    done: t.done ?? false,
    subtasks: (t.subtasks ?? []).map((s) => {
      const sub = typeof s === "string" ? { name: s, done: false } : { name: s.name, done: s.done ?? false };
      return { id: randomUUID2(), ...sub };
    })
  };
}
function buildProject(sp, repoMap) {
  const repo = sp.repo ? repoMap.get(sp.repo) : undefined;
  return {
    id: randomUUID2(),
    name: sp.name,
    done: sp.done ?? false,
    path: repo?.path,
    type: sp.type ?? (repo ? "code" : "other"),
    tasks: (sp.tasks ?? []).map(buildTask)
  };
}
function seedData(repos) {
  const repoMap = new Map(repos.map((r) => [r.name, r]));
  const projects = [];
  let config = {};
  if (existsSync7(CONFIG_PATH)) {
    try {
      config = JSON.parse(readFileSync4(CONFIG_PATH, "utf-8"));
    } catch {}
  }
  const seededRepos = new Set;
  for (const sp of config.projects ?? []) {
    projects.push(buildProject(sp, repoMap));
    if (sp.repo)
      seededRepos.add(sp.repo);
  }
  for (const repo of repos) {
    if (seededRepos.has(repo.name))
      continue;
    projects.push({
      id: randomUUID2(),
      name: repo.name,
      done: false,
      path: repo.path,
      type: "code",
      tasks: []
    });
  }
  return { projects };
}

// src/main.ts
if (!process.env.TERM?.startsWith("xterm"))
  process.env.TERM = "xterm-256color";
var repos = scanRepos();
var data = load();
if (data.projects.length === 0) {
  data = seedData(repos);
  save(data);
} else {
  const tracked = new Set(data.projects.map((p2) => p2.path).filter(Boolean));
  let added = false;
  for (const repo of repos) {
    if (!tracked.has(repo.path)) {
      addProject(data, repo.name, { path: repo.path, save: false });
      added = true;
    }
  }
  if (added)
    save(data);
}
var screen = createScreen();
var header = createHeader(screen);
var statusBar = createStatusBar(screen);
var projectsPanel = createPanel({
  parent: screen,
  label: "\u2694 Projects",
  top: 1,
  left: 0,
  width: "30%",
  height: "34%-1"
});
var tasksPanel = createPanel({
  parent: screen,
  label: "Tasks",
  top: "34%",
  left: 0,
  width: "30%",
  height: "33%"
});
var subtasksPanel = createPanel({
  parent: screen,
  label: "Subtasks",
  top: "67%",
  left: 0,
  width: "30%",
  height: "33%-1"
});
var terminalPanel = createTerminalPanel(screen);
var uiState = loadUIState();
var state = {
  data,
  panel: uiState.panel === "terminal" ? "projects" : uiState.panel,
  leftPanel: uiState.leftPanel,
  projectIdx: Math.min(uiState.projectIdx, Math.max(0, data.projects.length - 1)),
  taskIdx: uiState.taskIdx,
  subtaskIdx: uiState.subtaskIdx,
  sessions: new Map,
  inputMode: false,
  searchMode: false,
  searchQuery: "",
  termContent: "",
  termDirty: false,
  showArchived: uiState.showArchived,
  cockpitMode: uiState.cockpitMode
};
setupPanels(screen, {
  projects: projectsPanel,
  tasks: tasksPanel,
  subtasks: subtasksPanel,
  terminal: terminalPanel
}, header, statusBar, state, repos);
screen.key(["C-c"], () => {
  cleanupSessions(state);
  save(state.data);
  saveUIState({
    projectIdx: state.projectIdx,
    taskIdx: state.taskIdx,
    subtaskIdx: state.subtaskIdx,
    leftPanel: state.leftPanel,
    panel: state.panel,
    showArchived: state.showArchived,
    cockpitMode: state.cockpitMode
  });
  process.exit(0);
});
