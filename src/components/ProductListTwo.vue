<template>
    <div class="product-list-two">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in saleProducts">
                <span class="product-name">{{product.name}}: </span>
                <span class="product-price">${{product.price}}</span>
            </li>
        </ul>
        <button v-on:click="increasePrice">Increase Price</button>
        <button v-on:click="reducePrice">Reduce Price</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        name: "product-list-two",
        computed: {
            ...mapGetters([
                'saleProducts'
            ])
        },
        methods: {
            ...mapActions([
                'increasePrice',
                'reducePrice'
            ])
        }
    }
</script>

<style scoped lang="scss">
    .product-list-two {
        background: #d1e4ff;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        padding: 10px 20px;

        ul {
            padding: 0;
            list-style-type: none;
        }

        li {
            margin-right: 10px;
            margin-top: 10px;
            padding: 20px;
            background: rgba(255,255,255,0.7);
        }
    }

    .product-price {
        font-weight: bold;
        color: #860ce8;
        display: block;
    }
</style>