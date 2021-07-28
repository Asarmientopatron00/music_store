<template>
    <b-container class="mt-5">
        <b-row>
            <b-col cols="9">
                <slot name="canciones"></slot>
            </b-col>
                <b-col cols="3">
                    <slot name="cart"></slot>
                </b-col>
        </b-row>
        </b-container>
</template>


<script>
export default {
    name: "Layout"
}
</script>