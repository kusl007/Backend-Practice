const socket = io();

//yesle hamro video control garxa
let local;
//yesle arka ko video control garxa
let remote;

//it helps to setup the connection
let peerConnection;

const rtcSettings = {
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
};

const initialize = async () => { 
    try {
        local = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        initiateOffer();
    } catch (error) {
        console.error("Error getting user media: ", error);
    }
};

const initiateOffer = async () => {
    try {
        // Create peer connection
        await createPeerConnection();
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);

        socket.emit("signalingMessage", JSON.stringify({
            type: "offer",
            offer
        }));
    } catch (error) {
        console.error("Error creating offer: ", error);
    }
};

const createPeerConnection = async () => {
    try {
        peerConnection = new RTCPeerConnection(rtcSettings);
        // Add stream
        remote = new MediaStream();
        document.querySelector("#remoteVideo").srcObject = remote;
        document.querySelector("#remoteVideo").style.display = "block";  // Corrected line
        document.querySelector("#localVideo").classList.add("smallFrame");
        
        local.getTracks().forEach(track => {
            peerConnection.addTrack(track, local);
        });

        peerConnection.ontrack = (event) => {
            event.streams[0].getTracks().forEach(track => {
                remote.addTrack(track);
            });
        };

        peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit("signalingMessage", JSON.stringify({
                    type: "candidate",
                    candidate: event.candidate
                }));
            }
        };
    } catch (error) {
        console.error("Error creating peer connection: ", error);
    }
};

initialize();
