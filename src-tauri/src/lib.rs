use windows::Win32::UI::WindowsAndMessaging::{MessageBoxW, MB_OK};

#[tauri::command]
fn show_message_box(message: &str) {
    unsafe {
        MessageBoxW(None, message, "Message from Tauri", MB_OK);
    }
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, show_message_box])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}