(this.webpackJsonpbuilder=this.webpackJsonpbuilder||[]).push([[0],{28:function(e,t,n){e.exports=n(41)},37:function(e){e.exports=JSON.parse('{"category_types":["classes","enums","structs","panels"],"structure":{"globals":{"name":"Globals","pageType":"function","subcategories":{"sKore.PersistentData":{"name":"sKore.PersistentData","description":"Creates a PersistentData using the given file.","parameters":[{"type":"string","name":"path","description":"The path of the file to store the data in."}],"realm":"shared","item":"function"}},"item":"category"},"classes":{"name":"Classes","pageType":"function","subcategories":{"PersistentData":{"name":"PersistentData","pageType":"function","subcategories":{"PersistentData:load":{"name":"PersistentData:load","description":"Loads/reloads data from the data file.","returns":[{"type":"PersistentData","description":"Returns itself."}],"realm":"shared","item":"function"},"PersistentData:save":{"name":"PersistentData:save","description":"Stores data in the data file.","returns":[{"type":"PersistentData","description":"Returns itself."}],"realm":"shared","item":"function"}},"item":"category","description":"Used to store persistent data between different sessions and servers.","fields":[{"type":"string","key":"path","description":"Path of the file the data is stored in."},{"type":"string","key":"path","description":"Path of the file the data is stored in."},{"type":"string","key":"path","description":"Path of the file the data is stored in."},{"type":"string","key":"path","description":"Path of the file the data is stored in."}]}},"item":"category"},"libraries":{"name":"Libraries","pageType":"function","subcategories":{"achievements":{"name":"achievements","pageType":"function","subcategories":{"achievements.BalloonPopped":{"name":"achievements.BalloonPopped","description":"Adds one to the count of balloons burst. Once this count reaches 1000,\\nthe \'Popper\' achievement is unlocked.","realm":"client","item":"function"},"achievements.Count":{"name":"achievements.Count","description":"Returns the amount of achievements in Garry\'s Mod.","returns":[{"type":"number","description":"The amount of achievements available."}],"realm":"client","item":"function"},"achievements.EatBall":{"name":"achievements.EatBall","description":"Adds one to the count of balls eaten. Once this count reaches 200,\\nthe \'Ball Eater\' achievement is unlocked.","realm":"client","item":"function"},"achievements.GetCount":{"name":"achievements.GetCount","description":"Retrieves progress of given achievement.","parameters":[{"type":"number","name":"achievementID","description":"The ID of achievement to retrieve progress of. Note: IDs start from 0, not 1."}],"returns":[{"type":"number","description":"The achievement progress for the given achievementID. Note: Non-progress based achievements will have 0, even if they are completed."}],"examples":["Will print achievement progress for all of your achievements into\\nconsole.\\n```lua\\nfor i = 0, achievements.Count() - 1 do\\n    print( achievements.GetCount(i) )\\nend\\n```"],"realm":"client","item":"function"},"achievements.GetDesc":{"name":"achievements.GetDesc","description":"Retrieves description of given achievement.","parameters":[{"type":"number","name":"achievementID","description":"The ID of achievement to retrieve progress of. Note: IDs start from 0, not 1."},{"type":"string","name":"Description","description":"of an achievement."}],"examples":["Will print achievement descriptions for all of your achievements\\ninto console.\\n```lua\\nfor i = 0, achievements.Count() - 1 do\\n    print( achievements.GetDesc(i) )\\nend\\n```"],"realm":"client","item":"function"},"achievements.GetGoal":{"name":"achievements.GetGoal","description":"Retrieves progress goal of given achievement.","parameters":[{"type":"number","name":"achievementID","description":"The ID of achievement to retrieve progress of. Note: IDs start from 0, not 1."}],"returns":[{"type":"number","description":"Progress goal of an achievement."}],"realm":"client","item":"function"},"achievements.GetName":{"name":"achievements.GetName","description":"Retrieves name of given achievement.","parameters":[{"type":"number","name":"achievementID","description":"The ID of achievement to retrieve progress of. Note: IDs start from 0, not 1."}],"returns":[{"type":"string","description":"Name of an achievement."}],"realm":"client","item":"function"},"achievements.IncBaddies":{"name":"achievements.IncBaddies","description":"Adds one to the count of baddies killed. Once this count reaches 1000,\\nthe \'War Zone\' achievement is unlocked.","realm":"client","item":"function"},"achievements.IncBystander":{"name":"achievements.IncBystander","description":"Adds one to the count of innocent animals killed. Once this count reaches\\n1000, the \'Innocent Bystander\' achievement is unlocked.","realm":"client","item":"function"},"achievements.IncGoodies":{"name":"achievements.IncGoodies","description":"Adds one to the count of friendly NPCs killed. Once this count reaches 1000,\\nthe \'Bad Friend\' achievement is unlocked.","realm":"client","item":"function"},"achievements.IsAchieved":{"name":"achievements.IsAchieved","description":"Used in Garry\'s Mod 12 in the achievements menu to show the user if they have\\nunlocked certain achievements.","parameters":[{"type":"number","name":"achievementID","description":"The ID of achievement to retrieve progress of. Note: IDs start from 0, not 1."}],"returns":[{"type":"boolean","description":"Returns true if the given achievementID is achieved."}],"realm":"client","item":"function"},"achievements.Remover":{"name":"achievements.Remover","description":"Adds one to the count of things removed. Once this count reaches 5000,\\nthe \'Destroyer\' achievement is unlocked.","realm":"client","item":"function"},"achievements.SpawnedNPC":{"name":"achievements.SpawnedNPC","description":"Adds one to the count of NPCs spawned. Once this count reaches 1000,\\nthe \'Procreator\' achievement is unlocked.","realm":"client","item":"function"},"achievements.SpawnedProp":{"name":"achievements.SpawnedProp","description":"Adds one to the count of props spawned. Once this count reaches 5000,\\nthe \'Creator\' achievement is unlocked.","realm":"client","item":"function"},"achievements.SpawnedRagdoll":{"name":"achievements.SpawnedRagdoll","description":"Adds one to the count of ragdolls spawned. Once this count reaches 2000,\\nthe \'Dollhouse\' achievement is unlocked.","realm":"client","item":"function"},"achievements.SpawnMenuOpen":{"name":"achievements.SpawnMenuOpen","description":"Adds one to the count of how many times the spawnmenu has been opened.\\nOnce this count reaches 100,000, the \'Menu User\' achievement is unlocked.","realm":"client","item":"function"}},"item":"category","description":"This library is used internally by Garry\'s Mod to help keep track of\\nachievement progress and unlock the appropriate achievements once a certain\\nnumber is reached."},"cam":{"name":"cam","pageType":"function","subcategories":{"cam.ApplyShake":{"name":"cam.ApplyShake","description":"Shakes the screen at a certain position.","parameters":[{"type":"Vector","name":"pos","description":"Origin of the shake."},{"type":"Angle","name":"pos","description":"Angles of the shake."},{"type":"number","name":"pos","description":"The shake factor."}],"realm":"client","item":"function"},"cam.End2D":{"name":"cam.End2D","description":"Switches the renderer back to the previous drawing mode from a 2D context.","realm":"client","item":"function"},"cam.End3D":{"name":"cam.End3D","description":"Switches the renderer back to the previous drawing mode from a 3D context.","realm":"client","item":"function"},"cam.End3D2D":{"name":"cam.End3D2D","description":"Switches the renderer back to the previous drawing mode from a 3D2D context.","realm":"client","item":"function"},"cam.EndOrthoView":{"name":"cam.EndOrthoView","description":"Switches the renderer back to the previous drawing mode from a 3D\\northographic rendering context.","realm":"client","item":"function"},"cam.GetModelMatrix":{"name":"cam.GetModelMatrix","description":"Returns the currently active model matrix.","realm":"client","item":"function"},"cam.IgnoreZ":{"name":"cam.IgnoreZ","description":"Tells the renderer to ignore the depth buffer and draw any upcoming\\noperation \\"ontop\\" of everything that was drawn yet.","parameters":[{"type":"boolean","name":"ignoreZ","description":"Determines whenever to ignore the depth buffer or not."}],"realm":"client","item":"function"},"cam.PopModelMatrix":{"name":"cam.PopModelMatrix","description":"Pops the current active rendering matrix from the stack and reinstates the\\nprevious one.","realm":"client","item":"function"},"cam.PushModelMatrix":{"name":"cam.PushModelMatrix","description":"Pushes the specified matrix onto the render matrix stack. Unlike opengl,\\nthis will replace the current model matrix.","parameters":[{"type":"VMatrix","name":"matrix","description":"The matrix to push."},{"type":"boolean","name":"multiply","description":"If set, multiplies given matrix with currently active matrix (cam.GetModelMatrix) before pushing."}],"examples":["Rotates and scales text in the center of the screen.\\n```lua\\nhook.Add(\\"HUDPaint\\", \\"2d rotation test\\", function()\\n    local w, h = ScrW(), ScrH()\\n    local t = RealTime()*50\\n\\n    local mat = Matrix()\\n\\n    mat:Translate(Vector(w/2, h/2))\\n    mat:Rotate(Angle(0,t,0))\\n    mat:Scale(Vector(1,1,1) * math.sin(t/100) *10)\\n    mat:Translate(-Vector(w/2, h/2))\\n\\n    cam.PushModelMatrix(mat)\\n    surface.SetFont(\\"DermaDefault\\")\\n        surface.SetTextColor(255, 255, 255, 255)\\n        surface.SetTextPos(w/2, h/2)\\n        surface.DrawText(\\"LOLLOLOLOL\\")\\n    cam.PopModelMatrix()\\nend)\\n```","Simple function to draw rotated text.\\n```lua\\nfunction draw.TextRotated(text, x, y, color, font, ang)\\n    render.PushFilterMag(TEXFILTER.ANISOTROPIC)\\n    render.PushFilterMin(TEXFILTER.ANISOTROPIC)\\n    surface.SetFont(font)\\n    surface.SetTextColor(color)\\n    surface.SetTextPos(0, 0)\\n    local textWidth, textHeight = surface.GetTextSize( text )\\n    local rad = -math.rad( ang )\\n    x = x - ( math.cos( rad ) * textWidth / 2 + math.sin( rad ) * textHeight / 2 )\\n    y = y + ( math.sin( rad ) * textWidth / 2 + math.cos( rad ) * textHeight / 2 )\\n    local m = Matrix()\\n    m:SetAngles(Angle(0, ang, 0))\\n    m:SetTranslation(Vector(x, y, 0))\\n    cam.PushModelMatrix(m)\\n        surface.DrawText(text)\\n    cam.PopModelMatrix()\\n    render.PopFilterMag()\\n    render.PopFilterMin()\\nend\\n```"],"realm":"client","item":"function"},"cam.Start":{"name":"cam.Start","description":"Sets up a new rendering context. This is an extended version of cam.Start3D\\nand cam.Start2D. Must be finished by cam.End3D or cam.End2D.","realm":"client","item":"function"},"cam.Start2D":{"name":"cam.Start2D","description":"Sets up a new 2D rendering context. Must be finished by cam.End2D.\\n\\nThis is almost always used with a render target from the render. To set its\\nposition use render.SetViewPort with a target already stored.","realm":"client","item":"function"},"cam.Start3D":{"name":"cam.Start3D","description":"Sets up a new 3D rendering context. Must be finished by cam.End3D.\\n\\nFor more advanced settings such as an orthographic view, use cam.Start\\ninstead.","parameters":[{"type":"Vector","name":"pos","description":"Render cam position."},{"type":"Angle","name":"angles","description":"Render cam angles."},{"type":"number","name":"fov","description":"Field of view."},{"type":"number","name":"x","description":"X coordinate of where to start the new view port."},{"type":"number","name":"y","description":"Y coordinate of where to start the new view port."},{"type":"number","name":"w","description":"Width of the new viewport."},{"type":"number","name":"h","description":"Height of the new viewport."},{"type":"number","name":"zNear","description":"Distance to near clipping plane."},{"type":"number","name":"zFar","description":"Distance to far clipping plane."}],"examples":["Set up a 3D rendering environment in a 2D rendering hook to render\\nmodels on HUD.\\n```lua\\nhook.Add(\\"HUDPaint\\", \\"3d_camera_example\\", function()\\n    cam.Start3D()\\n        for id, ply in ipairs(player.GetAll()) do\\n            ply:DrawModel()\\n        end\\n    cam.End3D()\\nend)\\n```"],"realm":"client","item":"function"},"cam.Start3D2D":{"name":"cam.Start3D2D","description":"Sets up a new 2D rendering context. Must be finished by cam.End3D2D.\\nThis function pushes a new matrix onto the stack. (cam.PushModelMatrix)","parameters":[{"type":"Vector","name":"pos","description":"Origin of the 3D2D context, ie. the top left corner, (0, 0)."},{"type":"Angle","name":"angles","description":"Angles of the 3D2D context. +x in the 2d context corresponds to +x of the angle (its forward direction). +y in the 2d context corresponds to -y of the angle (its right direction).\\n\\nIf (dx, dy) are your desired (+x, +y) unit vectors, the angle you want is dx:AngleEx(dx:Cross(-dy))."},{"type":"number","name":"scale","description":"The scale of the render context. If scale is 1 then 1 pixel in 2D context will equal to 1 unit in 3D context."}],"examples":["Makes a floating rectangle with text above where the player is\\nlooking at, pointing at the player\\n```lua\\nhook.Add(\\"PostDrawOpaqueRenderables\\", \\"example\\", function()\\n    -- Get the game\'s camera angles\\n    local angle = EyeAngles()\\n\\n    -- Only use the Yaw component of the angle\\n    angle = Angle( 0, angle.y, 0 )\\n\\n    -- Apply some animation to the angle\\n    angle.y = angle.y + math.sin( CurTime() ) * 10\\n\\n    -- Correct the angle so it points at the camera\\n    -- This is usually done by trial and error using Up(), Right() and Forward() axes\\n    angle:RotateAroundAxis( angle:Up(), -90 )\\n    angle:RotateAroundAxis( angle:Forward(), 90 )\\n\\n    -- A trace just for a position\\n    local trace = LocalPlayer():GetEyeTrace()\\n    local pos = trace.HitPos\\n\\n    -- Raise the hitpos off the ground by 20 units and apply some animation\\n    pos = pos + Vector( 0, 0, math.cos( CurTime() / 2 ) + 20 )\\n\\n    -- Notice the scale is small, so text looks crispier\\n    cam.Start3D2D( pos, angle, 0.1 )--\\n        -- Get the size of the text we are about to draw\\n        local text = \\"Testing\\"\\n        surface.SetFont( \\"Default\\" )\\n        local tW, tH = surface.GetTextSize( \\"Testing\\" )\\n\\n        -- This defines amount of padding for the box around the text\\n        local pad = 5\\n\\n        -- Draw a rectable. This has to be done before drawing the text, to prevent overlapping\\n        -- Notice how we start drawing in negative coordinates\\n        -- This is to make sure the 3d2d display rotates around our position by its center, not left corner\\n        surface.SetDrawColor( 0, 0, 0, 255 )\\n        surface.DrawRect(-tW / 2 - pad, -pad, tW + pad * 2, tH + pad * 2)\\n\\n        -- Draw some text\\n        draw.SimpleText(\\"Testing\\", \\"Default\\", -tW / 2, 0, color_white)\\n    cam.End3D2D()\\nend)\\n```"],"realm":"client","item":"function"},"cam.StartOrthoView":{"name":"cam.StartOrthoView","description":"Sets up a new 3d context using orthographic projection.","parameters":[{"type":"number","name":"leftOffset","description":"The left plane offset."},{"type":"number","name":"topOffset","description":"The top plane offset."},{"type":"number","name":"rightOffset","description":"The right plane offset."},{"type":"number","name":"bottomOffset","description":"The bottom plane offset."}],"realm":"client","item":"function"}},"item":"category","description":"This directs all drawing to be done to a certain 2D or 3D plane or position,\\nuntil the corresponding \\"End\\" function is called.\\nThe matrix functions exist, but are mostly unusable unless you\'re familiar\\nwith the source engine\'s layout for each aspect."},"player":{"name":"player","pageType":"function","subcategories":{"player.GetAll":{"name":"player.GetAll","description":"Gets all the current players in the server (not including connecting\\nclients).","returns":[{"type":"table","description":"All Players currently in the server."}],"realm":"shared","item":"function"}},"item":"category","description":"The player library is used to get the Lua objects that represent players\\nin-game."}},"item":"category"},"hooks":{"name":"Hooks","pageType":"function","subcategories":{},"item":"category"},"panels":{"name":"Panels","pageType":"function","subcategories":{"MPanel":{"name":"MPanel","pageType":"function","subcategories":{"PANEL:GetBackgroundColor":{"name":"PANEL:GetBackgroundColor","description":"Returns the background color. If this panels has a transparent background,\\ninvoke this on the parent and return its value.\\n\\nIf no background color is found, the default color is returned.","returns":[{"type":"Color","description":"The background color."}],"realm":"client","item":"function"}},"item":"category","description":"Base panel for all elements."}},"item":"category"},"enums":{"name":"Enums","pageType":"table","subcategories":{},"item":"category"},"structs":{"name":"Structs","pageType":"table","subcategories":{},"item":"category"}}}')},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),i=n.n(o),c=n(1),s=n(2);function l(){var e=Object(s.a)(["\n\t:root {\n\t\tfont-size: 62.5%\n\t}\n\n\t* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbox-sizing: border-box;\n\t}\n\n\ta {\n\t\ttext-decoration: none;\n\t}\n\n\thtml, body, #root {\n\t\theight: 100vh;\n\t}\n\n\tbody {\n\t\tfont-family: 'Roboto', sans-serif;\n\t\tfont-size: 1.6rem;\n\t\tfont-weight: normal;\n\t\tletter-spacing: 0.05rem;\n\t\tcolor: ",";\n\t\tbackground: ",";\n\t}\n\n\t#root {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n"]);return l=function(){return e},e}var m=Object(c.b)(l(),(function(e){return e.theme.text.background.high}),(function(e){return e.theme.colors.background(0)})),u=n(9),d=n(16),h=n.n(d);function p(){var e=Object(s.a)(["\n\twidth: 25.6rem;\n\tmax-width: ",";\n\toverflow-x: hidden;\n\ttransition: max-width 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\tpadding-top: 0.4rem;\n\tbackground: ",";\n\tscrollbar-width: thin;\n\n\t@media (max-width: 1000px) {\n\t\tposition: absolute;\n\t\tz-index: 100;\n\t\tleft: 6.4rem;\n\t\theight: 100%;\n\t\tbox-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.2),\n\t\t\t0px 0px 5px 0px rgba(0, 0, 0, 0.14), 0px 0px 10px 0px rgba(0, 0, 0, 0.12);\n\t}\n\n\t@media (max-width: 400px) {\n\t\twidth: calc(90vw - 6.4rem);\n\t}\n\n\t> * {\n\t\twidth: 25.6rem;\n\t}\n\n\t> a:first-child {\n\t\tdisplay: inline-block;\n\t\tmargin-top: 0.4rem;\n\t}\n\n\t> a > div {\n\t\tpadding-left: 2rem;\n\t}\n"]);return p=function(){return e},e}function g(){var e=Object(s.a)(["\n\tcursor: pointer;\n\theight: 6.4rem;\n\ttransition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\tbackground: ",";\n\tborder-bottom: 2px solid ",";\n\n\t> div:hover {\n\t\tbackground: ",";\n\t}\n\n\t> div {\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: flex-start;\n\t\tflex-direction: column;\n\t\tpadding-top: 1.1rem;\n\t\ttransition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n\t\tsvg {\n\t\t\twidth: 2.4rem;\n\t\t\theight: 2.4rem;\n\t\t\tmargin-bottom: 0.4rem;\n\t\t}\n\n\t\tspan {\n\t\t\tfont-weight: 500;\n\t\t\tfont-size: 1.2rem;\n\t\t\tline-height: 1.2rem;\n\t\t\tuser-select: none;\n\t\t}\n\t}\n"]);return g=function(){return e},e}function f(){var e=Object(s.a)(["\n\twidth: 6.4rem;\n\tbackground: ",";\n\tcolor: ",";\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\tscrollbar-width: none;\n"]);return f=function(){return e},e}function b(){var e=Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: stretch;\n\tjustify-content: center;\n\tbox-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.2),\n\t\t0px 0px 5px 0px rgba(0, 0, 0, 0.14), 0px 0px 10px 0px rgba(0, 0, 0, 0.12);\n\tposition: relative;\n"]);return b=function(){return e},e}var v=c.c.menu(b()),y=c.c.div(f(),(function(e){return e.theme.sideMenu.background}),(function(e){return e.theme.sideMenu.text})),x=c.c.div(g(),(function(e){var t=e.theme;return e.active?t.sideMenu.active:"none"}),(function(e){return e.theme.sideMenu.divider}),(function(e){return e.theme.sideMenu.hover})),k=c.c.div(p(),(function(e){return e.active?"25.6rem":"0"}),(function(e){return e.theme.colors.background(4)})),w=n(10),E=n(37),D=E.structure,O=E.category_types,T={globals:w.d,classes:w.a,libraries:w.b,hooks:w.h,panels:w.i,enums:w.g,structs:w.f,default:w.e};function S(){var e=Object(s.a)(["\n\tmargin-bottom: ",";\n\tmax-height: ",";\n\toverflow-y: hidden;\n\ttransition: max-height 250ms cubic-bezier(0.4, 0, 0.2, 1),\n\t\tmargin-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]);return S=function(){return e},e}function j(){var e=Object(s.a)(["\n\theight: 4rem;\n\tdisplay: flex;\n\talign-items: center;\n\tcolor: ",";\n\tcursor: pointer;\n\ttransition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),\n\t\tcolor 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n\t:hover {\n\t\tbackground: ",";\n\t}\n\n\tsvg {\n\t\twidth: 2.4rem;\n\t\theight: 2.4rem;\n\t\tmargin: 0 2rem 0 2rem;\n\t\ttransform: rotate(","deg);\n\t\ttransition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\t}\n\n\tspan {\n\t\tfont-family: Roboto;\n\t\tfont-weight: 700;\n\t\tfont-size: 14px;\n\t\tline-height: 24px;\n\t\tletter-spacing: 0.1px;\n\t\tuser-select: none;\n\t}\n"]);return j=function(){return e},e}function M(){var e=Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tjustify-content: center;\n"]);return M=function(){return e},e}var P=c.c.div(M()),I=c.c.div(j(),(function(e){var t=e.theme;return e.active?t.colors.main:t.text.background.high}),(function(e){return e.theme.text.background.hover}),(function(e){return e.collapsed?"90":"0"})),A=c.c.div(S(),(function(e){return e.collapsed?"1.2rem":"0"}),(function(e){var t=e.collapsed,n=e.count;return t?String(3.2*n)+"rem":"0"})),R=n(3),C=n(5),F=function(e){var t=e.label,n=e.children,o=e.link,i=Object(R.f)(),c=Object(r.useState)(i.pathname.startsWith(o)),s=Object(u.a)(c,2),l=s[0],m=s[1],d=Object(r.useState)(!1),p=Object(u.a)(d,2),g=p[0],f=p[1];return Object(r.useEffect)((function(){f(o===i.pathname)}),[i,o]),a.a.createElement(P,null,a.a.createElement(C.b,{to:o},a.a.createElement(I,{collapsed:l,onClick:function(){m(!l)},active:g},a.a.createElement(h.a,{path:w.c}),a.a.createElement("span",null,t))),a.a.createElement(A,{collapsed:l,count:n?n.length:0},n))};function G(){var e=Object(s.a)(["\n\theight: 3.2rem;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-left: 6.4rem;\n\tcolor: ",";\n\tcursor: pointer;\n\ttransition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),\n\t\tcolor 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n\t:hover {\n\t\tbackground: ",";\n\t}\n\n\tspan {\n\t\tfont-family: Roboto;\n\t\tfont-weight: 500;\n\t\tfont-size: 14px;\n\t\tline-height: 24px;\n\t\tletter-spacing: 0.1px;\n\t\tuser-select: none;\n\t}\n"]);return G=function(){return e},e}var z=c.c.div(G(),(function(e){var t=e.theme;return e.active?t.colors.main:t.text.background.medium}),(function(e){return e.theme.text.background.hover})),B=function(e){var t=e.label,n=e.link,o=e.onClick,i=Object(R.f)(),c=Object(r.useState)(!1),s=Object(u.a)(c,2),l=s[0],m=s[1];return Object(r.useEffect)((function(){m(i.pathname===n)}),[i,n]),a.a.createElement(C.b,{to:n},a.a.createElement(z,{active:l,onClick:o},a.a.createElement("span",null,t)))};function N(e){var t;return null!==(t=e.split(/[.:]/g).pop())&&void 0!==t?t:""}var L=function(){var e,t=Object.entries(D),n=null!==(e=Object(R.f)().pathname.split("/")[1])&&void 0!==e?e:"",o=Object(r.useState)(D[n]?n:t[0][0]),i=Object(u.a)(o,2),c=i[0],s=i[1],l=Object(r.useState)(window.innerWidth>1e3),m=Object(u.a)(l,2),d=m[0],p=m[1];function g(){window.innerWidth<=1e3&&p(!1)}return a.a.createElement(v,null,a.a.createElement(y,null,t.map((function(e){var t,n=Object(u.a)(e,2),r=n[0],o=n[1];return 0!==Object.values(o.subcategories).length&&a.a.createElement(x,{key:r,active:d&&c===r,onClick:function(){c===r?p(!d):(s(r),p(!0))}},a.a.createElement("div",null,a.a.createElement(h.a,{path:null!==(t=T[r])&&void 0!==t?t:T.default}),a.a.createElement("span",null,o.name)))}))),a.a.createElement(k,{active:d},D[c]&&Object.values(D[c].subcategories).sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){var t="".concat(c,"-").concat(e.name);if(e.item.startsWith("category")&&"subcategories"in e){var n=Object.values(e.subcategories).sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(n){return{label:N(n.name),key:"".concat(t,"-").concat(n.name),link:"/".concat(c,"/").concat(e.name,"/").concat(n.name)}}));return a.a.createElement(F,{key:"".concat(t),link:"/".concat(c,"/").concat(e.name),label:N(e.name)},n.map((function(e){return a.a.createElement(B,Object.assign({onClick:g},e))})))}var r=N(e.name);return a.a.createElement(B,{key:t,link:"/".concat(c,"/").concat(e.name),label:r,onClick:g})}))))};function H(){var e=Object(s.a)(["\n    flex: 1;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    overflow-y: scroll;\n\n    > * {\n        min-height: 100%;\n    }\n"]);return H=function(){return e},e}function W(){var e=Object(s.a)(["\n    height: 100vh;\n    width: 100vw;\n    flex-direction: row;\n    align-items: stretch;\n    justify-content: center;\n    display: flex;\n"]);return W=function(){return e},e}var _=c.c.div(W()),V=c.c.div(H());function U(){var e=Object(s.a)(["\n    width: 100%;\n\n    table {\n        width: 100%;\n        border-collapse: collapse;\n\t\tbackground: ",";\n\t\ttable-layout: fixed;\n    }\n\n    td {\n        padding: 0.6rem 1.2rem;\n\t\tborder: 3px solid ",";\n\t\tword-wrap: break-word;\n    }\n\n    td:nth-child(1), td:nth-child(2) {\n\t\twidth: 25%;\n    }\n\n    td:nth-child(1) {\n        border-left: none;\n    }\n\n    td:nth-child(3) {\n        border-right: none;\n    }\n\n    tr:nth-child(2n) {\n        background: ",";\n    }\n"]);return U=function(){return e},e}function Z(){var e=Object(s.a)(['\n\tmargin: 0.8rem 0;\n\tpadding: 0.8rem 0;\n\n\tp {\n\t\tmargin: 0.8rem 0;\n\t\tfont-size: 1.6rem;\n\t\tline-height: 1.8rem;\n\t}\n\n\tcode[class*="language-"],\n\tpre[class*="language-"] {\n\t\tcolor: ',';\n\t\ttext-shadow: none;\n\t\tfont-family: "Roboto Mono", monospace;\n\t\tfont-size: 1.6rem;\n\t\tfont-weight: 400;\n\t\tline-height: 1.8rem;\n\t}\n\n\t/* Code blocks */\n\tpre[class*="language-"] {\n\t\tpadding: 1.6rem;\n\t\tmargin: 1.2rem 0;\n\t}\n\n\t:not(pre) > code[class*="language-"],\n\tpre[class*="language-"] {\n\t\tbackground: ',';\n\t}\n\n\t/* Inline code */\n\t:not(pre) > code[class*="language-"] {\n\t\tpadding: 0.2rem;\n\t\tborder-radius: 0.2rem;\n\t}\n\n\t.token.comment,\n\t.token.prolog,\n\t.token.doctype,\n\t.token.cdata {\n\t\tcolor: ',";\n\t}\n\n\t.token.punctuation {\n\t\tcolor: ",";\n\t}\n\n\t.token.property,\n\t.token.tag,\n\t.token.boolean,\n\t.token.number,\n\t.token.constant,\n\t.token.symbol,\n\t.token.deleted {\n\t\tcolor: ",";\n\t}\n\n\t.token.selector,\n\t.token.attr-name,\n\t.token.string,\n\t.token.char,\n\t.token.builtin,\n\t.token.inserted {\n\t\tcolor: ",";\n\t}\n\n\t.token.operator,\n\t.token.entity,\n\t.token.url,\n\t.language-css .token.string,\n\t.style .token.string {\n\t\tcolor: ",";\n\t\tbackground: none;\n\t}\n\n\t.token.atrule,\n\t.token.attr-value,\n\t.token.keyword {\n\t\tcolor: ",";\n\t}\n\n\t.token.function,\n\t.token.class-name {\n\t\tcolor: ",";\n\t}\n"]);return Z=function(){return e},e}function J(){var e=Object(s.a)(["\n\tfont-family: Roboto;\n\tfont-weight: 500;\n\tfont-size: 2.4rem;\n\tletter-spacing: 0;\n\tline-height: 2.8rem;\n\tcolor: ",";\n\tmargin-bottom: 0.8rem;\n\tmargin-top: 6.4rem;\n\tborder-bottom: 3px solid ",";\n\tuser-select: none;\n"]);return J=function(){return e},e}function X(){var e=Object(s.a)(["\n\tfont-family: Roboto;\n\tfont-weight: 500;\n\tfont-size: 3.4rem;\n\tletter-spacing: 0.025rem;\n\tline-height: 4.8rem;\n\ttext-align: center;\n\tcolor: ",";\n\tmargin-bottom: 0.8rem;\n\tborder-bottom: 3px solid ",";\n\tuser-select: none;\n"]);return X=function(){return e},e}function q(){var e=Object(s.a)(["\n\tbackground: ",";\n\twidth: 100%;\n\tmax-width: 90rem;\n\tpadding: 2.4rem 3.2rem 1.6rem 3.2rem;\n\n\tbox-shadow: 0px 0px 1px -2px rgba(0, 0, 0, 0.2),\n\t\t0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 5px 0px rgba(0, 0, 0, 0.12);\n\n\ta {\n\t\tcolor: ",";\n\t\tfont-weight: 700;\n\t}\n"]);return q=function(){return e},e}var K=c.c.main(q(),(function(e){return e.theme.colors.background(2)}),(function(e){return e.theme.colors.main})),Y=c.c.h4(X(),(function(e){return e.theme.colors.main}),(function(e){return e.theme.colors.main})),$=c.c.h5(J(),(function(e){return e.theme.colors.main}),(function(e){return e.theme.colors.main})),Q=c.c.div(Z(),(function(e){return e.theme.codeBlocks.color}),(function(e){return e.theme.codeBlocks.background}),(function(e){return e.theme.codeBlocks.comment}),(function(e){return e.theme.codeBlocks.punctuation}),(function(e){return e.theme.codeBlocks.number}),(function(e){return e.theme.codeBlocks.string}),(function(e){return e.theme.codeBlocks.operator}),(function(e){return e.theme.codeBlocks.keyword}),(function(e){return e.theme.codeBlocks.function})),ee=c.c.div(U(),(function(e){return e.theme.table.background}),(function(e){return e.theme.colors.background(2)}),(function(e){return e.theme.table.alternative})),te=function(e){var t=e.children,n=e.title;return Object(r.useEffect)((function(){Array.from(document.getElementsByTagName("code")).forEach((function(e){var t=e.parentElement;t&&"pre"===t.nodeName.toLowerCase()&&(t.className=e.className)}))})),a.a.createElement(K,null,n&&a.a.createElement(Y,null,n),t)},ne=function(){return a.a.createElement(te,null,"Not Found")},re=/([.:])(\w+$)/;var ae=n(11),oe=n.n(ae),ie=n(17),ce=n.n(ie);n(39),n(40);oe.a.setOptions({highlight:function(e,t){return ce.a.languages[t]?ce.a.highlight(e,ce.a.languages[t],t):e}});var se=oe.a;function le(){var e=Object(s.a)(["\n\tbackground: linear-gradient(45deg, "," 50%, "," 50.001%);;\n"]);return le=function(){return e},e}function me(){var e=Object(s.a)(["\n    background: ",";\n"]);return me=function(){return e},e}function ue(){var e=Object(s.a)(["\n    background: ",";\n    height: 1.8rem;\n    width: 1.8rem;\n    display: inline-block;\n    align-self: center;\n    border-radius 0.4rem;\n    vertical-align: top;\n    margin-right: 0.8rem;\n"]);return ue=function(){return e},e}function de(){var e=Object(s.a)(["\n\tpadding: 1.6rem;\n\tcolor: ",';\n\tfont-family: "Roboto Mono", monospace;\n\tfont-size: 1.6rem;\n\tfont-weight: 400;\n\tline-height: 1.8rem;\n\tmargin: 0.8rem 0;\n\tbackground: ',";\n"]);return de=function(){return e},e}function he(){var e=Object(s.a)(["\n\tposition: relative;\n\tmargin-bottom: 2.4rem;\n\n\t> span {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\theight: 1.8rem;\n\t\twidth: 2.8rem;\n\t\ttext-align: center;\n\t\tline-height: 1.8rem;\n\t\tfont-weight: 700;\n\t\tbackground: ",";\n\t\tcolor: ",";\n\t\tuser-select: none;\n\t\tborder-radius: 0.45rem 0.1rem 0.1rem 0.45rem;\n\t\tfont-size: 1.4rem;\n\t}\n\n\t> p:first-child {\n\t\tfont-weight: 500;\n\t}\n\n\t> p {\n\t\tmargin-left: 3.8rem;\n\t}\n"]);return he=function(){return e},e}var pe=c.c.div(he(),(function(e){return e.theme.arguments.background}),(function(e){return e.theme.arguments.color})),ge=c.c.div(de(),(function(e){return e.theme.codeBlocks.color}),(function(e){return e.theme.codeBlocks.background})),fe=c.c.span(ue(),(function(e){return e.theme.realms.server})),be=Object(c.c)(fe)(me(),(function(e){return e.theme.realms.client})),ve=Object(c.c)(fe)(le(),(function(e){return e.theme.realms.client}),(function(e){return e.theme.realms.server}));function ye(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return 1===e.length?a.a.createElement(a.a.Fragment,null,e[0]):e.length>1?a.a.createElement(a.a.Fragment,null,e.slice(0,-1).map((function(e,n){return a.a.createElement(a.a.Fragment,{key:n},n>0&&(t?" or ":", "),e)}))," or ",e[e.length-1]):a.a.createElement(a.a.Fragment,null)}function xe(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.split("|"),r=[];return n.forEach((function(e){for(var t=!1,n=0;n<O.length;n++){var o=O[n];if(void 0!==D[o].subcategories[e]){r.push(a.a.createElement(C.b,{to:"/".concat(o,"/").concat(e)},e)),t=!0;break}}t||r.push(a.a.createElement("a",{href:"https://wiki.facepunch.com/gmod/".concat(e)},e))})),ye(r,t)}var ke=function(){var e,t,n,r,o,i=Object(R.g)(),c=i.tab,s=i.category,l=i.subcategory,m=null===(e=D[c])||void 0===e||null===(t=e.subcategories)||void 0===t?void 0:t[s],d=l&&"subcategories"in m?m.subcategories[l]:m,h=function(e){var t=e.match(re),n=null!==t&&":"===t[1];return[n&&null!==t?t[2]:e,n]}(d.name),p=Object(u.a)(h,2),g=p[0],f=p[1],b=f?"".concat(s,":").concat(g):g,v=d.description,y=null!==(n=d.examples)&&void 0!==n?n:[],x=null!==(r=d.parameters)&&void 0!==r?r:[],k=null!==(o=d.returns)&&void 0!==o?o:[],w=d.realm;var E=k.map((function(e){return xe(e.type,!0)})).map((function(e,t){return a.a.createElement(a.a.Fragment,{key:t},t>0&&", ",e)})),O=x.map((function(e){return a.a.createElement(a.a.Fragment,null,xe(e.type,!0)," ",e.name)})).map((function(e,t){return a.a.createElement(a.a.Fragment,{key:t},t>0&&", ",e)}));return a.a.createElement(te,{title:b},a.a.createElement(Q,null,a.a.createElement(ge,null,"server"===w&&a.a.createElement(fe,null),"client"===w&&a.a.createElement(be,null),"shared"===w&&a.a.createElement(ve,null),E,0!==E.length&&" ",f&&a.a.createElement(a.a.Fragment,null,xe(s),":"),g,"(",O,")")),v&&a.a.createElement(a.a.Fragment,null,a.a.createElement($,null,"Description"),a.a.createElement(Q,{dangerouslySetInnerHTML:{__html:se(v)}})),0!==x.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement($,null,"Arguments"),a.a.createElement(Q,null,x.map((function(e,t){return a.a.createElement(pe,{key:"".concat(e.type,"-").concat(e.name,"-").concat(t)},a.a.createElement("p",null,xe(e.type)," ",a.a.createElement("strong",null,e.name)),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:se(e.description)}}),a.a.createElement("span",null,t+1))})))),0!==k.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement($,null,"Returns"),a.a.createElement(Q,null,k.map((function(e,t){return a.a.createElement(pe,{key:"".concat(e.type,"-").concat(t)},a.a.createElement("p",null,xe(e.type)),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:se(e.description)}}),a.a.createElement("span",null,t+1))})))),0!==y.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement($,null,"Examples"),a.a.createElement(Q,{dangerouslySetInnerHTML:{__html:se(y.join("\n\n"))}})))},we=function(){var e,t,n,r=Object(R.g)(),o=r.tab,i=r.category,c=r.subcategory,s=null===(e=D[o])||void 0===e||null===(t=e.subcategories)||void 0===t?void 0:t[i],l=c&&"subcategories"in s?s.subcategories[c]:s,m=l.description,u=null!==(n=l.fields)&&void 0!==n?n:[],d=l.realm;return a.a.createElement(te,{title:l.name},m&&a.a.createElement(a.a.Fragment,null,a.a.createElement($,null,"Description"),a.a.createElement(Q,{dangerouslySetInnerHTML:{__html:oe()(m+("client"===d||"server"===d?"\n\nThis enum is only available on the **".concat(d,"side**."):""))}})),0!==u.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement($,null,"Values"),a.a.createElement(Q,null,a.a.createElement(ee,null,a.a.createElement("table",null,a.a.createElement("tbody",null,u.map((function(e,t){return a.a.createElement("tr",{key:"".concat(t,"-").concat(e.key,"--").concat(e.type)},a.a.createElement("td",null,xe(e.type)),a.a.createElement("td",null,e.key),a.a.createElement("td",null,e.description))}))))))))},Ee=function(){var e,t,n,r=Object(R.g)(),o=r.tab,i=r.category,c=null===(e=D[o])||void 0===e||null===(t=e.subcategories)||void 0===t?void 0:t[i],s=c.description,l=null!==(n=c.fields)&&void 0!==n?n:[];return a.a.createElement(te,{title:i},s&&a.a.createElement(a.a.Fragment,null,a.a.createElement($,null,"Description"),a.a.createElement(Q,{dangerouslySetInnerHTML:{__html:oe()(s)}})),0!==l.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement($,null,"Attributes"),a.a.createElement(Q,null,a.a.createElement(ee,null,a.a.createElement("table",null,a.a.createElement("tbody",null,l.map((function(e,t){return a.a.createElement("tr",{key:"".concat(t,"-").concat(e.key,"--").concat(e.type)},a.a.createElement("td",null,xe(e.type)),a.a.createElement("td",null,e.key),a.a.createElement("td",null,e.description))}))))))))},De=["rgb(28, 33, 36)","rgb(34, 41, 47)","rgb(35, 43, 50)","rgb(37, 46, 53)","rgb(38, 48, 55)","rgb(40, 50, 58)","rgb(41, 52, 60)","rgb(42, 53, 62)","rgb(43, 55, 64)","rgb(44, 56, 66)","rgb(45, 58, 68)","rgb(46, 59, 69)","rgb(47, 60, 71)","rgb(47, 61, 72)","rgb(48, 62, 73)","rgb(48, 62, 73)","rgb(49, 63, 74)"],Oe={colors:{main:"rgb(144, 202, 249)",background:function(e){return De[e]}},text:{background:{high:"rgba(255, 255, 255, 0.83)",medium:"rgba(255, 255, 255, 0.6)",disabled:"rgba(255, 255, 255, 0.38)",hover:"rgba(255, 255, 255, 0.04)"}},realms:{client:"#f39c12",server:"#3498db"},arguments:{background:"rgb(144, 202, 249)",color:De[2]},sideMenu:{background:De[8],active:"rgba(255, 255, 255, 0.12)",text:"rgba(255, 255, 255, 0.83)",hover:"rgba(255, 255, 255, 0.04)",divider:"rgba(255, 255, 255, 0.3)"},codeBlocks:{background:De[6],color:"rgba(255, 255, 255, 0.83)",comment:"#95a5a6",punctuation:"#95a5a6",number:"#f39c12",string:"#1abc9c",operator:"#e74c3c",keyword:"#9b59b6",function:"#9b59b6"},table:{background:De[16],alternative:De[8]}},Te=function(){var e,t,n=Object(R.g)(),r=n.tab,o=n.category,i=n.subcategory,c=null===(e=D[r])||void 0===e||null===(t=e.subcategories)||void 0===t?void 0:t[o];if(void 0!==c&&(!i||"subcategories"in c&&void 0!==c.subcategories[i])){var s=i&&"subcategories"in c?c.subcategories[i]:c;return s.item.startsWith("category")?a.a.createElement(Ee,null):s.item.endsWith("table")?a.a.createElement(we,null):a.a.createElement(ke,null)}return a.a.createElement(ne,null)},Se=function(){return a.a.createElement(c.a,{theme:Oe},a.a.createElement(m,null),a.a.createElement(_,null,a.a.createElement(L,null),a.a.createElement(V,null,a.a.createElement(R.c,null,a.a.createElement(R.a,{path:"/:tab/:category/:subcategory?",component:Te}),a.a.createElement(R.a,{component:ne})))))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C.a,null,a.a.createElement(Se,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.4b3f18ec.chunk.js.map