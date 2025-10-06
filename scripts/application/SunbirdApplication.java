package org.sunbird;

import androidx.multidex.MultiDexApplication;

import com.crashlytics.android.Crashlytics;

import org.sunbird.config.BuildConfigUtil;

/**
 * Created by swayangjit on 12/4/19.
 */
public class SunbirdApplication extends MultiDexApplication {
    public static final String PACKAGE_NAME = "ma.fmps.maharat";

    @Override
    public void onCreate() {
        super.onCreate();
        initCrashlytics();
    }

    private void initCrashlytics() {
        // if (BuildConfigUtil.getBuildConfigValue(PACKAGE_NAME, "USE_CRASHLYTICS")) {
        //     Fabric.with(this, new Crashlytics());
        // }
    }
}
