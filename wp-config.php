<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ipstudija');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '7P5pD7wSQN6AQ::!*,xtUbKR>a5blL9m tURf]>9UWfGEkzX{h[H[VSQ{ W,-K/e');
define('SECURE_AUTH_KEY',  '6@30*z*XnMx%nV6p;rf*qhJ~UYycA|I$[/egyJC;fwLaa-lzjr61EUU:(7o{T ]J');
define('LOGGED_IN_KEY',    'ecn4NF3s*X&a.6wR>^t^cYAg^ .=0>Nl[O6@b[[I0Pg@1L)50wp4+9i7*R1Yo6O9');
define('NONCE_KEY',        '.3jxOooFVHF2,vy|X==a9k+!J0ZU0]jk42UZjJiU@])uH.9aK_[V]s>]|zFz)<cc');
define('AUTH_SALT',        'HG2]AC=2VpF4;jQ@f G@cuQ(8_T(Q<JmaLhV0c/xy%V46l)=in +c[a!G!F?o5H6');
define('SECURE_AUTH_SALT', '^*%<Sz+@110C{)+Fk4XDpk.f!!#sjF<Z$63SlM>W-FDMLi4R% )~,<ph5@5E%8PW');
define('LOGGED_IN_SALT',   '0&/SW}#nUc*o};*xN #(I+62FY`Bfn/[iOz}*/v8?3MSk[5PLa| yVb, ]jhxpW-');
define('NONCE_SALT',       'Wd3s3m%?$J|4:&W(4P&tg-HCWvn2lV.7jq3Mybpgd%%0Gw(a8lqY@{mqO]0+@.}u');
define('WP_HOME','/wp-api-react-master/ipstudija/');
define('WP_SITEURL','/wp-api-react-master/ipstudija/');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_agne_test_DB';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
