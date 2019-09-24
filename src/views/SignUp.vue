<template>
  <form>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">we send confirm to email</v-card-title>
          <v-card-text>check your email to confirm account.</v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" text @click="closeDialog">ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
                v-model="userName"
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
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              data-vv-name="password"
              ref="password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-text-field
              v-model="confirmPassword"
              v-validate="'required|confirmed:password'"
              :error-messages="errors.collect('checkPassword')"
              :append-icon="show2 ? 'visibility' : 'visibility_off'"
              :type="show2 ? 'text' : 'password'"
              name="input-10-1"
              label="Confirm Password"
              data-vv-name="checkPassword"
              data-vv-as="password"
              hint="confirm password"
              counter
              @click:append="show2 = !show2"
            ></v-text-field>

            <v-checkbox
                v-model="checkbox"
                v-validate="'required'"
                color="primary"
                :error-messages="errors.collect('checkbox')"
                value="1"
                label="Do you agree?"
                data-vv-name="checkbox"
                type="checkbox"
                required
            ></v-checkbox>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <span>Already a member?</span>
            <v-btn text color="primary" to="/signin">Sign in</v-btn>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" text @click="submit">Submit</v-btn>
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
      dialog: false,
      show1: false,
      show2: false,
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
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
        this.$validator.validate().then(noErrors => {
          if (noErrors) {
            /*this.info = {
              userName = this.userName,
              email = this.email,
              password = this.password,
              confirmPassword = this.confirmPassword
            };*/
            this.dialog = true;
          }
        })
      },
      closeDialog () {
        this.dialog = false;
        this.$router.push("/");
      }
    },
  }
</script>

<style>
</style>