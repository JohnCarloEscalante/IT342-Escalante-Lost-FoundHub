package com.example.lostfoundhubmobile.ui

import android.os.Bundle
import android.util.Patterns
import android.view.View
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.example.lostfoundhubmobile.R
import com.example.lostfoundhubmobile.model.RegisterRequest
import com.example.lostfoundhubmobile.api.RetrofitClient
import kotlinx.coroutines.launch

class RegisterActivity : AppCompatActivity() {

    lateinit var etName: EditText
    lateinit var etEmail: EditText
    lateinit var etPassword: EditText
    lateinit var progressBar: ProgressBar

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register)

        etName = findViewById(R.id.etName)
        etEmail = findViewById(R.id.etEmail)
        etPassword = findViewById(R.id.etPassword)
        progressBar = findViewById(R.id.progressBar)

        findViewById<Button>(R.id.btnRegister).setOnClickListener {
            registerUser()
        }
    }

    private fun registerUser() {

        val name = etName.text.toString()
        val email = etEmail.text.toString()
        val password = etPassword.text.toString()

        if (name.isEmpty()) {
            toast("Name required")
            return
        }

        if (!Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            toast("Invalid email")
            return
        }

        if (password.length < 6) {
            toast("Password too short")
            return
        }

        progressBar.visibility = View.VISIBLE

        lifecycleScope.launch {
            try {
                val response = RetrofitClient.api.register(
                    RegisterRequest(name, email, password)
                )

                progressBar.visibility = View.GONE

                if (response.isSuccessful && response.body()?.success == true) {
                    toast("Registered successfully")
                    finish()
                } else {
                    toast("Registration failed")
                }

            } catch (e: Exception) {
                progressBar.visibility = View.GONE
                toast("Error: ${e.message}")
            }
        }
    }

    private fun toast(msg: String) {
        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show()
    }
}