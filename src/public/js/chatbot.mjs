/*import {config} from "dotenv";

config();
const dominioChatBot=process.env.DOMAIN || "url"; */

window.addEventListener("load", ()=>{
    console.log("aqui");
    //console.log('http://<%= direccion ? direccion : "error" %>/webhook/a65485e5-4742-455e-bc67-3153cac4d953/chat');
    (function () {
        /* 1) CONFIGURACIÓN BÁSICA ---------------------------------------------- */
        const CFG = {
            url:   `http://${dominioChatBot}/webhook/a65485e5-4742-455e-bc67-3153cac4d953/chat`,
            color: "#30AD5B",              // Color corporativo (botón / cabecera)
            text:  "💬 Habla conmigo"            // Etiqueta del botón
        };

        /* 2) INYECTAR CSS ------------------------------------------------------- */
        const style = document.createElement("style");
        style.textContent = `
            :root { --chat-color: ${CFG.color}; }

            /* --- BOTÓN flotante --- */
            #chat-btn {
            position: fixed; bottom: 20px; right: 20px;
            background: var(--chat-color);
            color: #fff; border: none; border-radius: 50px;
            padding: 14px 24px; font-size: 16px; font-weight: bold;
            cursor: pointer; z-index: 9999;
            display: flex; align-items: center; gap: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,.25);
            transition: transform .2s;
            }
            #chat-btn:hover { transform: translateY(-2px); }

            /* --- CONTENEDOR PANEL --- */
            #chat-panel {
            position: fixed; bottom: 0; right: 20px;
            width: 400px; max-width: 95vw; height: 98vh;
            background: #fff;
            border-radius: 16px 16px 0 0;
            box-shadow: 0 -10px 30px rgba(0,0,0,.3);
            overflow: hidden; z-index: 10000;
            transform: translateY(100%);           /* Oculto por defecto */
            transition: transform .3s ease;
            }
            #chat-panel.open { transform: translateY(0); }

            /* Cabecera del panel (opcional, para arrastrar o mostrar título) */
            #chat-head {
            background: var(--chat-color); color: #fff;
            font-weight: bold; padding: 10px 14px;
            display: flex; justify-content: space-between; align-items: center;
            }
            #chat-close {
            background: transparent; border: none; color: #fff;
            font-size: 22px; cursor: pointer;
            }

            /* Iframe ocupa todo lo restante */
            #chat-iframe { width: 100%; height: calc(100% - 60px); border: none; }

            /* --- MÓVIL: ancho completo --- */
            @media (max-width: 500px) {
            #chat-panel { width: 100vw; right: 0; border-radius: 0; }
            }
        `;
        document.head.appendChild(style);

        /* 3) CREAR HTML (botón + panel) ---------------------------------------- */
        const btn = document.createElement("button");
        btn.id = "chat-btn";
        btn.textContent = CFG.text;
        document.body.appendChild(btn);

        const panel = document.createElement("div");
        panel.id = "chat-panel";
        panel.innerHTML = `
            <div id="chat-head">
            <button id="chat-close">×</button>
            </div>
            <iframe id="chat-iframe"
                    src="${CFG.url}"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Chat">
            </iframe>
        `;
        document.body.appendChild(panel);

        /* 4) MANEJO DE EVENTOS -------------------------------------------------- */
        btn.addEventListener("click", () => {
            panel.classList.add("open");
            btn.style.display = "none";           // Oculta botón mientras panel abierto
        });

        panel.querySelector("#chat-close").addEventListener("click", () => {
            panel.classList.remove("open");
            btn.style.display = "flex";
        });
    })();

});