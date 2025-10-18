export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          full_name: string
          email: string
          phone: string | null
          crm: string | null
          specialty: string | null
          address: string | null
          verification_status: 'pending' | 'verified' | 'rejected'
          professional_type: 'doctor' | 'nurse' | 'other'
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          full_name: string
          email: string
          phone?: string | null
          crm?: string | null
          specialty?: string | null
          address?: string | null
          verification_status?: 'pending' | 'verified' | 'rejected'
          professional_type?: 'doctor' | 'nurse' | 'other'
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          full_name?: string
          email?: string
          phone?: string | null
          crm?: string | null
          specialty?: string | null
          address?: string | null
          verification_status?: 'pending' | 'verified' | 'rejected'
          professional_type?: 'doctor' | 'nurse' | 'other'
        }
        Relationships: []
      }
      shifts: {
        Row: {
          id: string
          user_id: string
          hospital: string
          specialty: string
          location: string
          date: string
          period: string
          value: number
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          hospital: string
          specialty: string
          location: string
          date: string
          period: string
          value: number
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          hospital?: string
          specialty?: string
          location?: string
          date?: string
          period?: string
          value?: number
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shifts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

