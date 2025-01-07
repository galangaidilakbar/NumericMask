<template>
    <DefaultField
        :field="field"
        :errors="errors"
        :show-help-text="showHelpText"
        :full-width-content="fullWidthContent"
    >
        <template #field>
            <input
                :id="field.attribute"
                type="text"
                class="w-full form-control form-input form-control-bordered"
                :class="errorClasses"
                :placeholder="field.name"
                v-model="displayValue"
                @input="handleInput"
                @blur="handleBlur"
            />
        </template>
    </DefaultField>
</template>

<script>
import { FormField, HandlesValidationErrors } from "laravel-nova";

export default {
    mixins: [FormField, HandlesValidationErrors],
    props: ["resourceName", "resourceId", "field"],

    data() {
        return {
            displayValue: "",
        };
    },

    methods: {
        setInitialValue() {
            this.value = this.field.value || "";
            this.displayValue = this.formatNumber(this.value);
        },

        fill(formData) {
            // Remove formatting before sending to server
            const rawValue = this.value
                ? this.value.toString().replace(/\./g, "")
                : "";
            formData.append(this.fieldAttribute, rawValue || "");
        },

        formatNumber(value) {
            if (!value) return "";
            // Remove existing dots first
            const number = value.toString().replace(/\./g, "");
            // Add dots for thousands
            return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },

        handleInput(event) {
            // Remove any non-digit characters except dots
            let input = event.target.value.replace(/[^\d.]/g, "");
            // Remove all dots to get raw number
            let rawNumber = input.replace(/\./g, "");
            // Update the internal value
            this.value = rawNumber;
            // Format for display
            this.displayValue = this.formatNumber(rawNumber);
        },

        handleBlur() {
            // Reformat on blur to ensure consistent display
            this.displayValue = this.formatNumber(this.value);
        },
    },
};
</script>
