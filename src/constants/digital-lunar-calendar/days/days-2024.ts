import lunarPhasesCodes from '../lunar-phases-codes';

const {
  newMoon,
  firstQuarterMoon,
  fullMoon,
  thirdQuarterMoon,
  xc81,
  xc82,
  xc83,
  xc84,
  xc85,
  xc86,
  xc87,
  xc88,
  xc71,
  xc72,
  xc73,
  xc74,
  xc75,
  xc76,
  xc77,
  xc61,
  xc62,
  xc63,
  xc64,
  xc65,
  xc66,
  xc51,
  xc52,
  xc53,
  xc54,
  xc55,
  xg81,
  xg82,
  xg83,
  xg84,
  xg85,
  xg86,
  xg87,
  xg88,
  xg71,
  xg72,
  xg73,
  xg74,
  xg75,
  xg76,
  xg77,
  xg61,
  xg62,
  xg63,
  xg64,
  xg65,
  xg66,
  xg51,
  xg52,
  xg53,
  xg54,
  xg55,
  ng81,
  ng82,
  ng83,
  ng84,
  ng85,
  ng86,
  ng87,
  ng88,
  ng71,
  ng72,
  ng73,
  ng74,
  ng75,
  ng76,
  ng77,
  ng61,
  ng62,
  ng63,
  ng64,
  ng65,
  ng66,
  ng51,
  ng52,
  ng53,
  ng54,
  ng55,
  nc81,
  nc82,
  nc83,
  nc84,
  nc85,
  nc86,
  nc87,
  nc88,
  nc71,
  nc72,
  nc73,
  nc74,
  nc75,
  nc76,
  nc77,
  nc61,
  nc62,
  nc63,
  nc64,
  nc65,
  nc66,
  nc51,
  nc52,
  nc53,
  nc54,
  nc55
} = lunarPhasesCodes;

const days2024 = {
  // Previous year:
  101: '',
  102: '',
  103: '',
  104: '',
  105: '',
  106: '',
  107: '',
  108: '',
  109: '',
  110: '',
  111: '',
  112: '',
  113: '',
  114: '',
  115: '',
  116: '',
  117: '',
  118: '',
  119: '',
  120: '',
  121: '',
  122: '',
  123: '',
  124: '',
  125: '',
  126: '',
  127: '',
  128: '',
  129: '',
  130: '',
  131: '',

  201: '',
  202: '',
  203: '',
  204: '',
  205: '',
  206: '',
  207: '',
  208: '',
  209: '',
  210: '',
  211: '',
  212: '',
  213: '',
  214: '',
  215: '',
  216: '',
  217: '',
  218: '',
  219: '',
  220: '',
  221: '',
  222: '',
  223: '',
  224: '',
  225: '',
  226: '',
  227: '',
  228: '',

  301: '',
  302: '',
  303: '',
  304: '',
  305: '',
  306: '',
  307: '',
  308: '',
  309: '',
  310: '',
  311: '',
  312: '',
  313: '',
  314: '',
  315: '',
  316: '',
  317: '',
  318: '',
  319: '',
  320: '',
  321: '',
  322: '',
  323: '',
  324: '',
  325: '',
  326: '',
  327: '',
  328: '',
  329: '',
  330: '',
  331: '',

  401: '',
  402: '',
  403: '',
  404: '',
  405: '',
  406: '',
  407: '',
  408: '',
  409: '',
  410: '',
  411: '',
  412: '',
  413: '',
  414: '',
  415: '',
  416: '',
  417: '',
  418: '',
  419: '',
  420: '',
  421: '',
  422: '',
  423: '',
  424: '',
  425: '',
  426: '',
  427: '',
  428: '',
  429: '',
  430: '',

  501: '',
  502: '',
  503: '',
  504: '',
  505: '',
  506: '',
  507: '',
  508: '',
  509: '',
  510: '',
  511: '',
  512: '',
  513: '',
  514: '',
  515: '',
  516: '',
  517: '',
  518: '',
  519: '',
  520: '',
  521: '',
  522: '',
  523: '',
  524: '',
  525: '',
  526: '',
  527: '',
  528: '',
  529: '',
  530: '',
  531: '',

  601: '',
  602: '',
  603: '',
  604: '',
  605: '',
  606: '',
  607: '',
  608: '',
  609: '',
  610: '',
  611: '',
  612: '',
  613: '',
  614: '',
  615: '',
  616: '',
  617: '',
  618: '',
  619: '',
  620: '',
  621: '',
  622: '',
  623: '',
  624: '',
  625: '',
  626: '',
  627: '',
  628: '',
  629: '',
  630: '',

  701: '',
  702: '',
  703: '',
  704: '',
  705: '',
  706: '',
  707: '',
  708: '',
  709: '',
  710: '',
  711: '',
  712: '',
  713: '',
  714: '',
  715: '',
  716: '',
  717: '',
  718: '',
  719: '',
  720: '',
  721: '',
  722: '',
  723: '',
  724: '',
  725: '',
  726: '',
  727: '',
  728: '',
  729: '',
  730: '',
  731: '',

  801: '',
  802: '',
  803: '',
  804: '',
  805: '',
  806: '',
  807: '',
  808: '',
  809: '',
  810: '',
  811: '',
  812: '',
  813: '',
  814: '',
  815: '',
  816: '',
  817: '',
  818: '',
  819: '',
  820: '',
  821: '',
  822: '',
  823: '',
  824: '',
  825: '',
  826: '',
  827: '',
  828: '',
  829: '',
  830: '',
  831: '',

  901: '',
  902: '',
  903: '',
  904: '',
  905: '',
  906: '',
  907: '',
  908: '',
  909: '',
  910: '',
  911: '',
  912: '',
  913: '',
  914: '',
  915: '',
  916: '',
  917: '',
  918: '',
  919: '',
  920: '',
  921: '',
  922: '',
  923: '',
  924: '',
  925: '',
  926: '',
  927: '',
  928: '',
  929: '',
  930: '',

  1001: '',
  1002: '',
  1003: '',
  1004: '',
  1005: '',
  1006: '',
  1007: '',
  1008: '',
  1009: '',
  1010: '',
  1011: '',
  1012: '',
  1013: '',
  1014: '',
  1015: '',
  1016: '',
  1017: '',
  1018: '',
  1019: '',
  1020: '',
  1021: '',
  1022: '',
  1023: '',
  1024: '',
  1025: '',
  1026: '',
  1027: '',
  1028: '',
  1029: '',
  1030: '',
  1031: '',

  1101: '',
  1102: '',
  1103: '',
  1104: '',
  1105: '',
  1106: '',
  1107: '',
  1108: '',
  1109: '',
  1110: '',
  1111: '',
  1112: '',
  1113: '',
  1114: '',
  1115: '',
  1116: '',
  1117: '',
  1118: '',
  1119: '',
  1120: '',
  1121: '',
  1122: '',
  1123: '',
  1124: '',
  1125: '',
  1126: '',
  1127: '',
  1128: '',
  1129: '',
  1130: '',

  1201: '',
  1202: '',
  1203: '',
  1204: '',
  1205: '',
  1206: '',
  1207: '',
  1208: '',
  1209: '',
  1210: '',
  1211: '',
  1212: '',
  1213: '',
  1214: '',
  1215: '',
  1216: '',
  1217: '',
  1218: '',
  1219: '',
  1220: '',
  1221: '',
  1222: '',
  1223: '',
  1224: '',
  1225: '',
  1226: '',
  1227: '',
  1228: '',
  1229: '',
  1230: '',
  1231: ''
  // Following year:
};

export default days2024;
