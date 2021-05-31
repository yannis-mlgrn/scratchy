const activityBar = {
    name: "activity-bar",
    props: ["currentRoom", "isWriting"],
    methods:{
        share: function(currentRoom) { 
            console.log("share id");
            alert("id : idk how to pick the id");
        }
    },
    template: `
    <div class='activity_bar'>
    <template v-if="currentRoom !== null">
        <div class='activity_bar_room'>{{currentRoom.title}} <button @click="share(currentRoom)"><i class="material-icons" id="share-icon">share</i></button></div>
        <div v-if="isWriting" class='activity_bar_writing'> writing... </div>
    
    </template>
    <!-- to keep the activity bar rendering correctly even when no room is provided -->
    &nbsp;
    </div>`
};