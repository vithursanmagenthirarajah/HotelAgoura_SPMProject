package com.Agoura.HotelAgoura.Helper;



import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileUploadHelper {
	public final String UPLOAD_DIREC = "C:\\Users\\JATHU\\Desktop\\SPM\\HotelAgoura_SPMproject\\backend\\src\\main\\resources\\static\\images";
	@Value("${file.upload-dir}")
	String FILE_DIRECTORY;
	public boolean uploadFile(MultipartFile file) {
		boolean f = false;
		System.out.println(file.getContentType());
		try {
			InputStream is = file.getInputStream(); 
			byte data[] = new byte[is.available()];
			is.read(data);
			FileOutputStream fos = new FileOutputStream(UPLOAD_DIREC + File.separator + file.getOriginalFilename());
			fos.write(data);
			fos.flush();
			fos.close();
			
//			Files.copy(file.getInputStream(),Paths.get(UPLOAD_DIREC + File.separator + file.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
	
			f =true;
		} catch(Exception e) {
			e.printStackTrace();
		}
		return f;
	
	}

}



