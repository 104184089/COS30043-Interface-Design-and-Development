<template>

    <div class="row">
        <nav id="nav_bar" class="w-100">
            <div class="nav nav-tabs">
                <router-link class="nav-link" :class="{ active: $route.path === '/' }" role="tab"
                    aria-controls="nav-home" aria-selected="true" to="/">Home</router-link>

                <router-link class="nav-link" :class="{ active: $route.path === '/flashcard' }" role="tab"
                    aria-controls="nav-flashcard" aria-selected="true" to="/flashcard">Flash Card</router-link>

                <router-link class="nav-link" :class="{ active: $route.path === '/about' }" role="tab"
                    aria-controls="nav-about" aria-selected="true" to="/about">About</router-link>

                <router-link class="nav-link" :class="{ active: $route.path === '/signin' }" role="tab"
                    aria-controls="nav-signin" aria-selected="true" to="/signin">Sign in</router-link>
            </div>
        </nav>
    </div>
</template>

<script setup>
</script>

<style scoped>
#nav_bar {
    background-color: lightblue;
    margin-bottom: 10px;
}

.nav.nav-tabs {
    display: flex;
    justify-content: space-around;
    width: auto;
    margin-left: 10%;
    margin-right: 10%;
}

.nav-link {
    width: 20%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
}
</style>