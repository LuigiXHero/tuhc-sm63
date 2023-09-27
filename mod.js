let logger = null
let store = null

const css_wh = `
.whdesc {
    font-family: Verdana;
}
`

module.exports = {
    title: "Super Mario 63",
    summary: "Play Super Mario 63 in the Unofficial Homestuck Collection.",
    author: "Runouw (<a href='http://runouw.com/index.php'>Runouw.com</a>), LuigiXHero (<a href='https://www.youtube.com/channel/UC595aTsMmIDD5IW703IuPhw'>Youtube Channel</a>), koba (<a href='https://kobacat.com/'>kobacat.com</a>)",

    description: `<p>This mod adds a playable Super Mario 63 to the Unofficial Homestuck Collection, launchable from the home screen.</p>
	
	<ol>
	<li>Super Mario 63 created by Runouw</li>
	<li>This is forked off of the doom triple pack mod from koba</li>
	</ol>`,

    computed(api){

        logger = api.logger
        store = api.store

        store.set("filetype", store.get("filetype", "swf"))

        computed = { 
            styles: []
        }

        computed.styles.push(
            {body: css_wh}
        )

        return computed
    },
	
	edit(archive) {
            archive.tweaks.modHomeRowItems.push({
                href: "/page/c=[S] Super Mario 63/m=assets%3A%2F%2Fmods%2Ftuhc-sm63%2Fswf%2Fsm632010.swf/b=|CONTROLS|<br><br>WALK LEFT - LEFT ARROW KEY<br>WALK RIGHT - RIGHT ARROW KEY<br>JUMP - UP ARROW KEY<br>DIVE - DOWN ARROW KEY<br>TALK AND GROUND POUND - Z<br>SPIN ATTACK - X<br>USE FLUDD - C OR SPACE BAR<br>SWAP FLUDD - SHIFT<br>PAUSE - P",
                thumbsrc: "/mods/tuhc-sm63/img/sm63.png",
                title: '[S] Super Mario 63',
                description: `Play the legendary flash game!`
            })
	},

}