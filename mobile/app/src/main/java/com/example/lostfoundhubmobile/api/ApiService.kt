package com.example.lostfoundhubmobile.network

import com.example.lostfoundhubmobile.model.*
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.POST

interface ApiService {

    @POST("api/auth/register")
    suspend fun register(@Body request: RegisterRequest): Response<ApiResponse>

    @POST("api/auth/login")
    suspend fun login(@Body request: LoginRequest): Response<ApiResponse>
}