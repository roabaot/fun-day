<template>
  <form>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
                v-model="name"
                v-validate="'required|max:10'"
                :counter="10"
                :error-messages="errors.collect('name')"
                label="Name"
                data-vv-name="name"
                required
            ></v-text-field>
            <v-text-field
                v-model="email"
                v-validate="'required|email'"
                :error-messages="errors.collect('email')"
                label="E-mail"
                data-vv-name="email"
                required
            ></v-text-field>

            <v-text-field
              v-model="password"
              v-validate="'required|min:8|max:16'"
              :error-messages="errors.collect('password')"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              label="Normal with hint text"
              data-vv-name="password"
              hint="At least 8 characters"
              counter
              @click:append="show = !show"
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <span>Forget your password?</span>
            <v-btn text flat color="primary" to="/">Reset</v-btn>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" text flat @click="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </form>
</template>

<script>
export default {
    $_veeValidate: {
      validator: 'new',
    },

    data: () => ({
      show: false,
      name: '',
      email: '',
      password: '',
      checkbox: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address',
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters',
          }
        },
      },
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      }
    },
  }
</script>