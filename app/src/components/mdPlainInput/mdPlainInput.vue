<template>
  <input
    class="gp-input"
    :type="type"
    :value="value"
    :disabled="disabled"
    :required="required"
    :placeholder="placeholder"
    :maxlength="maxlength"
    @focus="onFocus"
    @blue="onBlur"
    @input="onInput"
    @keydown.up="onInput"
    @keydown.down="onInput">
</template>

<style lang="scss" src="./mdPlainInput.scss"></style>

<script>
  import themeMixin from '../../utils/themeMixin';

  export default {
    mixins: [themeMixin],
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: [String, Number],
      disabled: Boolean,
      required: Boolean,
      maxlength: [Number, String],
      placeholder: String
    },
    data: () => {
      return {
        isFocused: false
      };
    },
    computed: {
      classes() {
        return {
          'md-input-placeholder': this.hasPlaceholder,
          'md-input-disabled': this.disabled,
          'md-input-required': this.required,
          'md-input-focused': this.isFocused
        };
      }
    },
    methods: {
      hasPlaceholder() {
        return this.placeholder !== '';
      },
      onInput() {
        this.$emit('change', this.$el.value);
        this.$emit('input', this.$el.value);
      },
      getValue() {
        return this.$el.value;
      },
      onFocus() {
        this.isFocused = true;
      },
      onBlur() {
        this.isFocused = false;
      }
    }
  };
</script>
