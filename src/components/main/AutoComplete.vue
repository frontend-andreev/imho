<template>
  <div class="autocomplete">
    <CloseIcon
      @click="$emit('close', index)"
      v-if="close"
      class="autocomplete__icon"
    />
    <input
      :disabled="isDisabled"
      :readonly="readonly"
      type="text"
      :value="value != '' ? value : search"
      @click="readonly ? onChange($event) : null"
      @input="readonly ? null : onChange($event)"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
      :placeholder="placeholder"
      class="autocomplete__input"
    />
    <ul id="autocomplete-results" v-show="isOpen" class="autocomplete-results">
      <li class="loading" v-if="isLoading">Loading results...</li>
      <li
        v-else
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>
  
<script>
import CloseIcon from "@/assets/images/icons/close.svg?inline";
export default {
  name: "SearchAutocomplete",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false,
    },
    placeholder: {
      type: String,
      require: false,
      default: () => "",
    },
    isDisabled: {
      type: Boolean,
      require: false,
      default: false,
    },
    value: {
      type: String,
      require: false,
      default: () => "",
    },
    focus: {
      type: Boolean,
      require: false,
      default: false,
    },
    close: {
      type: Boolean,
      require: false,
      default: false,
    },
    index: {
      type: Number,
      require: true,
      default: 0,
    },
    readonly: {
      tyoe: Boolean,
      require: false,
      default: false
    }
  },
  components: {
    CloseIcon,
  },
  data() {
    return {
      isOpen: false,
      results: [],
      search: "",
      isLoading: false,
      arrowCounter: -1,
    };
  },
  watch: {
    items: function (value, oldValue) {
      if (value.length !== oldValue.length) {
        this.results = value;
        this.isLoading = false;
      }
    },
  },
  mounted() {
    if (this.focus) {
      this.$el.childNodes[1].focus();
    }
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    setResult(result) {
      this.search = result;
      this.isOpen = false;
      this.submit();
    },
    filterResults() {
      this.results = this.items.filter((item) => {
        return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
    onChange(event) {
      console.log(event);
      this.search = event.target.value;
      if (this.isAsync) {
        this.isLoading = true;
      } else if (this.search != null) {
        this.filterResults();
        this.isOpen = true;
      }
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter(event) {
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
      this.submit(event);
    },
    submit() {
      this.$emit("select", this.search);
    },
  },
};
</script>
  
  <style>
.autocomplete {
  position: relative;
}

.autocomplete-results {
  position: absolute;
  top: 40px;
  border-radius: 8px;
  padding: 0;
  margin: 0;
  border: 1px solid #c0c0c0;
  max-height: 200px;
  width: 300px;
  background: #fff;
  z-index: 999;
  overflow: auto;
  color: #231f20;
  font-size: 12px;
  font-weight: 700;
}
.autocomplete__icon {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.autocomplete__input::placeholder {
  color: #c0c0c0;
}
.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 10px 4px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  color: #b90c0c !important;
}
</style>